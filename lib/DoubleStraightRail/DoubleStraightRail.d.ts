/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface DoubleStraightRailProps extends RailBaseProps {
    length: number;
}
export default class DoubleStraightRail extends RailBase<DoubleStraightRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: DoubleStraightRailProps);
    renderRailPart: () => JSX.Element;
}
