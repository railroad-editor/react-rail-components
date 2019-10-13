"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PartGroup_1 = require("./PartGroup");
/**
 * 当たり判定による検出状態。
 */
var DetectionState;
(function (DetectionState) {
    DetectionState[DetectionState["DISABLED"] = 0] = "DISABLED";
    DetectionState[DetectionState["BEFORE_DETECT"] = 1] = "BEFORE_DETECT";
    DetectionState[DetectionState["DETECTING"] = 2] = "DETECTING";
    DetectionState[DetectionState["AFTER_DETECT"] = 3] = "AFTER_DETECT"; // 検出後（クリックなどにより選択された）
})(DetectionState = exports.DetectionState || (exports.DetectionState = {}));
class DetectablePart extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseMove = (e) => {
            // 検出中状態を他のPathに邪魔されないよう、前面に出し続ける
            if (this.isDetecting()) {
                if (!this.props.preventBringToFront) {
                    this._partGroup.group.bringToFront();
                }
                // TODO: 位置はここでいいか？
                if (this.props.onMouseMove) {
                    this.props.onMouseMove(e);
                }
            }
        };
        this.onMouseEnter = (e) => {
            // 検出前状態なら検出中状態に移行し、コールバックを呼んでやる
            if (this.isBeforeDetect()) {
                this.setState({
                    detectionState: DetectionState.DETECTING,
                    detectionPartVisible: true
                });
                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(e);
                }
            }
        };
        this.onMouseLeave = (e) => {
            // 検出中状態なら検出前状態に移行し、コールバックを呼んでやる
            if (this.isDetecting()) {
                this.setState({
                    detectionState: DetectionState.BEFORE_DETECT,
                    detectionPartVisible: true
                });
                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave(e);
                }
            }
        };
        this.onLeftClick = (e) => {
            let shouldChangeState = false;
            if (this.props.onLeftClick) {
                shouldChangeState = this.props.onLeftClick(e);
            }
            // コールバックがtrueを返した時のみ状態を変更する
            if (shouldChangeState) {
                this.setState({
                    detectionState: DetectionState.AFTER_DETECT,
                    detectionPartVisible: false
                });
            }
        };
        this.onRightClick = (e) => {
            let shouldChangeState = false;
            if (this.props.onRightClick) {
                shouldChangeState = this.props.onRightClick(e);
            }
            // コールバックがtrueを返した時のみ状態を変更する
            if (shouldChangeState) {
                this.setState({
                    detectionState: DetectionState.AFTER_DETECT,
                    detectionPartVisible: false
                });
            }
        };
        if (this.props.detectionEnabled) {
            this.state = {
                detectionState: DetectionState.BEFORE_DETECT,
                detectionPartVisible: true,
                isError: false,
            };
        }
        else {
            this.state = {
                detectionState: DetectionState.DISABLED,
                detectionPartVisible: false,
                isError: false,
            };
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.getInstance = this.getInstance.bind(this);
    }
    get partGroup() {
        return this._partGroup;
    }
    get mainPart() {
        return this._partGroup.children[0];
    }
    // ========== Private methods ==========
    get detectionPart() {
        return this._partGroup.children[1];
    }
    get position() {
        return this._partGroup.position;
    }
    get globalPosition() {
        return this._partGroup.globalPosition;
    }
    get angle() {
        return this._partGroup.angle;
    }
    get globalAngle() {
        return this._partGroup.globalAngle;
    }
    resetDetectionState() {
        this.setState({
            detectionState: DetectionState.BEFORE_DETECT
        });
    }
    isDetecting() {
        return this.props.detectionEnabled && this.state.detectionState == DetectionState.DETECTING;
    }
    isBeforeDetect() {
        return this.props.detectionEnabled && this.state.detectionState == DetectionState.BEFORE_DETECT;
    }
    // detectionEnabledが OFF -> ON になった場合は状態をリセットする
    componentWillReceiveProps(nextProps) {
        if (!this.props.detectionEnabled && nextProps.detectionEnabled) {
            this.setState({
                detectionState: DetectionState.BEFORE_DETECT,
                detectionPartVisible: true
            });
        }
    }
    render() {
        const { position, angle, pivot, pivotPartIndex, fillColors, selected, name, data, detectionEnabled, mainPart, detectionPart, visible, opacity } = this.props;
        const { detectionState, isError } = this.state;
        // 主パーツの色を変更
        let clonedMainPart = React.cloneElement(mainPart, Object.assign(Object.assign({}, mainPart.props), { visible: true, fillColor: fillColors[this.state.detectionState], name: 'main' }));
        // 検出パーツの色を変更
        // 検出無効状態なら描画しない
        let clonedDetectionPart;
        if (detectionEnabled) {
            const color = detectionState === DetectionState.DETECTING && isError ? 'red' : fillColors[detectionState];
            clonedDetectionPart = React.cloneElement(detectionPart, Object.assign(Object.assign({}, detectionPart.props), { visible: detectionEnabled ? this.isDetecting() || this.isBeforeDetect() : false, fillColor: color, name: 'detect' }));
        }
        return (React.createElement(PartGroup_1.default, { position: position, angle: angle, pivot: pivot, pivotPartIndex: pivotPartIndex, 
            // fillColor={fillColor}
            visible: visible, opacity: opacity, selected: selected, name: name, data: data, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onMouseMove: this.onMouseMove, onLeftClick: this.onLeftClick, onRightClick: this.onRightClick, ref: this.getInstance },
            clonedMainPart,
            detectionEnabled && clonedDetectionPart));
    }
    getInstance(_partGroup) {
        if (_partGroup)
            this._partGroup = _partGroup;
    }
}
exports.default = DetectablePart;
DetectablePart.defaultProps = {
    fillColors: [undefined, undefined, undefined, undefined]
};
