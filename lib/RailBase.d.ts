import * as React from "react";
import Joint from "./parts/Joint";
import RailPartBase from "./parts/RailPartBase";
import FeederSocket from "./parts/FeederSocket";
import { FlowDirection, Pivot } from "./parts/primitives/PartBase";
import GapJoiner from "./parts/GapJoiner";
import Feeder from "./parts/Feeder";
import GapJoinerSocket from "./parts/GapJoinerSocket";
export interface JointInfo {
    railId: number;
    jointId: number;
}
export interface FeederInfo {
    id: number;
    railId: number;
    socketId: number;
    pivot: Pivot;
    selected: boolean;
    direction: FlowDirection;
    visible: boolean;
    name: string;
    powerPackId?: number;
    isError: boolean;
}
export interface GapJoinerInfo {
    id: number;
    railId: number;
    jointId: number;
    selected: boolean;
}
export interface OpposingJoints {
    [key: number]: JointInfo;
}
export interface FlowDirections {
    [key: number]: FlowDirection;
}
export interface RailBaseProps extends Partial<RailBaseDefaultProps> {
    position: Point2D;
    angle: number;
    id: number;
    layerId: number;
    name?: string;
    onMount?: (ref: RailBase<RailBaseProps, RailBaseState>) => void;
    onUnmount?: (ref: RailBase<RailBaseProps, RailBaseState>) => void;
    groupId?: number;
    pivotJointIndex?: number;
    turnoutId?: number;
    turnoutName?: string;
}
export interface RailBaseDefaultProps {
    type: string;
    numJoints: number;
    pivotJointChangingStride: number;
    numFeederSockets: number;
    opposingJoints: OpposingJoints;
    feeders: FeederInfo[];
    gapJoiners: GapJoinerInfo[];
    enableJoints: boolean;
    enableFeederSockets: boolean;
    enableGapJoinerSockets: boolean;
    selected: boolean;
    visible: boolean;
    opacity: number;
    fillColor: string;
    fillColors: {};
    flowDirections: FlowDirections;
    numConductionStates: number;
    conductionState: number;
    showGap: boolean;
    showJoints: boolean;
    onRailPartLeftClick: (e: MouseEvent) => boolean;
    onRailPartRightClick: (e: MouseEvent) => boolean;
    onRailPartMouseEnter: (e: MouseEvent) => void;
    onRailPartMouseLeave: (e: MouseEvent) => void;
    onRailPartMouseMove: (e: MouseEvent) => void;
    onJointLeftClick: (jointId: number, e: MouseEvent) => void;
    onJointRightClick: (jointId: number, e: MouseEvent) => void;
    onJointMouseMove: (jointId: number, e: MouseEvent) => void;
    onJointMouseEnter: (jointId: number, e: MouseEvent) => void;
    onJointMouseLeave: (jointId: number, e: MouseEvent) => void;
    onFeederSocketMouseEnter: (socketId: number, e: MouseEvent) => void;
    onFeederSocketMouseLeave: (socketId: number, e: MouseEvent) => void;
    onFeederSocketLeftClick: (socketId: number, e: MouseEvent) => void;
    onFeederSocketRightClick: (socketId: number, e: MouseEvent) => void;
    onFeederLeftClick: (id: number, e: MouseEvent) => void;
    onFeederMouseEnter: (id: number, e: MouseEvent) => void;
    onFeederMouseLeave: (id: number, e: MouseEvent) => void;
    onGapJoinerSocketMouseEnter: (jointId: number, e: MouseEvent) => void;
    onGapJoinerSocketMouseLeave: (jointId: number, e: MouseEvent) => void;
    onGapJoinerSocketLeftClick: (jointId: number, e: MouseEvent) => void;
    onGapJoinerLeftClick: (id: number, e: MouseEvent) => void;
    onGapJoinerMouseEnter: (id: number, e: MouseEvent) => void;
    onGapJoinerMouseLeave: (id: number, e: MouseEvent) => void;
}
export interface RailBaseState {
    jointPositions: Point2D[];
    jointAngles: number[];
    feederSocketPositions: Point2D[];
    feederSocketAngles: number[];
}
export declare abstract class RailBase<P extends RailBaseProps, S extends RailBaseState> extends React.Component<P, S> {
    static defaultProps: RailBaseDefaultProps;
    railPart: RailPartBase<any, any>;
    joints: Joint[];
    feederSockets: FeederSocket[];
    feeders: Feeder[];
    gapJoinerSockets: GapJoinerSocket[];
    gapJoiners: GapJoiner[];
    protected constructor(props: P);
    getInitialState: (props: any) => {
        jointPositions: any[];
        jointAngles: any[];
        feederSocketPositions: any[];
        feederSocketAngles: any[];
    };
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    bringToFrontConductiveParts: () => void;
    /**
     * ジョイントコンポーネントを生成する
     * @returns {any[]}
     */
    protected renderJoints: (props: P) => any;
    /**
     * フィーダーソケット・フィーダーを生成
     */
    protected renderFeederSockets: (props: RailBaseProps) => JSX.Element;
    /**
     * ギャップジョイナーソケット・ギャップジョイナーを生成
     */
    protected renderGapJoiners: (props: P) => JSX.Element;
    /**
     * レールパーツの位置・角度に合わせてジョイントの位置・角度を変更する
     */
    private fixJoints;
    private fixFeederSockets;
    protected getInstance: (railPart: any) => void;
    onFrame: (e: any) => void;
    render(): JSX.Element;
    abstract renderRailPart: (props: any) => React.ReactElement<any>;
}
