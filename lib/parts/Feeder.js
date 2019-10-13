"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TrianglePart_1 = require("./primitives/TrianglePart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RectPart_1 = require("./primitives/RectPart");
const PartGroup_1 = require("./primitives/PartGroup");
class Feeder extends React.Component {
    constructor(props) {
        super(props);
        this.getAngle = () => {
            const { angle, direction } = this.props;
            switch (direction) {
                case PartBase_1.FlowDirection.LEFT_TO_RIGHT:
                    return angle;
                case PartBase_1.FlowDirection.RIGHT_TO_LEFT:
                    return angle + 180;
                default:
                    return angle;
            }
        };
    }
    get path() {
        return this.part.path;
    }
    render() {
        const { position, pivot, opacity, fillColor, visible, selected, data, onLeftClick, onMouseEnter, onMouseLeave } = this.props;
        const angle = this.getAngle();
        return (React.createElement(PartGroup_1.default, { position: { x: position.x, y: position.y }, pivotPartIndex: 0, angle: angle, opacity: opacity, pivot: pivot ? pivot : PartBase_1.Pivot.CENTER, fillColor: fillColor, visible: visible, selected: selected, data: data, onLeftClick: onLeftClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: (r) => {
                if (r)
                    this.part = r;
            } },
            React.createElement(RectPart_1.default, { width: constants_1.FEEDER_SOCKET_WIDTH, height: constants_1.FEEDER_SOCKET_HEIGHT }),
            React.createElement(TrianglePart_1.default, { width: constants_1.FEEDER_WIDTH, height: constants_1.FEEDER_HEIGHT, pivot: PartBase_1.Pivot.TOP })));
    }
}
exports.default = Feeder;
Feeder.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    selected: false,
    opacity: 1,
    visible: true,
    fillColor: constants_1.FEEDER_SOCKET_FILL_COLORS[0]
};
