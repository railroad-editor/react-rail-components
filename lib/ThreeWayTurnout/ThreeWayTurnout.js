"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const ThreeWayTurnoutRailPart_1 = require("../parts/ThreeWayTurnoutRailPart");
class ThreeWayTurnout extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, length, rightStart, rightRadius, rightCenterAngle, leftStart, leftRadius, leftCenterAngle, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(ThreeWayTurnoutRailPart_1.default, { length: length, rightStart: rightStart, rightRadius: rightRadius, rightCenterAngle: rightCenterAngle, leftStart: leftStart, leftRadius: leftRadius, leftCenterAngle: leftCenterAngle, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0
                }, onLeftClick: this.props.onRailPartLeftClick, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = ThreeWayTurnout;
ThreeWayTurnout.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'ThreeWayTurnout', numJoints: 4, pivotJointChangingStride: 1, numConductionStates: 3 });
