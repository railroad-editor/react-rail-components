"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DetectablePart_1 = require("./primitives/DetectablePart");
const CirclePart_1 = require("./primitives/CirclePart");
const PartBase_1 = require("./primitives/PartBase");
const constants_1 = require("../constants");
const RectPart_1 = require("./primitives/RectPart");
class Joint extends React.Component {
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
        const { position, angle, detectionEnabled, hasOpposingJoint, pivot, selected, fillColors, opacity, visible, name, data, onLeftClick, onRightClick, onMouseMove, onMouseEnter, onMouseLeave } = this.props;
        return (React.createElement(DetectablePart_1.default, { mainPart: React.createElement(RectPart_1.default, { width: constants_1.JOINT_WIDTH, height: constants_1.JOINT_HEIGHT, opacity: opacity }), detectionPart: React.createElement(CirclePart_1.default, { radius: constants_1.JOINT_HIT_RADIUS, opacity: opacity * constants_1.JOINT_DETECTION_OPACITY_RATE }), position: { x: position.x, y: position.y }, angle: angle, pivot: pivot, fillColors: fillColors, visible: visible, detectionEnabled: detectionEnabled && !hasOpposingJoint, name: name, data: data, onLeftClick: onLeftClick, onRightClick: onRightClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseMove: onMouseMove, ref: (part) => {
                if (part)
                    this.part = part;
            } }));
    }
}
exports.default = Joint;
Joint.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    pivot: PartBase_1.Pivot.CENTER,
    selected: false,
    opacity: 1,
    visible: true,
    fillColors: constants_1.JOINT_FILL_COLORS,
    hasOpposingJoint: false,
    detectionEnabled: true
};
