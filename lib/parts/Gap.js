"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RectPart_1 = require("./primitives/RectPart");
const constants_1 = require("../constants");
class Gap extends React.Component {
    constructor(props) {
        super(props);
    }
    get path() {
        return this.part.path;
    }
    render() {
        const { position, angle, opacity, fillColor, visible } = this.props;
        return (React.createElement(RectPart_1.default, { width: constants_1.GAP_WIDTH, height: constants_1.GAP_HEIGHT, opacity: opacity, position: { x: position.x, y: position.y }, angle: angle, pivot: undefined, visible: visible, fillColor: fillColor, name: name, ref: (r) => {
                if (r)
                    this.part = r;
            } }));
    }
}
exports.default = Gap;
Gap.defaultProps = {
    position: { x: 0, y: 0 },
    angle: 0,
    selected: false,
    opacity: 1,
    visible: true,
    fillColor: constants_1.GAP_FILL_COLOR,
    hasOpposingGap: false,
    detectionEnabled: true
};
