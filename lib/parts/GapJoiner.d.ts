import * as React from "react";
import { Pivot } from "./primitives/PartBase";
import RectPart from "./primitives/RectPart";
interface GapJoinerProps extends Partial<DefaultProps> {
    id: number;
}
interface DefaultProps {
    position?: Point2D;
    angle?: number;
    data?: any;
    pivot?: Pivot;
    selected?: boolean;
    opacity?: number;
    visible?: boolean;
    fillColor?: string;
    onLeftClick?: (e: MouseEvent) => boolean;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}
export default class GapJoiner extends React.Component<GapJoinerProps, {}> {
    static defaultProps: DefaultProps;
    part: RectPart;
    constructor(props: GapJoinerProps);
    readonly path: any;
    render(): JSX.Element;
}
export {};
