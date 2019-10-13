/// <reference types="react" />
import { ArcDirection } from "./primitives/ArcPart";
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface CurveRailPartProps extends RailPartBaseProps {
    radius: number;
    centerAngle: number;
    direction: ArcDirection;
}
export default class CurveRailPart extends RailPartBase<CurveRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: CurveRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
