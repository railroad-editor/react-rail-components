/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface GappedStraightRailPartProps extends RailPartBaseProps {
    length: number;
}
export default class GappedStraightRailPart extends RailPartBase<GappedStraightRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    private _gap;
    constructor(props: GappedStraightRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    componentDidUpdate(): void;
    componentDidMount(): void;
    renderParts: () => JSX.Element;
    getGapRef: (ref: any) => void;
}
export {};
