/// <reference types="react" />
import { Pivot } from "./primitives/PartBase";
import RailPartBase, { RailPartBaseDefaultProps, RailPartBaseProps } from "./RailPartBase";
interface ThreeWayTurnoutRailPartProps extends RailPartBaseProps {
    length: number;
    rightStart: number;
    rightRadius: number;
    rightCenterAngle: number;
    leftStart: number;
    leftRadius: number;
    leftCenterAngle: number;
}
export default class ThreeWayTurnoutRailPart extends RailPartBase<ThreeWayTurnoutRailPartProps, {}> {
    static defaultProps: RailPartBaseDefaultProps;
    constructor(props: ThreeWayTurnoutRailPartProps);
    readonly joints: {
        pivotPartIndex: number;
        pivot: Pivot;
    }[];
    readonly feederSockets: any[];
    readonly conductiveParts: number[];
    renderParts: () => JSX.Element;
}
export {};
