"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const CrossingRailPart_1 = require("../parts/CrossingRailPart");
class CrossingRail extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, crossAngle, length, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(CrossingRailPart_1.default, { length: length, position: position, angle: angle, crossAngle: crossAngle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, fillColor: fillColor, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = CrossingRail;
CrossingRail.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'CrossingRail', numJoints: 4, pivotJointChangingStride: 2, numConductionStates: 1 });
