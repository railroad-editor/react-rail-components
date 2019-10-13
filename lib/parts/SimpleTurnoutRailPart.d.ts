/// <reference types="react" />
import { ArcDirection } from "./primitives/ArcPart";
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface SimpleTurnoutRailPartProps extends RailPartBaseProps {
    length: number;
    radius: number;
    centerAngle: number;
    direction: ArcDirection;
}
export default class SimpleTurnoutRailPart extends RailPartBase<SimpleTurnoutRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: SimpleTurnoutRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
