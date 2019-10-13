/// <reference types="react" />
import { ArcDirection } from "../parts/primitives/ArcPart";
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface CurvedTurnoutProps extends RailBaseProps {
    innerRadius: number;
    outerRadius: number;
    innerCenterAngle: number;
    outerCenterAngle: number;
    branchDirection: ArcDirection;
}
export default class CurvedTurnout extends RailBase<CurvedTurnoutProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: CurvedTurnoutProps);
    renderRailPart: () => JSX.Element;
}
