import * as React from "react";
import RectPart from "./primitives/RectPart";

import {GAP_FILL_COLOR, GAP_HEIGHT, GAP_WIDTH} from "../constants";



interface GapProps extends Partial<DefaultProps> {
}

interface DefaultProps {
  position?: Point2D
  angle?: number
  data?: any
  selected?: boolean
  opacity?: number
  visible?: boolean
  fillColor?: string
  hasOpposingGap?: boolean
  detectionEnabled?: boolean
}


export default class Gap extends React.Component<GapProps, {}> {
  public static defaultProps: DefaultProps = {
    position: {x: 0, y: 0},
    angle: 0,
    selected: false,
    opacity: 1,
    visible: true,
    fillColor: GAP_FILL_COLOR,
    hasOpposingGap: false,
    detectionEnabled: true
  }

  part: RectPart

  constructor(props: GapProps) {
    super(props)
  }

  get path() {
    return this.part.path
  }

  render() {
    const {position, angle, opacity, fillColor, visible} = this.props

    return (
      <RectPart
        width={GAP_WIDTH}
        height={GAP_HEIGHT}
        opacity={opacity}
        position={{x: position.x, y: position.y}}
        angle={angle}
        pivot={undefined}
        visible={visible}
        fillColor={fillColor}
        name={name}
        ref={(r) => {
          if (r) this.part = r
        }}
      />
    )
  }
}
