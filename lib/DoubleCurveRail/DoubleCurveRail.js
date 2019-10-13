"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const DoubleCurveRailPart_1 = require("../parts/DoubleCurveRailPart");
const ArcPart_1 = require("../parts/primitives/ArcPart");
class DoubleCurveRail extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, innerRadius, outerRadius, centerAngle, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(DoubleCurveRailPart_1.default, { innerRadius: innerRadius, outerRadius: outerRadius, centerAngle: centerAngle, direction: ArcPart_1.ArcDirection.RIGHT, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, fillColor: fillColor, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = DoubleCurveRail;
DoubleCurveRail.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'DoubleCurveRail', numJoints: 4, pivotJointChangingStride: 1, numFeederSockets: 2, numConductionStates: 1 });
