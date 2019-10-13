import * as React from "react";
import { Group, Item, Path } from "paper";
export declare enum Pivot {
    CENTER = "Center",
    LEFT = "Left",
    TOP = "Top",
    RIGHT = "Right",
    BOTTOM = "Bottom"
}
export declare enum FlowDirection {
    NONE = 0,
    LEFT_TO_RIGHT = 1,
    RIGHT_TO_LEFT = 2,
    ILLEGAL = 3
}
export interface PartBaseProps extends Partial<PartBaseDefaultProps> {
    position?: Point2D;
    angle?: number;
    pivot?: Pivot;
    fillColor?: string;
    visible?: boolean;
    opacity?: number;
    selected?: boolean;
    name?: string;
    data?: any;
    onMouseDown?: (e: MouseEvent) => void;
    onMouseDrag?: (e: MouseEvent) => void;
    onMouseUp?: (e: MouseEvent) => void;
    onLeftClick?: (e: MouseEvent) => void;
    onRightClick?: (e: MouseEvent) => void;
    onDoubleClick?: (e: MouseEvent) => void;
    onMouseMove?: (e: MouseEvent) => void;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}
export interface PartBaseDefaultProps {
    position?: Point2D;
    angle?: number;
    pivot?: Pivot;
    fillColor?: string;
    visible?: boolean;
    opacity?: number;
    selected?: boolean;
    flowDirection?: FlowDirection;
}
export default abstract class PartBase<P extends PartBaseProps, S> extends React.Component<P, S> {
    static defaultProps: PartBaseDefaultProps;
    protected constructor(props: P);
    protected _ref: Path | Group;
    readonly path: any;
    readonly position: any;
    readonly globalPosition: any;
    readonly angle: any;
    readonly globalAngle: any;
    /**
     * ローカル座標系における指定のPivotの角度を返す。
     * @param {Pivot} pivot
     */
    getAngle(pivot: Pivot): any;
    /**
     * 指定のアイテムの座標系における指定のPivotの角度を返す。
     * @param {Item} item
     * @param {Pivot} pivot
     * @returns {number}
     */
    getAngleTo(item: Item, pivot: Pivot): any;
    /**
     * グローバル座標系における指定のPivotの角度を返す。
     * @param {Pivot} pivot
     */
    getGlobalAngle(pivot: Pivot): any;
    /**
     * ローカル座標系における指定のPivotの位置を返す。
     * @param {Pivot} pivot
     */
    getPosition(pivot: Pivot): any;
    /**
     * 指定のアイテムの座標系における指定のPivotの位置を返す。
     * @param {Item} item
     * @param {Pivot} pivot
     */
    getPositionTo(item: Item, pivot: Pivot): any;
    /**
     * グローバル座標系における指定のPivotの位置を返す。
     * @param {Pivot} pivot
     */
    getGlobalPosition(pivot: Pivot): any;
    /**
     * Path内部における指定のPivotの位置を返す。
     * 派生クラスで要実装。
     * @param {Pivot} pivot
     */
    protected abstract getInternalPivotPosition(pivot: Pivot): any;
    /**
     * PathDataを返す。
     * 派生クラスで要実装。
     */
    protected abstract createPathData: (props: P) => string;
    /**
     * 電流アニメーションをする
     * @param event
     */
    onFrame: (event: any) => void;
    onClick: (e: any) => void;
    render(): JSX.Element;
    protected getRef: (ref: any) => void;
}
