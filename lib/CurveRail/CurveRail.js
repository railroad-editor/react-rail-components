"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const CurveRailPart_1 = require("../parts/CurveRailPart");
const ArcPart_1 = require("../parts/primitives/ArcPart");
const RailBase_1 = require("../RailBase");
class CurveRail extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, radius, centerAngle, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(CurveRailPart_1.default, { radius: radius, centerAngle: centerAngle, direction: ArcPart_1.ArcDirection.RIGHT, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, fillColor: fillColor, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = CurveRail;
CurveRail.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'CurveRail', numJoints: 2, pivotJointChangingStride: 1, numFeederSockets: 1, numConductionStates: 1 });
