"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DetectablePart_1 = require("./primitives/DetectablePart");
const CirclePart_1 = require("./primitives/CirclePart");
const PartBase_1 = require("./primitives/PartBase");
const constants_1 = require("../constants");
const PartGroup_1 = require("./primitives/PartGroup");
class GapJoinerSocket extends React.Component {
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
        const { position, angle, detectionEnabled, hasGapJoiner, pivot, selected, fillColors, opacity, visible, name, data, onLeftClick, onRightClick, onMouseMove, onMouseEnter, onMouseLeave } = this.props;
        return (React.createElement(DetectablePart_1.default, { mainPart: React.createElement(CirclePart_1.default, { radius: 0 }), detectionPart: React.createElement(PartGroup_1.default, { pivotPartIndex: 0 },
                React.createElement(CirclePart_1.default, { radius: constants_1.GAP_JOINER_SOCKET_HIT_RADIUS, opacity: opacity * constants_1.GAP_JOINER_SOCKET_DETECTION_OPACITY_RATE })), position: { x: position.x, y: position.y }, angle: angle, pivot: pivot, fillColors: fillColors, visible: visible, selected: selected, detectionEnabled: detectionEnabled && !hasGapJoiner, pivotPartIndex: 0, name: name, data: data, onLeftClick: onLeftClick, onRightClick: onRightClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseMove: onMouseMove, ref: (part) => {
                if (part)
                    this.part = part;
            } }));
    }
}
exports.default = GapJoinerSocket;
GapJoinerSocket.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    pivot: PartBase_1.Pivot.CENTER,
    selected: false,
    opacity: 1,
    visible: true,
    fillColors: constants_1.GAP_JOINER_SOCKET_FILL_COLORS,
    hasGapJoiner: false,
    detectionEnabled: true
};
