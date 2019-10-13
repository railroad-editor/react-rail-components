import * as React from "react";
import RectPart from "./primitives/RectPart";
interface GapProps extends Partial<DefaultProps> {
}
interface DefaultProps {
    position?: Point2D;
    angle?: number;
    data?: any;
    selected?: boolean;
    opacity?: number;
    visible?: boolean;
    fillColor?: string;
    hasOpposingGap?: boolean;
    detectionEnabled?: boolean;
}
export default class Gap extends React.Component<GapProps, {}> {
    static defaultProps: DefaultProps;
    part: RectPart;
    constructor(props: GapProps);
    readonly path: any;
    render(): JSX.Element;
}
export {};
