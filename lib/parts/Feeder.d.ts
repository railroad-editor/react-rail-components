import * as React from "react";
import { FlowDirection, Pivot } from "./primitives/PartBase";
import PartGroup from "./primitives/PartGroup";
interface FeederProps extends Partial<DefaultProps> {
    id: number;
    pivot?: Pivot;
}
interface DefaultProps {
    position?: Point2D;
    angle?: number;
    data?: any;
    selected?: boolean;
    opacity?: number;
    visible?: boolean;
    fillColor?: string;
    direction?: FlowDirection;
    onLeftClick?: (e: MouseEvent) => boolean;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}
export default class Feeder extends React.Component<FeederProps, {}> {
    static defaultProps: DefaultProps;
    part: PartGroup;
    constructor(props: FeederProps);
    readonly path: any;
    getAngle: () => number;
    render(): JSX.Element;
}
export {};
