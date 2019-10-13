import PartBase, { PartBaseProps, Pivot } from "./PartBase";
export interface RectPartProps extends PartBaseProps {
    width: number;
    height: number;
}
export default class RectPart extends PartBase<RectPartProps, {}> {
    constructor(props: RectPartProps);
    createPathData: (props: any) => string;
    protected getInternalPivotPosition(pivot: Pivot): any;
}
export declare function createRectPath(width: number, height: number): string;
