"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const DoubleCrossTurnoutRailPart_1 = require("../parts/DoubleCrossTurnoutRailPart");
class DoubleCrossTurnout extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, centerAngle, angle, length, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(DoubleCrossTurnoutRailPart_1.default, { length: length, centerAngle: centerAngle, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, fillColor: fillColor, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = DoubleCrossTurnout;
DoubleCrossTurnout.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'DoubleCrossTurnout', numJoints: 4, pivotJointChangingStride: 2, numConductionStates: 2 });
