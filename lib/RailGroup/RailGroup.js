"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_paper_bindings_1 = require("react-paper-bindings");
const paper_1 = require("paper");
const logging_1 = require("../logging");
class RailGroup extends React.Component {
    constructor(props) {
        super(props);
        this.getPivotPosition = () => {
            const { pivotJointInfo } = this.props;
            if (!pivotJointInfo) {
                return undefined;
            }
            if (this.children[pivotJointInfo.railId]) {
                // 指定のPivotRailのPivotJointの位置を取得し、保存
                this.pivotPosition = this.children[pivotJointInfo.railId].railPart.getJointPositionToParent(pivotJointInfo.jointId);
            }
            // 指定のPivotRailIndexのレールが削除されていた場合、保存しておいたPivotPositionをそのまま使う
            return this.pivotPosition;
        };
        this.getInternalPivotAngle = () => {
            const { pivotJointInfo } = this.props;
            if (!pivotJointInfo) {
                return 0;
            }
            if (this.children[pivotJointInfo.railId]) {
                // 指定のPivotRailのPivotJointの角度を取得し、保存
                this.pivotAngle = this.children[pivotJointInfo.railId].railPart.getJointAngleToParent(pivotJointInfo.jointId);
            }
            // 指定のPivotRailIndexのレールが削除されていた場合、保存しておいたPivotAngleをそのまま使う
            return this.pivotAngle;
        };
        this.getChildComponents = () => {
            // 子要素のメソッドを呼び出す必要があるので、refをそれらのpropsに追加する
            // TODO: childrenが空の時のエラー処理
            return React.Children.map(this.props.children, (child, i) => {
                // 動的に子要素を削除された場合、nullが入ってくるので対処する
                if (child) {
                    return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { onMount: (node) => {
                            if (child.props.onMount) {
                                child.props.onMount(node);
                            }
                            this._children[i] = node;
                        }, onUnmount: (node) => {
                            if (child.props.onUnmount) {
                                child.props.onUnmount(node);
                            }
                            this._children[i] = null;
                        } }));
                }
                return null;
            });
        };
        this._children = this.props.children ? new Array(this.props.children.length) : [];
        this.pivotPosition = new paper_1.Point(this.props.position);
        this.pivotAngle = 0;
    }
    get children() {
        return this._children;
    }
    get group() {
        return this._group;
    }
    setInternal() {
        logging_1.log('[RailGroup]#setInternal()', this.group, this.group ? this.group.children : '');
        if (this.group.children.length > 0) {
            this.group.pivot = this.getPivotPosition();
            this.group.position = new paper_1.Point(this.props.position);
            this.group.rotation = this.getAngle();
        }
    }
    componentDidUpdate() {
        this.setInternal();
    }
    componentDidMount() {
        this.setInternal();
        if (this.props.onMount) {
            this.props.onMount(this);
        }
    }
    render() {
        const { position, angle, visible } = this.props;
        const children = this.getChildComponents();
        const pivotPosition = this.getPivotPosition();
        const groupAngle = this.getAngle();
        // console.debug('RailGroup#render', this.group, children, angle, pivotPosition, groupAngle)
        return (React.createElement(react_paper_bindings_1.Group, { pivot: pivotPosition, position: position, rotation: groupAngle, visible: visible, ref: (group) => this._group = group }, children));
    }
    getAngle() {
        return this.props.angle - this.getInternalPivotAngle() + 180;
    }
}
exports.default = RailGroup;
RailGroup.defaultProps = {
    type: 'RailGroup',
    visible: true,
    enableJoints: true,
    name: 'No name',
};
