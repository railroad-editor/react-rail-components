/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface CrossingRailProps extends RailBaseProps {
    length: number;
    crossAngle: number;
}
export default class CrossingRail extends RailBase<CrossingRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: CrossingRailProps);
    renderRailPart: () => JSX.Element;
}
