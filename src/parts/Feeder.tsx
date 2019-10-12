import * as React from "react";

import TrianglePart from "./primitives/TrianglePart";
import {
  FEEDER_HEIGHT,
  FEEDER_SOCKET_FILL_COLORS,
  FEEDER_SOCKET_HEIGHT,
  FEEDER_SOCKET_WIDTH,
  FEEDER_WIDTH,
} from "../constants";
import {FlowDirection, Pivot} from "./primitives/PartBase";
import RectPart from "./primitives/RectPart";
import PartGroup from "./primitives/PartGroup";


interface FeederProps extends Partial<DefaultProps> {
  id: number
  pivot?: Pivot
}

interface DefaultProps {
  position?: Point2D
  angle?: number
  data?: any
  selected?: boolean
  opacity?: number
  visible?: boolean
  fillColor?: string
  direction?: FlowDirection
  onLeftClick?: (e: MouseEvent) => boolean
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
}


export default class Feeder extends React.Component<FeederProps, {}> {
  public static defaultProps: DefaultProps = {
    position: {x: 0, y: 0},
    angle: 0,
    selected: false,
    opacity: 1,
    visible: true,
    fillColor: FEEDER_SOCKET_FILL_COLORS[0]
  }

  part: PartGroup

  constructor(props: FeederProps) {
    super(props)
  }

  get path() {
    return this.part.path
  }

  getAngle = () => {
    const {angle, direction} = this.props
    switch (direction) {
      case FlowDirection.LEFT_TO_RIGHT:
        return angle
      case FlowDirection.RIGHT_TO_LEFT:
        return angle + 180
      default:
        return angle
    }
  }

  render() {
    const {position, pivot, opacity, fillColor, visible, selected, data, onLeftClick, onMouseEnter, onMouseLeave} = this.props
    const angle = this.getAngle()

    return (
      <PartGroup
        position={{x: position.x, y: position.y}}
        pivotPartIndex={0}
        angle={angle}
        opacity={opacity}
        pivot={pivot ? pivot : Pivot.CENTER}
        fillColor={fillColor}
        visible={visible}
        selected={selected}
        data={data}
        onLeftClick={onLeftClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={(r) => {
          if (r) this.part = r
        }}
      >
        <RectPart
          width={FEEDER_SOCKET_WIDTH}
          height={FEEDER_SOCKET_HEIGHT}
        />
        <TrianglePart
          width={FEEDER_WIDTH}
          height={FEEDER_HEIGHT}
          pivot={Pivot.TOP}
        />
      </PartGroup>
    )
  }
}
