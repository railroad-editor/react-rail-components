"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RectPart_1 = require("./primitives/RectPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
class CrossingRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { length, crossAngle, fillColor, flowDirections } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(RectPart_1.default, { position: { x: 0, y: 0 }, width: constants_1.RAIL_PART_WIDTH, height: length, pivot: PartBase_1.Pivot.CENTER, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(RectPart_1.default, { position: { x: 0, y: 0 }, angle: crossAngle, width: constants_1.RAIL_PART_WIDTH, height: length, pivot: PartBase_1.Pivot.CENTER, fillColor: fillColor, flowDirection: flowDirections[1], data: {
                        type: 'Part'
                    } })));
        };
    }
    get joints() {
        return [
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
            { pivotPartIndex: 1, pivot: PartBase_1.Pivot.LEFT },
            { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT }
        ];
    }
    get feederSockets() {
        return [];
    }
    get conductiveParts() {
        return [0, 1];
    }
}
exports.default = CrossingRailPart;
CrossingRailPart.defaultProps = RailPartBase_1.default.defaultProps;
