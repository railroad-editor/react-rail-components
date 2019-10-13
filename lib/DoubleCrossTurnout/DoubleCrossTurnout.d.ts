/// <reference types="react" />
import { RailBase, RailBaseDefaultProps, RailBaseProps, RailBaseState } from "../RailBase";
export interface DoubleCrossTurnoutProps extends RailBaseProps {
    length: number;
    centerAngle: number;
}
export default class DoubleCrossTurnout extends RailBase<DoubleCrossTurnoutProps, RailBaseState> {
    static defaultProps: RailBaseDefaultProps;
    constructor(props: DoubleCrossTurnoutProps);
    renderRailPart: () => JSX.Element;
}
