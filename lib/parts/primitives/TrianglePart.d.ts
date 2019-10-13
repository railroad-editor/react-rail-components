import { default as PartBase, PartBaseProps, Pivot } from "./PartBase";
export interface TrianglePartProps extends PartBaseProps {
    width: number;
    height: number;
}
export default class TrianglePart extends PartBase<TrianglePartProps, {}> {
    constructor(props: TrianglePartProps);
    createPathData: (props: TrianglePartProps) => string;
    protected getInternalPivotPosition(pivot: Pivot): any;
}
export declare function createTrianglePath(width: number, height: number): string;
