"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const GappedStraightRailPart_1 = require("../parts/GappedStraightRailPart");
const RailBase_1 = require("../RailBase");
class GappedStraightRail extends RailBase_1.RailBase {
    constructor(props) {
        super(props);
        this.renderRailPart = () => {
            const { position, angle, length, id, selected, pivotJointIndex, opacity, visible, onRailPartLeftClick, onRailPartMouseEnter, onRailPartMouseLeave } = this.props;
            return (React.createElement(GappedStraightRailPart_1.default, { length: length, position: position, angle: angle, pivotJointIndex: pivotJointIndex, selected: selected, opacity: opacity, visible: visible, data: {
                    type: 'RailPart',
                    railId: id,
                    partId: 0,
                }, onLeftClick: onRailPartLeftClick, onMouseEnter: onRailPartMouseEnter, onMouseLeave: onRailPartMouseLeave, ref: this.getInstance }));
        };
        this.state = this.getInitialState(props);
    }
}
exports.default = GappedStraightRail;
GappedStraightRail.defaultProps = Object.assign(Object.assign({}, RailBase_1.RailBase.defaultProps), { type: 'StraightRail', numJoints: 2, pivotJointChangingStride: 2, numConductionStates: 1 });
