import * as React from "react";
import DetectablePart from "./primitives/DetectablePart";
import { Pivot } from "./primitives/PartBase";
interface FeederSocketProps extends Partial<DefaultProps> {
    name?: string;
    data?: any;
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
    hasFeeder?: boolean;
    detectionEnabled?: boolean;
}
export default class FeederSocket extends React.Component<FeederSocketProps, {}> {
    static defaultProps: DefaultProps;
    part: DetectablePart;
    constructor(props: FeederSocketProps);
    readonly position: any;
    readonly globalPosition: any;
    readonly angle: any;
    readonly globalAngle: any;
    render(): JSX.Element;
}
export {};
