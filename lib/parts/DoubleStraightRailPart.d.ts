/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface DoubleStraightRailPartProps extends RailPartBaseProps {
    length: number;
}
export default class DoubleStraightRailPart extends RailPartBase<DoubleStraightRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: DoubleStraightRailPartProps);
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
