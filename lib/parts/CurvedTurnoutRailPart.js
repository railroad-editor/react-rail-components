"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArcPart_1 = require("./primitives/ArcPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
const RectPart_1 = require("./primitives/RectPart");
class CurvedTurnoutRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { innerRadius, outerRadius, innerCenterAngle, outerCenterAngle, direction, fillColor, flowDirections } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(RectPart_1.default, { width: constants_1.RAIL_PART_WIDTH, height: 0, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    }, visible: false }),
                React.createElement(ArcPart_1.default, { angle: direction === ArcPart_1.ArcDirection.RIGHT ? -constants_1.CURVED_TURNOUT_ANGLE_DEVIATION : constants_1.CURVED_TURNOUT_ANGLE_DEVIATION, direction: direction, radius: outerRadius, centerAngle: outerCenterAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { angle: direction === ArcPart_1.ArcDirection.RIGHT ? constants_1.CURVED_TURNOUT_ANGLE_DEVIATION : -constants_1.CURVED_TURNOUT_ANGLE_DEVIATION, direction: direction, radius: innerRadius, centerAngle: innerCenterAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[1], data: {
                        type: 'Part'
                    } })));
        };
    }
    get joints() {
        return [
            [
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.RIGHT }
            ],
            [
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.RIGHT }
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
exports.default = CurvedTurnoutRailPart;
CurvedTurnoutRailPart.defaultProps = RailPartBase_1.default.defaultProps;
