"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RectPart_1 = require("./primitives/RectPart");
const constants_1 = require("../constants");
const PartBase_1 = require("./primitives/PartBase");
const RailPartBase_1 = require("./RailPartBase");
const Gap_1 = require("./Gap");
class GappedStraightRailPart extends RailPartBase_1.default {
    constructor(props) {
        super(props);
        this.renderParts = () => {
            const { length, fillColor, flowDirections, showGap } = this.props;
            return (React.createElement(React.Fragment, null,
                React.createElement(RectPart_1.default, { width: constants_1.RAIL_PART_WIDTH, height: length / 2, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[0], data: {
                        type: 'Part'
                    } }),
                React.createElement(RectPart_1.default, { position: { x: length / 2, y: 0 }, width: constants_1.RAIL_PART_WIDTH, height: length / 2, pivot: PartBase_1.Pivot.LEFT, fillColor: fillColor, flowDirection: flowDirections[1], data: {
                        type: 'Part'
                    } }),
                React.createElement(Gap_1.default, { position: { x: length / 2, y: 0 }, visible: showGap, data: {
                        type: 'Gap',
                    }, ref: this.getGapRef })));
        };
        this.getGapRef = (ref) => {
            if (ref)
                this._gap = ref;
        };
    }
    // Pivotにするジョイントの位置を指定するための情報
    get joints() {
        return [
            { pivotPartIndex: 0, pivot: PartBase_1.Pivot.LEFT },
            { pivotPartIndex: 1, pivot: PartBase_1.Pivot.RIGHT }
        ];
    }
    get feederSockets() {
        return [];
    }
    get conductiveParts() {
        return [0, 1];
    }
    componentDidUpdate() {
        this._gap.path.bringToFront();
        super.componentDidUpdate();
    }
    componentDidMount() {
        this._gap.path.bringToFront();
        super.componentDidMount();
    }
}
exports.default = GappedStraightRailPart;
GappedStraightRailPart.defaultProps = RailPartBase_1.default.defaultProps;
