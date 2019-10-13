"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PartBase_1 = require("./primitives/PartBase");
const utils_1 = require("../utils");
const PartGroup_1 = require("./primitives/PartGroup");
const constants_1 = require("../constants");
class RailPartBase extends React.Component {
    constructor(props) {
        super(props);
        // 現在レールパーツとギャップは同じグループなので色も同じになってしまう
        // それを防ぐため汚いがここで色をセットする
        // TODO: もっといい方法を考える
        this.setGapColor = () => {
            this.partGroup.children
                .filter(c => c.props.data.type === 'Gap')
                .forEach(c => {
                c.path.fillColor = 'red';
            });
        };
        this.fixRotationByPivot = () => {
            const { pivotPartIndex, pivot } = this.getPivot(this.props.pivotJointIndex);
            if (pivotPartIndex != null) {
                const pivotAngle = this.partGroup.children[pivotPartIndex].getAngle(pivot);
                let rotation;
                switch (pivot) {
                    case PartBase_1.Pivot.LEFT:
                        rotation = utils_1.normAngle(360 - pivotAngle);
                        break;
                    case PartBase_1.Pivot.RIGHT:
                        rotation = utils_1.normAngle(360 - (pivotAngle + 180));
                        break;
                    default:
                        throw Error(`Invalid pivot ${pivot} for ${this.constructor.name}`);
                }
                this.path.rotation = rotation + this.props.angle;
            }
        };
        this.getRef = (partGroup) => {
            if (partGroup)
                this.partGroup = partGroup;
        };
        this.onFrame = (e) => {
            // アニメーションはパーツだけに限定
            this.partGroup.children
                .filter(c => c.props.data.type === 'Part')
                .forEach(c => c.onFrame(e));
        };
    }
    get path() {
        return this.partGroup.path;
    }
    componentDidUpdate() {
        // console.debug('[RailPart] updated')
        // _.range(this.joints.length).forEach(i => {
        //   console.debug(`[RailPart][${this.props.name}] j${i}: ${this.getGlobalJointPosition(i)}, ${this.getGlobalJointAngle(i)}`);
        // })
        this.fixRotationByPivot();
        this.setGapColor();
    }
    componentDidMount() {
        // console.debug('[RailPart] mounted')
        // _.range(this.joints.length).forEach(i => {
        // console.debug(`[RailPart][${this.props.name}] j${i}: ${this.getGlobalJointPosition(i)}, ${this.getGlobalJointAngle(i)}`);
        // })
        this.fixRotationByPivot();
        this.setGapColor();
    }
    getPivotPositionToParent(pivotInfo) {
        let parent = this.partGroup.path.parent;
        return this.partGroup.children[pivotInfo.pivotPartIndex].getPositionTo(parent, pivotInfo.pivot);
    }
    getPivotAngleToParent(pivotInfo) {
        let parent = this.partGroup.path.parent;
        let globalRotation = this.partGroup.children[pivotInfo.pivotPartIndex].getAngleTo(parent, pivotInfo.pivot);
        if (pivotInfo.pivot === PartBase_1.Pivot.LEFT) {
            return (globalRotation + 180) % 360;
        }
        else {
            return globalRotation;
        }
    }
    /**
     * このパーツの親の座標系における指定のジョイントの位置を返す。
     * @param {number} jointIndex
     * @returns {paper.Point}
     */
    getJointPositionToParent(jointIndex) {
        // 決まった階層構造を前提としている。どのように実装を矯正すべきか？
        const { pivotPartIndex, pivot } = this.getPivot(jointIndex);
        let parent = this.partGroup.path.parent;
        return this.partGroup.children[pivotPartIndex].getPositionTo(parent, pivot);
    }
    /**
     * グローバル座標系における指定のジョイントの位置を返す。
     * @param {number} jointIndex
     * @returns {paper.Point}
     */
    getGlobalJointPosition(jointIndex) {
        // 決まった階層構造を前提としている。どのように実装を矯正すべきか？
        const { pivotPartIndex, pivot } = this.getPivot(jointIndex);
        return this.partGroup.children[pivotPartIndex].getGlobalPosition(pivot);
    }
    /**
     * グローバル座標系における指定のジョイントの角度を返す。
     * @param {number} jointIndex
     * @returns {number}
     */
    getJointAngleToParent(jointIndex) {
        const { pivotPartIndex, pivot } = this.getPivot(jointIndex);
        // レールパーツ内部のGroupにおけるPartのPivotにおける角度を取得
        let parent = this.partGroup.path.parent;
        let globalRotation = this.partGroup.children[pivotPartIndex].getAngleTo(parent, pivot);
        if (pivot === PartBase_1.Pivot.LEFT) {
            return (globalRotation + 180) % 360;
        }
        else {
            return globalRotation;
        }
    }
    /**
     * グローバル座標系における指定のジョイントの角度を返す。
     * @param {number} jointIndex
     * @returns {number}
     */
    getGlobalJointAngle(jointIndex) {
        const { pivotPartIndex, pivot } = this.getPivot(jointIndex);
        // レールパーツ内部のGroupにおけるPartのPivotにおける角度を取得
        let globalRotation = this.partGroup.children[pivotPartIndex].getGlobalAngle(pivot);
        if (pivot === PartBase_1.Pivot.LEFT) {
            return (globalRotation + 180) % 360;
        }
        else {
            return globalRotation;
        }
    }
    get tip() {
        return { pivotPartIndex: 0, pivot: PartBase_1.Pivot.CENTER };
    }
    getPivot(jointIndex) {
        if (jointIndex == null) {
            return { pivotPartIndex: undefined, pivot: PartBase_1.Pivot.CENTER };
        }
        return this.joints[jointIndex];
    }
    render() {
        const { position, angle, pivotJointIndex, selected, fillColor, fillColors, name, data, onLeftClick, onRightClick, visible, opacity, onMouseEnter, onMouseLeave, onMouseMove } = this.props;
        const { pivotPartIndex, pivot } = this.getPivot(pivotJointIndex);
        let parts = this.renderParts().props.children;
        if (!Array.isArray(parts)) {
            parts = [parts];
        }
        // fillColors に色が入っていなかったら fillColor を適用する
        let extendedParts = React.Children.map(parts, (c, i) => React.cloneElement(c, {
            fillColor: fillColors[i] ? fillColors[i] : fillColor
        }));
        // Create detection parts
        let detectionParts = parts.map(c => React.cloneElement(c, {
            width: constants_1.RAIL_PART_WIDTH / 2,
            data: {
                type: 'Detect'
            }
        }));
        return (React.createElement(PartGroup_1.default, { position: { x: position.x, y: position.y }, angle: angle, pivot: pivot, pivotPartIndex: pivotPartIndex, fillColor: fillColor, visible: visible, opacity: opacity, selected: selected, name: name, data: data, onLeftClick: onLeftClick, onRightClick: onRightClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseMove: onMouseMove, ref: this.getRef },
            extendedParts,
            detectionParts));
    }
}
exports.default = RailPartBase;
RailPartBase.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    detectionEnabled: true,
    selected: false,
    opacity: 1,
    visible: true,
    fillColor: undefined,
    fillColors: {},
    flowDirections: {},
    conductionState: 0,
    showGap: true,
};
