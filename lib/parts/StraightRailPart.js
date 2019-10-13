"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RectPart_1 = require("./primitives/RectPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
class StraightRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { length, fillColor, flowDirections } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(RectPart_1.default, { width: constants_1.RAIL_PART_WIDTH, height: length, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } })));
        };
    }
    // Pivotにするジョイントの位置を指定するための情報
    get joints() {
        return [
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.RIGHT }
        ];
    }
    get feederSockets() {
        return [{ pivotPartIndex: 0, pivot: PartBase_1.Pivot.CENTER }];
    }
    get conductiveParts() {
        return [0];
    }
    get tip() {
        return { pivotPartIndex: 0, pivot: PartBase_1.Pivot.CENTER };
    }
}
exports.default = StraightRailPart;
StraightRailPart.defaultProps = RailPartBase_1.default.defaultProps;
