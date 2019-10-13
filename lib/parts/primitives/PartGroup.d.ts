/// <reference types="react" />
import PartBase, { PartBaseDefaultProps, PartBaseProps, Pivot } from "./PartBase";
interface PartGroupProps extends PartBaseProps {
    pivotPartIndex?: number;
}
export default class PartGroup extends PartBase<PartGroupProps, {}> {
    static defaultProps: PartBaseDefaultProps;
    private _children;
    private _isMounted;
    constructor(props: PartGroupProps);
    readonly children: PartBase<any, any>[];
    readonly group: any;
    componentDidUpdate(): void;
    componentDidMount(): void;
    createPathData: (props: any) => any;
    render(): JSX.Element;
    protected getInternalPivotPosition(pivot: Pivot): any;
    protected getPivotPositionFromBounds(pivot: Pivot): any;
    private setPivotAndPosition;
}
export {};
