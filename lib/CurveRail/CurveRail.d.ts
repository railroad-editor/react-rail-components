/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface CurveRailProps extends RailBaseProps {
    radius: number;
    centerAngle: number;
}
export default class CurveRail extends RailBase<CurveRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: CurveRailProps);
    renderRailPart: () => JSX.Element;
}
