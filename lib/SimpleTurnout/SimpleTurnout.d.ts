/// <reference types="react" />
import { ArcDirection } from "../parts/primitives/ArcPart";
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface SimpleTurnoutProps extends RailBaseProps {
    length: number;
    radius: number;
    centerAngle: number;
    branchDirection: ArcDirection;
}
export default class SimpleTurnout extends RailBase<SimpleTurnoutProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: SimpleTurnoutProps);
    renderRailPart: () => JSX.Element;
}
