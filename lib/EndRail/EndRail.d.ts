/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface EndRailProps extends RailBaseProps {
    length: number;
}
export default class EndRail extends RailBase<EndRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: EndRailProps);
    renderRailPart: () => JSX.Element;
}
