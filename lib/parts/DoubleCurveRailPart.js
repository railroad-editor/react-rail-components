"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
const ArcPart_1 = require("./primitives/ArcPart");
class DoubleCurveRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { innerRadius, outerRadius, centerAngle, direction, fillColor, flowDirections } = this.props;
            let radius1, radius2;
            switch (this.props.direction) {
                case ArcPart_1.ArcDirection.RIGHT:
                    radius1 = outerRadius;
                    radius2 = innerRadius;
                    break;
                case ArcPart_1.ArcDirection.LEFT:
                    radius1 = innerRadius;
                    radius2 = outerRadius;
                    break;
            }
            return (React.createElement(React.Fragment, null,
                React.createElement(ArcPart_1.default, { pivot: PartBase_1.Pivot.LEFT, direction: direction, radius: radius1, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(ArcPart_1.default, { pivot: PartBase_1.Pivot.LEFT, direction: direction, position: { x: 0, y: constants_1.RAIL_SPACE }, radius: radius2, centerAngle: centerAngle, width: constants_1.RAIL_PART_WIDTH, fillColor: fillColor, flowDirection: flowDirections[1], data: {
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
        return [
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.CENTER },
            { pivotPartIndex: 1, pivot: PartBase_1.Pivot.CENTER },
        ];
    }
    get conductiveParts() {
        return [0, 1];
    }
}
exports.default = DoubleCurveRailPart;
DoubleCurveRailPart.defaultProps = RailPartBase_1.default.defaultProps;
