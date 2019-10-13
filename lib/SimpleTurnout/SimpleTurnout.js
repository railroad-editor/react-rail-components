"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const SimpleTurnoutRailPart_1 = require("../parts/SimpleTurnoutRailPart");
class SimpleTurnout extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, length, radius, centerAngle, branchDirection, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(SimpleTurnoutRailPart_1.default, { length: length, radius: radius, centerAngle: centerAngle, direction: branchDirection, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0
                }, onLeftClick: this.props.onRailPartLeftClick, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = SimpleTurnout;
SimpleTurnout.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'SimpleTurnout', numJoints: 3, pivotJointChangingStride: 1, numConductionStates: 2 });
