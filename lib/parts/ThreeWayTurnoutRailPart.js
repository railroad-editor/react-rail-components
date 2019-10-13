"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RectPart_1 = require("./primitives/RectPart");
const ArcPart_1 = require("./primitives/ArcPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
class ThreeWayTurnoutRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { length, rightStart, rightRadius, rightCenterAngle, leftStart, leftRadius, leftCenterAngle, fillColor, flowDirections } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(RectPart_1.default, { width: constants_1.RAIL_PART_WIDTH, height: length, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { position: { x: rightStart, y: 0 }, direction: ArcPart_1.ArcDirection.RIGHT, radius: rightRadius, centerAngle: rightCenterAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[1], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { position: { x: leftStart, y: 0 }, direction: ArcPart_1.ArcDirection.LEFT, radius: leftRadius, centerAngle: leftCenterAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[2], data: {
                        type: 'Part'
                    } })));
        };
    }
    get joints() {
        return [
            [
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.RIGHT }
            ],
            [
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.RIGHT }
            ],
            [
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.RIGHT }
            ]
        ][this.props.conductionState];
    }
    get feederSockets() {
        return [];
    }
    get conductiveParts() {
        return [[0], [1], [2]][this.props.conductionState];
    }
}
exports.default = ThreeWayTurnoutRailPart;
ThreeWayTurnoutRailPart.defaultProps = RailPartBase_1.default.defaultProps;
