import * as React from "react";
import DetectablePart from "./primitives/DetectablePart";
import { JointMeta } from "./types";
import { Pivot } from "./primitives/PartBase";
interface JointProps extends Partial<DefaultProps> {
    name?: string;
    data?: JointMeta;
    onMouseMove?: (e: MouseEvent) => void;
    onLeftClick?: (e: MouseEvent) => boolean;
    onRightClick?: (e: MouseEvent) => boolean;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}
interface DefaultProps {
    position?: Point2D;
    angle?: number;
    pivot?: Pivot;
    selected?: boolean;
    opacity?: number;
    visible?: boolean;
    fillColors?: string[];
    hasOpposingJoint?: boolean;
    detectionEnabled?: boolean;
}
export default class Joint extends React.Component<JointProps, {}> {
    static defaultProps: DefaultProps;
    part: DetectablePart;
    constructor(props: JointProps);
    readonly position: any;
    readonly globalPosition: any;
    readonly angle: any;
    readonly globalAngle: any;
    render(): JSX.Element;
}
export {};
