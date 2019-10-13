"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paper_1 = require("paper");
const PartBase_1 = require("./PartBase");
var ArcDirection;
(function (ArcDirection) {
    ArcDirection["RIGHT"] = "Right";
    ArcDirection["LEFT"] = "Left";
})(ArcDirection = exports.ArcDirection || (exports.ArcDirection = {}));
class ArcPart extends PartBase_1.default {
    constructor(props) {
        super(props);
        this.createPathData = (props) => {
            const { width, radius, centerAngle, direction } = props;
            return createArcPath(width, radius, centerAngle, direction);
        };
    }
    getAngle(pivot) {
        return super.getAngle(pivot) + this.getInternalPivotAngle(pivot);
    }
    getGlobalAngle(pivot) {
        return super.getGlobalAngle(pivot) + this.getInternalPivotAngle(pivot);
    }
    getAngleTo(item, pivot) {
        return super.getAngleTo(item, pivot) + this.getInternalPivotAngle(pivot);
    }
    getInternalPivotPosition(pivot) {
        const { radius, width, centerAngle } = this.props;
        switch (pivot) {
            case PartBase_1.Pivot.LEFT:
                return new paper_1.Point(0, 0);
            case PartBase_1.Pivot.RIGHT:
                return getEndPoint(width, radius, centerAngle, this.props.direction);
            case PartBase_1.Pivot.CENTER:
                return getEndPoint(width, radius, centerAngle / 2, this.props.direction);
            default:
                return new paper_1.Point(0, 0);
        }
    }
    getInternalPivotAngle(pivot) {
        switch (pivot) {
            case PartBase_1.Pivot.LEFT:
                return 0;
            case PartBase_1.Pivot.RIGHT:
                switch (this.props.direction) {
                    case ArcDirection.RIGHT:
                        return this.props.centerAngle;
                    case ArcDirection.LEFT:
                        return -this.props.centerAngle;
                    default:
                        throw Error(`Invalid direction ${this.props.direction} for ${this.constructor.name}`);
                }
            case PartBase_1.Pivot.CENTER:
                switch (this.props.direction) {
                    case ArcDirection.RIGHT:
                        return this.props.centerAngle / 2;
                    case ArcDirection.LEFT:
                        return -this.props.centerAngle / 2;
                    default:
                        throw Error(`Invalid direction ${this.props.direction} for ${this.constructor.name}`);
                }
            default:
                throw Error(`Invalid pivot ${pivot} for ${this.constructor.name}`);
        }
    }
}
exports.default = ArcPart;
const getEndPoint = (width, radius, centerAngle, direction) => {
    switch (direction) {
        case ArcDirection.RIGHT:
            return getEndPointRight(width, radius, centerAngle);
        case ArcDirection.LEFT:
            return getEndPointLeft(width, radius, centerAngle);
    }
};
const getEndPointRight = (width, radius, centerAngle) => {
    const outerEndX = (radius + width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const outerEndY = (radius + width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) - width / 2;
    const innerEndX = (radius - width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const innerEndY = (radius - width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) + width / 2;
    return new paper_1.Point((outerEndX + innerEndX) / 2, (outerEndY + innerEndY) / 2);
};
const getEndPointLeft = (width, radius, centerAngle) => {
    const outerEndX = (radius + width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const outerEndY = -(radius + width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) + width / 2;
    const innerEndX = (radius - width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const innerEndY = -(radius - width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) - width / 2;
    return new paper_1.Point((outerEndX + innerEndX) / 2, (outerEndY + innerEndY) / 2);
};
const createArcPath = (width, radius, centerAngle, direction) => {
    switch (direction) {
        case ArcDirection.RIGHT:
            return createArcPathRight(width, radius, centerAngle);
        case ArcDirection.LEFT:
            return createArcPathLeft(width, radius, centerAngle);
    }
};
// 右方向に曲がる円弧のパスデータを作成する
const createArcPathRight = (width, radius, centerAngle) => {
    // 曲線の始点・終点の座標を計算
    const outerEndX = (radius + width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const outerEndY = (radius + width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) - width / 2;
    const innerEndX = (radius - width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const innerEndY = (radius - width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) + width / 2;
    // パスデータの作成
    const pathData = `M 0 0 L 0 ${-width / 2}
  A ${radius + width / 2} ${radius + width / 2}, 0, 0, 1, ${outerEndX} ${outerEndY}
  L ${(outerEndX + innerEndX) / 2} ${(outerEndY + innerEndY) / 2} 
  L ${innerEndX} ${innerEndY} 
  A ${radius - width / 2} ${radius - width / 2} 0, 0, 0, 0 ${width / 2} Z`;
    return pathData;
};
// 左方向に曲がる円弧のパスデータを作成する
const createArcPathLeft = (width, radius, centerAngle) => {
    // 曲線の始点・終点の座標を計算
    const outerEndX = (radius + width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const outerEndY = -(radius + width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) + width / 2;
    const innerEndX = (radius - width / 2) * Math.sin(centerAngle / 180 * Math.PI);
    const innerEndY = -(radius - width / 2) * (1 - Math.cos(centerAngle / 180 * Math.PI)) - width / 2;
    // パスデータの作成
    const pathData = `M 0 0 L 0 ${width / 2}
  A ${radius + width / 2} ${radius + width / 2}, 0, 0, 0, ${outerEndX} ${outerEndY}
  L ${(outerEndX + innerEndX) / 2} ${(outerEndY + innerEndY) / 2} 
  L ${innerEndX} ${innerEndY} 
  A ${radius - width / 2} ${radius - width / 2} 0, 0, 1, 0 ${-width / 2} Z`;
    return pathData;
};
