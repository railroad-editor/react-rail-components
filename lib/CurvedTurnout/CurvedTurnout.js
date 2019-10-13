"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const CurvedTurnoutRailPart_1 = require("../parts/CurvedTurnoutRailPart");
class CurvedTurnout extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, innerRadius, outerRadius, innerCenterAngle, outerCenterAngle, branchDirection, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(CurvedTurnoutRailPart_1.default, { innerRadius: innerRadius, outerRadius: outerRadius, innerCenterAngle: innerCenterAngle, outerCenterAngle: outerCenterAngle, direction: branchDirection, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0
                }, onLeftClick: this.props.onRailPartLeftClick, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = CurvedTurnout;
CurvedTurnout.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'CurvedTurnout', numJoints: 3, pivotJointChangingStride: 1, numConductionStates: 2 });
