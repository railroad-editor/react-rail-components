/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface DoubleCrossTurnoutRailPartProps extends RailPartBaseProps {
    length: number;
    centerAngle: number;
}
export default class DoubleCrossTurnoutRailPart extends RailPartBase<DoubleCrossTurnoutRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: DoubleCrossTurnoutRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
