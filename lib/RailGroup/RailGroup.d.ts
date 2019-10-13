import * as React from "react";
import { JointInfo, RailBase } from "../RailBase";
import { Group, Point } from "paper";
export interface RailGroupProps extends Partial<RailGroupDefaultProps> {
    position: Point2D;
    angle: number;
    id: number;
    pivotJointInfo?: JointInfo;
    onMount?: (instance: RailGroup) => void;
    onUnmount?: (instance: RailGroup) => void;
}
export interface RailGroupDefaultProps {
    type: string;
    visible: boolean;
    enableJoints: boolean;
    name: string;
}
export default class RailGroup extends React.Component<RailGroupProps, {}> {
    static defaultProps: RailGroupDefaultProps;
    _group: Group;
    _children: RailBase<any, any>[];
    pivotPosition: Point;
    pivotAngle: number;
    readonly children: RailBase<any, any>[];
    readonly group: any;
    constructor(props: RailGroupProps);
    private setInternal;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    getAngle(): number;
    private getPivotPosition;
    private getInternalPivotAngle;
    private getChildComponents;
}
