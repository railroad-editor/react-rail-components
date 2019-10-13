"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArcPart_1 = require("./primitives/ArcPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
class CurveRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { radius, centerAngle, direction, fillColor, flowDirections } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(ArcPart_1.default, { pivot: PartBase_1.Pivot.LEFT, direction: direction, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } })));
        };
    }
    get joints() {
        return [
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
        ];
    }
    get feederSockets() {
        return [
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.CENTER },
        ];
    }
    get conductiveParts() {
        return [0];
    }
}
exports.default = CurveRailPart;
CurveRailPart.defaultProps = RailPartBase_1.default.defaultProps;
