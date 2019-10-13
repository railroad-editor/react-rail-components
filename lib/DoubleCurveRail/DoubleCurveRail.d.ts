/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface DoubleCurveRailProps extends RailBaseProps {
    innerRadius: number;
    outerRadius: number;
    centerAngle: number;
}
export default class DoubleCurveRail extends RailBase<DoubleCurveRailProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: DoubleCurveRailProps);
    renderRailPart: () => JSX.Element;
}
