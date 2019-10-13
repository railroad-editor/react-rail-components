/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface ThreeWayTurnoutProps extends RailBaseProps {
    length: number;
    rightStart: number;
    rightRadius: number;
    rightCenterAngle: number;
    leftStart: number;
    leftRadius: number;
    leftCenterAngle: number;
}
export default class ThreeWayTurnout extends RailBase<ThreeWayTurnoutProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: ThreeWayTurnoutProps);
    renderRailPart: () => JSX.Element;
}
