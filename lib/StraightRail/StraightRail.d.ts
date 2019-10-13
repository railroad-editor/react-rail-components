/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface StraightRailProps extends RailBaseProps {
    length: number;
}
export default class StraightRail extends RailBase<StraightRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: StraightRailProps);
    renderRailPart: () => JSX.Element;
}
