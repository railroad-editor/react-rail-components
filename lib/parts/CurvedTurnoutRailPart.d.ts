/// <reference types="react" />
import { ArcDirection } from "./primitives/ArcPart";
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface CurvedTurnoutRailPartProps extends RailPartBaseProps {
    innerRadius: number;
    outerRadius: number;
    innerCenterAngle: number;
    outerCenterAngle: number;
    direction: ArcDirection;
}
export default class CurvedTurnoutRailPart extends RailPartBase<CurvedTurnoutRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: CurvedTurnoutRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
