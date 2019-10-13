import PartBase, { PartBaseProps, Pivot } from "./PartBase";
interface CirclePartProps extends PartBaseProps {
    radius: number;
}
export default class CirclePart extends PartBase<CirclePartProps, {}> {
    constructor(props: CirclePartProps);
    createPathData: (props: CirclePartProps) => string;
    protected getInternalPivotPosition(pivot: Pivot): any;
}
export {};
