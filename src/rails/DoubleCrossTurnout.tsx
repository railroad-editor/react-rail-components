import * as React from "react";
import {RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState} from "./RailBase";
import DoubleCrossTurnoutPart from "./parts/DoubleCrossTurnoutRailPart";


export interface DoubleCrossTurnoutProps extends RailBaseProps {
  length: number
  centerAngle: number
}


export default class DoubleCrossTurnout extends RailBase<DoubleCrossTurnoutProps, RailBaseState> {

  public static defaultProps: RailBaseDefaultProps = {
    ...RailBase.defaultProps,
    type: 'DoubleCrossTurnout',
    numJoints: 4,
    pivotJointChangingStride: 2,
    numConductionStates: 2,
  }

  constructor(props: DoubleCrossTurnoutProps) {
    super(props)
    this.state = this.getInitialState(props)
  }


  renderRailPart = () => {
    const {
      position, centerAngle, angle, length, id, selected, pivotJointIndex, opacity, visible, fillColor
    } = this.props

    return (
      <DoubleCrossTurnoutPart
        length={length}
        centerAngle={centerAngle}
        position={position}
        angle={angle}
        pivotJointIndex={pivotJointIndex}
        selected={selected}
        opacity={opacity}
        visible={visible}
        fillColor={fillColor}
        data={{
          type: 'RailPart',
          railId: id,
          partId: 0,
        }}
        ref={this.getInstance}
      />
    )
  }
}
