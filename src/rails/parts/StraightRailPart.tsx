import * as React from "react";
import RectPart from "./primitives/RectPart";
import {RAIL_PART_WIDTH} from "constants";
import {Pivot} from "./primitives/PartBase";
import RailPartBase, {RailPartBaseDefaultProps, RailPartBaseProps} from "./RailPartBase";



interface StraightRailPartProps extends RailPartBaseProps {
  length: number
}


export default class StraightRailPart extends RailPartBase<StraightRailPartProps, {}> {
  public static defaultProps: RailPartBaseDefaultProps = RailPartBase.defaultProps

  constructor(props: StraightRailPartProps) {
    super(props)
  }

  // Pivotにするジョイントの位置を指定するための情報
  get joints() {
    return [
      {pivotPartIndex: 0, pivot: Pivot.LEFT},
      {pivotPartIndex: 0, pivot: Pivot.RIGHT}
    ]
  }

  get feederSockets() {
    return [{pivotPartIndex: 0, pivot: Pivot.CENTER}]
  }

  get conductiveParts() {
    return [0]
  }

  get tip() {
    return {pivotPartIndex: 0, pivot: Pivot.CENTER}
  }


  renderParts = () => {
    const {length, fillColor, flowDirections} = this.props

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
      </>
    )
  }
}
