/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface WyeTurnoutRailPartProps extends RailPartBaseProps {
    radius: number;
    centerAngle: number;
}
export default class WyeTurnoutRailPart extends RailPartBase<WyeTurnoutRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: WyeTurnoutRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
