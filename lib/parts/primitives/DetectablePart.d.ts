import * as React from "react";
import { ReactElement } from "react";
import PartBase, { PartBaseProps } from "./PartBase";
import PartGroup from "./PartGroup";
export interface DetectablePartProps extends PartBaseProps, DetectablePartDefaultProps {
    mainPart: ReactElement<PartBase<PartBaseProps, {}>>;
    detectionPart: ReactElement<PartBase<PartBaseProps, {}>>;
    onLeftClick?: (e: MouseEvent) => boolean;
    onRightClick?: (e: MouseEvent) => boolean;
    detectionEnabled: boolean;
    pivotPartIndex?: number;
    preventBringToFront?: boolean;
}
export interface DetectablePartDefaultProps {
    fillColors?: string[];
}
export interface DetectablePartState {
    detectionState: DetectionState;
    detectionPartVisible: boolean;
    isError: boolean;
}
/**
 * 当たり判定による検出状態。
 */
export declare enum DetectionState {
    DISABLED = 0,
    BEFORE_DETECT = 1,
    DETECTING = 2,
    AFTER_DETECT = 3
}
export default class DetectablePart extends React.Component<DetectablePartProps, DetectablePartState> {
    static defaultProps: DetectablePartDefaultProps;
    onMouseMove: (e: MouseEvent) => void;
    onMouseEnter: (e: MouseEvent) => void;
    onMouseLeave: (e: MouseEvent) => void;
    onLeftClick: (e: any) => void;
    onRightClick: (e: any) => void;
    constructor(props: DetectablePartProps);
    _partGroup: PartGroup;
    readonly partGroup: PartGroup;
    readonly mainPart: PartBase<any, any>;
    readonly detectionPart: PartBase<any, any>;
    readonly position: any;
    readonly globalPosition: any;
    readonly angle: any;
    readonly globalAngle: any;
    resetDetectionState(): void;
    isDetecting(): boolean;
    isBeforeDetect(): boolean;
    componentWillReceiveProps(nextProps: DetectablePartProps): void;
    render(): JSX.Element;
    protected getInstance(_partGroup: any): void;
}
