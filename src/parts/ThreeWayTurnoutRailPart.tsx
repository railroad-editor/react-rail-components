import * as React from "react";
import RectPart from "./primitives/RectPart";
import ArcPart, {ArcDirection} from "./primitives/ArcPart";
import {RAIL_PART_WIDTH} from "../constants";
import {Pivot} from "./primitives/PartBase";
import RailPartBase, {RailPartBaseDefaultProps, RailPartBaseProps} from "./RailPartBase";





interface ThreeWayTurnoutRailPartProps extends RailPartBaseProps {
  length: number
  rightStart: number
  rightRadius: number
  rightCenterAngle: number
  leftStart: number
  leftRadius: number
  leftCenterAngle: number
}


export default class ThreeWayTurnoutRailPart extends RailPartBase<ThreeWayTurnoutRailPartProps, {}> {
  public static defaultProps: RailPartBaseDefaultProps = RailPartBase.defaultProps

  constructor(props: ThreeWayTurnoutRailPartProps) {
    super(props)
  }

  get joints() {
    return [
      [
        {pivotPartIndex: 0, pivot: Pivot.LEFT},
        {pivotPartIndex: 0, pivot: Pivot.RIGHT},
        {pivotPartIndex: 1, pivot: Pivot.RIGHT},
        {pivotPartIndex: 2, pivot: Pivot.RIGHT}
      ],
      [
        {pivotPartIndex: 1, pivot: Pivot.LEFT},
        {pivotPartIndex: 0, pivot: Pivot.RIGHT},
        {pivotPartIndex: 1, pivot: Pivot.RIGHT},
        {pivotPartIndex: 2, pivot: Pivot.RIGHT}
      ],
      [
        {pivotPartIndex: 2, pivot: Pivot.LEFT},
        {pivotPartIndex: 0, pivot: Pivot.RIGHT},
        {pivotPartIndex: 1, pivot: Pivot.RIGHT},
        {pivotPartIndex: 2, pivot: Pivot.RIGHT}
      ]
    ][this.props.conductionState]
  }

  get feederSockets() {
    return []
  }

  get conductiveParts() {
    return [[0], [1], [2]][this.props.conductionState]
  }


  renderParts = () => {
    const {length, rightStart, rightRadius, rightCenterAngle, leftStart, leftRadius, leftCenterAngle, fillColor, flowDirections} = this.props

    return (
      <>
        <RectPart
          width={RAIL_PART_WIDTH}
          height={length}
          pivot={Pivot.LEFT}
          fillColor={fillColor}
          flowDirection={flowDirections[0]}
          data={{
            type: 'Part'
          }}
        />
        <ArcPart
          position={{x: rightStart, y: 0}}
          direction={ArcDirection.RIGHT}
          radius={rightRadius}
          centerAngle={rightCenterAngle}
          width={RAIL_PART_WIDTH}
          pivot={Pivot.LEFT}
          fillColor={fillColor}
          flowDirection={flowDirections[1]}
          data={{
            type: 'Part'
          }}
        />
        <ArcPart
          position={{x: leftStart, y: 0}}
          direction={ArcDirection.LEFT}
          radius={leftRadius}
          centerAngle={leftCenterAngle}
          width={RAIL_PART_WIDTH}
          pivot={Pivot.LEFT}
          fillColor={fillColor}
          flowDirection={flowDirections[2]}
          data={{
            type: 'Part'
          }}
        />
      </>
    )
  }
}
