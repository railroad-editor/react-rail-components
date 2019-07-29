import * as React from "react";
import DetectablePart from "./primitives/DetectablePart";
import CirclePart from "./primitives/CirclePart";
import {JointMeta} from "./types";
import {Pivot} from "./primitives/PartBase";
import {
  JOINT_DETECTION_OPACITY_RATE,
  JOINT_FILL_COLORS,
  JOINT_HEIGHT,
  JOINT_HIT_RADIUS,
  JOINT_WIDTH
} from "../constants";
import RectPart from "./primitives/RectPart";




interface JointProps extends Partial<DefaultProps> {
  name?: string
  data?: JointMeta
  onMouseMove?: (e: MouseEvent) => void
  onLeftClick?: (e: MouseEvent) => boolean
  onRightClick?: (e: MouseEvent) => boolean
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
}

interface DefaultProps {
  position?: Point2D
  angle?: number
  pivot?: Pivot
  selected?: boolean
  opacity?: number
  visible?: boolean
  fillColors?: string[]
  hasOpposingJoint?: boolean
  detectionEnabled?: boolean
}


export default class Joint extends React.Component<JointProps, {}> {
  public static defaultProps: DefaultProps = {
    position: {x: 0, y: 0},
    angle: 0,
    pivot: Pivot.CENTER,
    selected: false,
    opacity: 1,
    visible: true,
    fillColors: JOINT_FILL_COLORS,
    hasOpposingJoint: false,
    detectionEnabled: true
  }

  part: DetectablePart

  constructor(props: JointProps) {
    super(props)
  }

  // ========== Public APIs ==========

  get position() {
    return this.part.position
  }

  get globalPosition() {
    return this.part.globalPosition
  }

  get angle() {
    return this.part.angle
  }

  get globalAngle() {
    return this.part.globalAngle
  }


  // ========== Private methods ==========

  render() {
    const {
      position, angle, detectionEnabled, hasOpposingJoint, pivot, selected, fillColors, opacity, visible,
      name, data, onLeftClick, onRightClick, onMouseMove, onMouseEnter, onMouseLeave
    } = this.props

    return (
      <DetectablePart
        mainPart={
          <RectPart
            width={JOINT_WIDTH}
            height={JOINT_HEIGHT}
            opacity={opacity}
          />
        }
        detectionPart={
          <CirclePart
            radius={JOINT_HIT_RADIUS}
            opacity={opacity * JOINT_DETECTION_OPACITY_RATE}
          />
        }
        position={{x: position.x, y: position.y}}
        angle={angle}
        pivot={pivot}
        fillColors={fillColors}
        visible={visible}
        detectionEnabled={detectionEnabled && ! hasOpposingJoint}
        name={name}
        data={data}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={(part) => {
          if (part) this.part = part
        }}
      />
    )
  }
}
