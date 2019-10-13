"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const WyeTurnoutRailPart_1 = require("../parts/WyeTurnoutRailPart");
class WyeTurnout extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, radius, centerAngle, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(WyeTurnoutRailPart_1.default, { radius: radius, centerAngle: centerAngle, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, fillColor: fillColor, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = WyeTurnout;
WyeTurnout.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'WyeTurnout', numJoints: 3, pivotJointChangingStride: 1, numConductionStates: 2 });
