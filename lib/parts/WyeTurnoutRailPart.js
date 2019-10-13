"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArcPart_1 = require("./primitives/ArcPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
class WyeTurnoutRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { radius, centerAngle, flowDirections } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(ArcPart_1.default, { direction: ArcPart_1.ArcDirection.LEFT, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { direction: ArcPart_1.ArcDirection.RIGHT, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, flowDirection: flowDirections[1], pivot: PartBase_1.Pivot.LEFT, data: {
                        type: 'Part'
                    } })));
        };
    }
    get joints() {
        return [
            [
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT }
            ],
            [
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT }
            ]
        ][this.props.conductionState];
    }
    get feederSockets() {
        return [];
    }
    get conductiveParts() {
        return [[0], [1]][this.props.conductionState];
    }
}
exports.default = WyeTurnoutRailPart;
WyeTurnoutRailPart.defaultProps = RailPartBase_1.default.defaultProps;
