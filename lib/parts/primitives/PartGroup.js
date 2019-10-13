"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const paper_1 = require("paper");
const react_paper_bindings_1 = require("react-paper-bindings");
const PartBase_1 = require("./PartBase");
const logging_1 = require("../../logging");
class PartGroup extends PartBase_1.default {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.createPathData = (props) => {
            return null;
        };
        this._children = this.props.children ? new Array(this.props.children.length) : [];
    }
    // ========== Public APIs ==========
    get children() {
        return this._children;
    }
    get group() {
        return this._ref;
    }
    componentDidUpdate() {
        this.setPivotAndPosition();
        logging_1.log(`[react-rail-components][PartGroup][${this.props.name}]#update() position=${this.group.position}, pivot=${this.group.pivot}, bounds=${this.group.bounds}`);
    }
    componentDidMount() {
        this._isMounted = true;
        // PivotまたはPivotPartの指定がある場合、ここでPivot位置を確定させて再描画する
        this.setPivotAndPosition();
        logging_1.log(`[react-rail-components][PartGroup][${this.props.name}]#mount() position=${this.group.position}, pivot=${this.group.pivot}, bounds=${this.group.bounds}`);
    }
    render() {
        const { position, angle, pivot, fillColor, visible, opacity, selected, name, data, onMouseDown, onMouseDrag, onMouseUp, onDoubleClick, onMouseMove, onMouseEnter, onMouseLeave } = this.props;
        // 子要素のメソッドを呼び出す必要があるので、refをそれらのpropsに追加する
        // TODO: childrenが空の時のエラー処理
        const children = React.Children.map(this.props.children, (child, i) => {
            // 動的に子要素を削除された場合、nullが入ってくるので対処する
            if (child) {
                return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { ref: (node) => {
                        if (node)
                            this._children[i] = node;
                    } }));
            }
            return null;
        });
        // 最初のrenderが呼ばれた時点ではまだ子が描画されていないので、Pivotの位置を確定できない
        // componentDidMountが呼ばれたらPivotを計算して再描画する
        let pivotPoint = undefined;
        if (this._isMounted) {
            pivotPoint = this.getInternalPivotPosition(pivot);
        }
        logging_1.log(`[react-rail-components][PartGroup][${this.props.name}]#render() position={x: ${position.x}, y: ${position.y}} angle=${angle}, pivot=${pivotPoint}`);
        return (React.createElement(react_paper_bindings_1.Group, { pivot: pivotPoint, position: position, rotation: angle, fillColor: fillColor, visible: visible, opacity: opacity, selected: selected, name: name, data: data, onMouseDown: onMouseDown, onMouseDrag: onMouseDrag, onMouseUp: onMouseUp, onClick: this.onClick, onDoubleClick: onDoubleClick, onMouseMove: onMouseMove, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, 
            // refには一瞬だけ引数にnullが入ってくることがある。(https://github.com/facebook/react/issues/4533)
            // 直後に再度呼ばれて本物が入ってくるが、あまり凝ったことはせずにシンプルに保つべき
            ref: this.getRef }, children));
    }
    getInternalPivotPosition(pivot) {
        // PivotPartIndexが指定されていたら、指定のパーツのPivotを使用する
        // そうでなければBoundingBoxのPivotを使用する
        if (this.props.pivotPartIndex != null) {
            return this._children[this.props.pivotPartIndex].getPosition(pivot);
        }
        else {
            return this.getPivotPositionFromBounds(pivot);
        }
    }
    getPivotPositionFromBounds(pivot) {
        switch (pivot) {
            case PartBase_1.Pivot.LEFT:
                return this.group.parentToLocal(this.group.bounds.leftCenter);
            case PartBase_1.Pivot.TOP:
                return this.group.parentToLocal(this.group.bounds.topCenter);
            case PartBase_1.Pivot.RIGHT:
                return this.group.parentToLocal(this.group.bounds.rightCenter);
            case PartBase_1.Pivot.BOTTOM:
                return this.group.parentToLocal(this.group.bounds.bottomCenter);
            case PartBase_1.Pivot.CENTER:
            default:
                return this.group.parentToLocal(this.group.bounds.center);
        }
    }
    setPivotAndPosition() {
        // もしGroupが入れ子になっていて、親GroupがこのGroupをPivotとして指定した場合、再描画を待たなければならない問題がある
        // それでは不便なので、ここでPaperJSのGroupを直接触ってpivot, positionを実質的に設定する
        // TODO: より上手い方法が無いか考える
        const { pivot, pivotPartIndex } = this.props;
        if (pivot == null && pivotPartIndex == null) {
            this.group.position = new paper_1.Point(this.props.position);
        }
        else {
            this.group.pivot = this.getInternalPivotPosition(this.props.pivot);
            this.group.position = new paper_1.Point(this.props.position);
        }
    }
}
exports.default = PartGroup;
PartGroup.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    pivot: PartBase_1.Pivot.CENTER,
    fillColor: undefined,
    visible: true,
    opacity: 1,
    selected: false,
};
