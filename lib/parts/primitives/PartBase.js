"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_paper_bindings_1 = require("react-paper-bindings");
const constants_1 = require("../../constants");
var Pivot;
(function (Pivot) {
    Pivot["CENTER"] = "Center";
    Pivot["LEFT"] = "Left";
    Pivot["TOP"] = "Top";
    Pivot["RIGHT"] = "Right";
    Pivot["BOTTOM"] = "Bottom";
})(Pivot = exports.Pivot || (exports.Pivot = {}));
var FlowDirection;
(function (FlowDirection) {
    FlowDirection[FlowDirection["NONE"] = 0] = "NONE";
    FlowDirection[FlowDirection["LEFT_TO_RIGHT"] = 1] = "LEFT_TO_RIGHT";
    FlowDirection[FlowDirection["RIGHT_TO_LEFT"] = 2] = "RIGHT_TO_LEFT";
    FlowDirection[FlowDirection["ILLEGAL"] = 3] = "ILLEGAL";
})(FlowDirection = exports.FlowDirection || (exports.FlowDirection = {}));
class PartBase extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 電流アニメーションをする
         * @param event
         */
        this.onFrame = (event) => {
            let ratio = event.count % 60 / 60;
            let currentOrigin;
            let currentDestination;
            // 無電流のパーツよりも前に持ってくる
            switch (this.props.flowDirection) {
                case FlowDirection.NONE:
                    // 何もしない
                    this.path.fillColor = this.props.fillColor;
                    return;
                case FlowDirection.LEFT_TO_RIGHT:
                    currentOrigin = this.getPosition(Pivot.LEFT).multiply(2 - ratio).add(this.getPosition(Pivot.RIGHT).multiply(ratio - 1));
                    currentDestination = currentOrigin.add(this.getPosition(Pivot.RIGHT).subtract(this.getPosition(Pivot.LEFT)).multiply(2));
                    break;
                case FlowDirection.RIGHT_TO_LEFT:
                    currentOrigin = this.getPosition(Pivot.LEFT).multiply(ratio + 1).add(this.getPosition(Pivot.RIGHT).multiply(-ratio));
                    currentDestination = currentOrigin.add(this.getPosition(Pivot.RIGHT).subtract(this.getPosition(Pivot.LEFT)).multiply(2));
                    break;
                case FlowDirection.ILLEGAL:
                    this.path.fillColor = "red";
                    return;
            }
            this.path.fillColor = {
                gradient: {
                    stops: [constants_1.ANIMATION_FLOW_COLOR_1, constants_1.ANIMATION_FLOW_COLOR_2, constants_1.ANIMATION_FLOW_COLOR_1, constants_1.ANIMATION_FLOW_COLOR_2, constants_1.ANIMATION_FLOW_COLOR_1]
                },
                origin: currentDestination,
                destination: currentOrigin,
            };
        };
        this.onClick = (e) => {
            switch (e.event.button) {
                case 0:
                    if (this.props.onLeftClick) {
                        this.props.onLeftClick(e);
                    }
                    break;
                case 2:
                    if (this.props.onRightClick) {
                        this.props.onRightClick(e);
                    }
                    break;
            }
        };
        this.getRef = (ref) => {
            if (ref)
                this._ref = ref;
        };
    }
    // ========== Public APIs ==========
    get path() {
        return this._ref;
    }
    get position() {
        return this.path.position;
    }
    get globalPosition() {
        return this.getGlobalPosition(Pivot.CENTER);
    }
    get angle() {
        return this.getAngle(Pivot.CENTER);
    }
    get globalAngle() {
        return this.getGlobalAngle(Pivot.CENTER);
    }
    /**
     * ローカル座標系における指定のPivotの角度を返す。
     * @param {Pivot} pivot
     */
    getAngle(pivot) {
        return this.path.rotation;
    }
    /**
     * 指定のアイテムの座標系における指定のPivotの角度を返す。
     * @param {Item} item
     * @param {Pivot} pivot
     * @returns {number}
     */
    getAngleTo(item, pivot) {
        return this.path.getMatrixTo(item).decompose().rotation;
    }
    /**
     * グローバル座標系における指定のPivotの角度を返す。
     * @param {Pivot} pivot
     */
    getGlobalAngle(pivot) {
        return this.path.getGlobalMatrix().decompose().rotation;
    }
    /**
     * ローカル座標系における指定のPivotの位置を返す。
     * @param {Pivot} pivot
     */
    getPosition(pivot) {
        return this.path.localToParent(this.getInternalPivotPosition(pivot));
    }
    /**
     * 指定のアイテムの座標系における指定のPivotの位置を返す。
     * @param {Item} item
     * @param {Pivot} pivot
     */
    getPositionTo(item, pivot) {
        return this.path.localToOther(item, this.getInternalPivotPosition(pivot));
    }
    /**
     * グローバル座標系における指定のPivotの位置を返す。
     * @param {Pivot} pivot
     */
    getGlobalPosition(pivot) {
        this.path._project._updateVersion += 1;
        return this.path.localToGlobal(this.getInternalPivotPosition(pivot));
    }
    render() {
        const { position, angle, pivot, fillColor, visible, opacity, selected, name, data, onMouseDown, onMouseDrag, onMouseUp, onDoubleClick, onMouseMove, onMouseEnter, onMouseLeave } = this.props;
        const pathData = this.createPathData(this.props);
        const pivotPosition = this.getInternalPivotPosition(pivot);
        return React.createElement(react_paper_bindings_1.Path, { pathData: pathData, pivot: pivotPosition, position: position, rotation: angle, fillColor: fillColor, visible: visible, opacity: opacity, selected: selected, name: name, data: data, onMouseDown: onMouseDown, onMouseDrag: onMouseDrag, onMouseUp: onMouseUp, onClick: this.onClick, onDoubleClick: onDoubleClick, onMouseMove: onMouseMove, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: this.getRef });
    }
}
exports.default = PartBase;
PartBase.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    pivot: Pivot.CENTER,
    fillColor: 'black',
    visible: true,
    opacity: 1,
    selected: false,
    flowDirection: FlowDirection.NONE,
};
