"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartBase_1 = require("./PartBase");
const paper_1 = require("paper");
class CirclePart extends PartBase_1.default {
    constructor(props) {
        super(props);
        this.createPathData = (props) => {
            const { radius } = props;
            return createCirclePath(radius);
        };
    }
    getInternalPivotPosition(pivot) {
        const { radius } = this.props;
        switch (pivot) {
            case PartBase_1.Pivot.LEFT:
                return new paper_1.Point(0, 0);
            case PartBase_1.Pivot.TOP:
                return new paper_1.Point(radius, -radius);
            case PartBase_1.Pivot.RIGHT:
                return new paper_1.Point(radius * 2, 0);
            case PartBase_1.Pivot.BOTTOM:
                return new paper_1.Point(radius, radius);
            case PartBase_1.Pivot.CENTER:
            default:
                return new paper_1.Point(radius, 0);
        }
    }
}
exports.default = CirclePart;
function createCirclePath(radius) {
    const pathData = `M 0 0 A ${radius},${radius} 0 0,1 ${radius * 2} 0 A ${radius} ${radius} 0 0,1 0 0 Z`;
    return pathData;
}
