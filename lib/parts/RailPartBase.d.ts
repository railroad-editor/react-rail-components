import * as React from "react";
import { RailPartMeta } from "./types";
import { Pivot } from "./primitives/PartBase";
import { FlowDirections } from "../RailBase";
import PartGroup from "./primitives/PartGroup";
export interface PivotInfo {
    pivot: Pivot;
    pivotPartIndex: number;
}
export interface RailPartBaseProps extends Partial<RailPartBaseDefaultProps> {
    name?: string;
    data?: RailPartMeta;
    onLeftClick?: (e: MouseEvent) => boolean;
    onRightClick?: (e: MouseEvent) => boolean;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
    onMouseMove?: (e: MouseEvent) => void;
    pivotJointIndex?: number;
}
export interface RailPartBaseDefaultProps {
    position?: Point2D;
    angle?: number;
    detectionEnabled?: boolean;
    selected?: boolean;
    opacity?: number;
    visible?: boolean;
    fillColor?: string;
    fillColors?: object;
    flowDirections: FlowDirections;
    conductionState: number;
    showGap?: boolean;
}
export default abstract class RailPartBase<P extends RailPartBaseProps, S> extends React.Component<P, S> {
    static defaultProps: RailPartBaseDefaultProps;
    partGroup: PartGroup;
    protected constructor(props: P);
    readonly path: any;
    componentDidUpdate(): void;
    componentDidMount(): void;
    setGapColor: () => void;
    fixRotationByPivot: () => void;
    getPivotPositionToParent(pivotInfo: PivotInfo): any;
    getPivotAngleToParent(pivotInfo: PivotInfo): any;
    /**
     * このパーツの親の座標系における指定のジョイントの位置を返す。
     * @param {number} jointIndex
     * @returns {paper.Point}
     */
    getJointPositionToParent(jointIndex: number): any;
    /**
     * グローバル座標系における指定のジョイントの位置を返す。
     * @param {number} jointIndex
     * @returns {paper.Point}
     */
    getGlobalJointPosition(jointIndex: number): any;
    /**
     * グローバル座標系における指定のジョイントの角度を返す。
     * @param {number} jointIndex
     * @returns {number}
     */
    getJointAngleToParent(jointIndex: number): any;
    /**
     * グローバル座標系における指定のジョイントの角度を返す。
     * @param {number} jointIndex
     * @returns {number}
     */
    getGlobalJointAngle(jointIndex: number): any;
    /**
     * 各ジョイントのPivot情報を返す。
     * 派生クラスに要実装。
     * @returns {PivotInfo[]}
     */
    abstract readonly joints: PivotInfo[];
    abstract readonly feederSockets: PivotInfo[];
    abstract readonly conductiveParts: number[];
    readonly tip: {
        pivotPartIndex: number;
        pivot: Pivot;
    };
    getPivot(jointIndex: number): PivotInfo;
    /**
     * パーツのJSXElementを返す。
     */
    abstract renderParts: () => React.ReactElement<any>;
    render(): JSX.Element;
    protected getRef: (partGroup: any) => void;
    onFrame: (e: any) => void;
}
