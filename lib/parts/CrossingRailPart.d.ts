/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface CrossingRailPartProps extends RailPartBaseProps {
    length: number;
    crossAngle: number;
}
export default class CrossingRailPart extends RailPartBase<CrossingRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: CrossingRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
