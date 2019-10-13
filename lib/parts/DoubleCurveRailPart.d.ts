/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
import { ArcDirection } from "./primitives/ArcPart";
interface DoubleCurveRailPartProps extends RailPartBaseProps {
    innerRadius: number;
    outerRadius: number;
    centerAngle: number;
    direction: ArcDirection;
}
export default class DoubleCurveRailPart extends RailPartBase<DoubleCurveRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: DoubleCurveRailPartProps);
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
