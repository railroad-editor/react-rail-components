"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const StraightRailPart_1 = require("../parts/StraightRailPart");
const RailBase_1 = require("../RailBase");
class StraightRail extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, length, id, selected, pivotJointIndex, opacity, visible } = this.props;
            return (React.createElement(StraightRailPart_1.default, { length: length, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = StraightRail;
StraightRail.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'StraightRail', numJoints: 2, pivotJointChangingStride: 2, numFeederSockets: 1, numConductionStates: 1 });
