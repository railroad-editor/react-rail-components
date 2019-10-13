"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RailBase_1 = require("../RailBase");
const DoubleStraightRailPart_1 = require("../parts/DoubleStraightRailPart");
class DoubleStraightRail extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, length, id, selected, pivotJointIndex, opacity, visible, fillColor } = this.props;
            return (React.createElement(DoubleStraightRailPart_1.default, { length: length, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, fillColor: fillColor, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = DoubleStraightRail;
DoubleStraightRail.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'DoubleStraightRail', numJoints: 4, pivotJointChangingStride: 2, numFeederSockets: 2, numConductionStates: 1 });
