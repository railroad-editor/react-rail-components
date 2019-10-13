"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PartBase_1 = require("./primitives/PartBase");
const constants_1 = require("../constants");
const RectPart_1 = require("./primitives/RectPart");
class GapJoiner extends React.Component {
    constructor(props) {
        super(props);
    }
    get path() {
        return this.part.path;
    }
    render() {
        const { position, angle, pivot, fillColor, opacity, visible, selected, data, onLeftClick, onMouseEnter, onMouseLeave } = this.props;
        return (React.createElement(RectPart_1.default, { position: { x: position.x, y: position.y }, angle: angle, width: constants_1.GAP_JOINER_WIDTH, height: constants_1.GAP_JOINER_HEIGHT, fillColor: fillColor, opacity: opacity, pivot: PartBase_1.Pivot.CENTER, visible: visible, selected: selected, data: data, onLeftClick: onLeftClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: (r) => {
                if (r)
                    this.part = r;
            } }));
    }
}
exports.default = GapJoiner;
GapJoiner.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    pivot: PartBase_1.Pivot.CENTER,
    selected: false,
    opacity: 1,
    visible: true,
    fillColor: constants_1.GAP_JOINER_SOCKET_FILL_COLORS[0],
};
