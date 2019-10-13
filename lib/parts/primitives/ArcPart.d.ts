import { Item } from "paper";
import { default as PartBase, PartBaseProps, Pivot } from "./PartBase";
export declare enum ArcDirection {
    RIGHT = "Right",
    LEFT = "Left"
}
export interface ArcPartProps extends PartBaseProps {
    width: number;
    radius: number;
    centerAngle: number;
    direction: ArcDirection;
}
export default class ArcPart extends PartBase<ArcPartProps, {}> {
    constructor(props: ArcPartProps);
    getAngle(pivot: Pivot): any;
    getGlobalAngle(pivot: Pivot): any;
    getAngleTo(item: Item, pivot: Pivot): any;
    createPathData: (props: ArcPartProps) => string;
    protected getInternalPivotPosition(pivot: Pivot): any;
    private getInternalPivotAngle;
}
