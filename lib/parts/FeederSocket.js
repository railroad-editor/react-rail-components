"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DetectablePart_1 = require("./primitives/DetectablePart");
const CirclePart_1 = require("./primitives/CirclePart");
const PartBase_1 = require("./primitives/PartBase");
const constants_1 = require("../constants");
const RectPart_1 = require("./primitives/RectPart");
const PartGroup_1 = require("./primitives/PartGroup");
class FeederSocket extends React.Component {
    constructor(props) {
        super(props);
    }
    // ========== Public APIs ==========
    get position() {
        return this.part.position;
    }
    get globalPosition() {
        return this.part.globalPosition;
    }
    get angle() {
        return this.part.angle;
    }
    get globalAngle() {
        return this.part.globalAngle;
    }
    // ========== Private methods ==========
    render() {
        const { position, angle, detectionEnabled, hasFeeder, pivot, selected, fillColors, opacity, visible, name, data, onLeftClick, onRightClick, onMouseMove, onMouseEnter, onMouseLeave } = this.props;
        return (React.createElement(DetectablePart_1.default, { mainPart: React.createElement(PartGroup_1.default, { pivotPartIndex: 0 },
                React.createElement(RectPart_1.default, { width: constants_1.FEEDER_SOCKET_WIDTH, height: constants_1.FEEDER_SOCKET_HEIGHT, opacity: opacity, pivot: PartBase_1.Pivot.CENTER })), detectionPart: React.createElement(PartGroup_1.default, { pivotPartIndex: 0 },
                React.createElement(CirclePart_1.default, { radius: constants_1.FEEDER_SOCKET_HIT_RADIUS, opacity: opacity * constants_1.FEEDER_SOCKET_DETECTION_OPACITY_RATE })), position: { x: position.x, y: position.y }, angle: angle, pivot: pivot, fillColors: fillColors, visible: visible, selected: selected, detectionEnabled: detectionEnabled && !hasFeeder, pivotPartIndex: 0, name: name, data: data, onLeftClick: onLeftClick, onRightClick: onRightClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseMove: onMouseMove, ref: (part) => {
                if (part)
                    this.part = part;
            } }));
    }
}
exports.default = FeederSocket;
FeederSocket.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    pivot: PartBase_1.Pivot.CENTER,
    selected: false,
    opacity: 1,
    visible: true,
    fillColors: constants_1.FEEDER_SOCKET_FILL_COLORS,
    hasFeeder: false,
    detectionEnabled: true
};
