import * as React from "react";
import {RAIL_PART_WIDTH, RAIL_SPACE} from "../../constants";
import {Pivot} from "./primitives/PartBase";
import RailPartBase, {RailPartBaseDefaultProps, RailPartBaseProps} from "./RailPartBase";

import {ArcDirection, default as ArcPart} from "./primitives/ArcPart";



interface DoubleCurveRailPartProps extends RailPartBaseProps {
  innerRadius: number
  outerRadius: number
  centerAngle: number
  direction: ArcDirection
}


export default class DoubleCurveRailPart extends RailPartBase<DoubleCurveRailPartProps, {}> {
  public static defaultProps: RailPartBaseDefaultProps = RailPartBase.defaultProps

  constructor(props: DoubleCurveRailPartProps) {
    super(props)
  }

  get joints() {
    return [
      {pivotPartIndex: 0, pivot: Pivot.LEFT},
      {pivotPartIndex: 0, pivot: Pivot.RIGHT},
      {pivotPartIndex: 1, pivot: Pivot.LEFT},
      {pivotPartIndex: 1, pivot: Pivot.RIGHT}
    ]
  }

  get feederSockets() {
    return [
      {pivotPartIndex: 0, pivot: Pivot.CENTER},
      {pivotPartIndex: 1, pivot: Pivot.CENTER},
    ]
  }

  get conductiveParts() {
    return [0, 1]
  }


  renderParts = () => {
    const {innerRadius, outerRadius, centerAngle, direction, fillColor, flowDirections} = this.props

    let radius1, radius2
    switch (this.props.direction) {
      case ArcDirection.RIGHT:
        radius1 = outerRadius
        radius2 = innerRadius
        break
      case ArcDirection.LEFT:
        radius1 = innerRadius
        radius2 = outerRadius
        break
    }

    return (
      <>
        <ArcPart
          pivot={Pivot.LEFT}
          direction={direction}
          radius={radius1}
          centerAngle={centerAngle}
          width={RAIL_PART_WIDTH}
          fillColor={fillColor}
          flowDirection={flowDirections[0]}
          data={{
            type: 'Part'
          }}
        />
        <ArcPart
          pivot={Pivot.LEFT}
          direction={direction}
          position={{x: 0, y: RAIL_SPACE}}
          radius={radius2}
          centerAngle={centerAngle}
          width={RAIL_PART_WIDTH}
          fillColor={fillColor}
          flowDirection={flowDirections[1]}
          data={{
            type: 'Part'
          }}
        />
      </>
    )
  }
}
