/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface GappedStraightRailProps extends RailBaseProps {
    length: number;
}
export default class GappedStraightRail extends RailBase<GappedStraightRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: GappedStraightRailProps);
    renderRailPart: () => JSX.Element;
}
