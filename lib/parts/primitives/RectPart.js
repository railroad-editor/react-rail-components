"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paper_1 = require("paper");
const PartBase_1 = require("./PartBase");
class RectPart extends PartBase_1.default {
    constructor(props) {
        super(props);
        this.createPathData = (props) => {
            const { width, height } = props;
            return createRectPath(width, height);
        };
    }
    getInternalPivotPosition(pivot) {
        const { width, height } = this.props;
        switch (pivot) {
            case PartBase_1.Pivot.LEFT:
                return new paper_1.Point(0, 0);
            case PartBase_1.Pivot.TOP:
                return new paper_1.Point(height / 2, -width / 2);
            case PartBase_1.Pivot.RIGHT:
                return new paper_1.Point(height, 0);
            case PartBase_1.Pivot.BOTTOM:
                return new paper_1.Point(height / 2, width / 2);
            case PartBase_1.Pivot.CENTER:
            default:
                return new paper_1.Point(height / 2, 0);
        }
    }
}
exports.default = RectPart;
function createRectPath(width, height) {
    let pathData = `M 0 0 L 0 ${-width / 2} ${height} ${-width / 2} L ${height}} 0 L ${height} ${width / 2} L 0 ${width / 2} Z`;
    return pathData;
}
exports.createRectPath = createRectPath;
