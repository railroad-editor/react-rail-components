/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface WyeTurnoutProps extends RailBaseProps {
    length: number;
    radius: number;
    centerAngle: number;
}
export default class WyeTurnout extends RailBase<WyeTurnoutProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: WyeTurnoutProps);
    renderRailPart: () => JSX.Element;
}
