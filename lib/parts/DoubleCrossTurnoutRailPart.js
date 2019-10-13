"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RectPart_1 = require("./primitives/RectPart");
const ArcPart_1 = require("./primitives/ArcPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
const Gap_1 = require("./Gap");
class DoubleCrossTurnoutRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { length, centerAngle, fillColor, flowDirections, showGap } = this.props;
            // TODO: 方程式を解いてちゃんと値を出す
            const radius = length / (2 * Math.sin(centerAngle / 180 * Math.PI));
            return (React.createElement(React.Fragment, null,
                React.createElement(RectPart_1.default, { width: constants_1.RAIL_PART_WIDTH, height: length / 2, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(RectPart_1.default, { position: { x: length / 2, y: 0 }, width: constants_1.RAIL_PART_WIDTH, height: length / 2, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[1], data: {
                        type: 'Part'
                    } }),
                React.createElement(RectPart_1.default, { position: { x: 0, y: constants_1.RAIL_SPACE }, width: constants_1.RAIL_PART_WIDTH, height: length / 2, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[2], data: {
                        type: 'Part'
                    } }),
                React.createElement(RectPart_1.default, { position: { x: length / 2, y: constants_1.RAIL_SPACE }, width: constants_1.RAIL_PART_WIDTH, height: length / 2, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[3], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { direction: ArcPart_1.ArcDirection.RIGHT, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[4], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { position: { x: length, y: 0 }, direction: ArcPart_1.ArcDirection.RIGHT, angle: -centerAngle, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.RIGHT, fillColor: fillColor, flowDirection: flowDirections[5], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { position: { x: 0, y: constants_1.RAIL_SPACE }, direction: ArcPart_1.ArcDirection.LEFT, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[6], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { position: { x: length, y: constants_1.RAIL_SPACE }, direction: ArcPart_1.ArcDirection.LEFT, angle: centerAngle, radius: radius, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, pivot: PartBase_1.Pivot.RIGHT, fillColor: fillColor, flowDirection: flowDirections[7], data: {
                        type: 'Part'
                    } }),
                React.createElement(Gap_1.default, { position: { x: length / 2, y: 0 }, visible: showGap, data: {
                        type: 'Gap',
                    } }),
                React.createElement(Gap_1.default, { position: { x: length / 2, y: constants_1.RAIL_SPACE }, visible: showGap, data: {
                        type: 'Gap',
                    } }),
                React.createElement(Gap_1.default, { position: { x: length / 2, y: constants_1.RAIL_SPACE / 2 }, angle: centerAngle, visible: showGap, data: {
                        type: 'Gap',
                    } }),
                React.createElement(Gap_1.default, { position: { x: length / 2, y: constants_1.RAIL_SPACE / 2 }, angle: -centerAngle, visible: showGap, data: {
                        type: 'Gap',
                    } })));
        };
    }
    get joints() {
        return [
            [
                { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 2, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 3, pivot: PartBase_1.Pivot.RIGHT }
            ],
            [
                { pivotPartIndex: 4, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 5, pivot: PartBase_1.Pivot.RIGHT },
                { pivotPartIndex: 6, pivot: PartBase_1.Pivot.LEFT },
                { pivotPartIndex: 7, pivot: PartBase_1.Pivot.RIGHT }
            ]
        ][this.props.conductionState];
    }
    get feederSockets() {
        return [];
    }
    get conductiveParts() {
        return [[0, 1, 2, 3], [4, 5, 6, 7]][this.props.conductionState];
    }
}
exports.default = DoubleCrossTurnoutRailPart;
DoubleCrossTurnoutRailPart.defaultProps = RailPartBase_1.default.defaultProps;
