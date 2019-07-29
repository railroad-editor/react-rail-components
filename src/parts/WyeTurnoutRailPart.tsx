import * as React from "react";
import ArcPart, {ArcDirection} from "./primitives/ArcPart";
import {RAIL_PART_WIDTH} from "../constants";
import {Pivot} from "./primitives/PartBase";
import RailPartBase, {RailPartBaseDefaultProps, RailPartBaseProps} from "./RailPartBase";





interface WyeTurnoutRailPartProps extends RailPartBaseProps {
  radius: number
  centerAngle: number
}


export default class WyeTurnoutRailPart extends RailPartBase<WyeTurnoutRailPartProps, {}> {
  public static defaultProps: RailPartBaseDefaultProps = RailPartBase.defaultProps

  constructor(props: WyeTurnoutRailPartProps) {
    super(props)
  }

  get joints() {
    return [
      [
        {pivotPartIndex: 0, pivot: Pivot.LEFT},
        {pivotPartIndex: 0, pivot: Pivot.RIGHT},
        {pivotPartIndex: 1, pivot: Pivot.RIGHT}
      ],
      [
        {pivotPartIndex: 1, pivot: Pivot.LEFT},
        {pivotPartIndex: 0, pivot: Pivot.RIGHT},
        {pivotPartIndex: 1, pivot: Pivot.RIGHT}
      ]
    ][this.props.conductionState]
  }

  get feederSockets() {
    return []
  }

  get conductiveParts() {
    return [[0], [1]][this.props.conductionState]
  }


  renderParts = () => {
    const {radius, centerAngle, flowDirections} = this.props

    return (
      <>
        <ArcPart
          direction={ArcDirection.LEFT}
          radius={radius}
          centerAngle={centerAngle}
          width={RAIL_PART_WIDTH}
          pivot={Pivot.LEFT}
          flowDirection={flowDirections[0]}
          data={{
            type: 'Part'
          }}
        />
        <ArcPart
          direction={ArcDirection.RIGHT}
          radius={radius}
          centerAngle={centerAngle}
          width={RAIL_PART_WIDTH}
          flowDirection={flowDirections[1]}
          pivot={Pivot.LEFT}
          data={{
            type: 'Part'
          }}
        />
      </>
    )
  }
}
