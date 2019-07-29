import * as React from "react";
import StraightRailPart from "../parts/StraightRailPart";
import {RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState} from "../RailBase";


export interface StraightRailProps extends RailBaseProps {
  length: number
}

export default class StraightRail extends RailBase<StraightRailProps, RailBaseState> {
  public static defaultProps: RailBaseDefaultProps = {
    ...RailBase.defaultProps,
    type: 'StraightRail',
    numJoints: 2,
    pivotJointChangingStride: 2,
    numFeederSockets: 1,
    numConductionStates: 1
  }

  constructor(props: StraightRailProps) {
    super(props)
    this.state = this.getInitialState(props)
  }


  renderRailPart = () => {
    const {position, angle, length, id, selected, pivotJointIndex, opacity, visible} = this.props

    return (
      <StraightRailPart
        length={length}
        position={position}
        angle={angle}
        pivotJointIndex={pivotJointIndex}
        selected={selected}
        opacity={opacity}
        visible={visible}
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
