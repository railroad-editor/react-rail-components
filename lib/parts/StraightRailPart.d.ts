/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface StraightRailPartProps extends RailPartBaseProps {
    length: number;
}
export default class StraightRailPart extends RailPartBase<StraightRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: StraightRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly conductiveParts: number[];
    readonly tip: {
        pivotPartIndex: number;
        pivot: Pivot;
    };
    renderParts: () => JSX.Element;
}
export {};
