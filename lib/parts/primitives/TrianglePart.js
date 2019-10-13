"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paper_1 = require("paper");
const PartBase_1 = require("./PartBase");
class TrianglePart extends PartBase_1.default {
    constructor(props) {
        super(props);
        this.createPathData = (props) => {
            const { width, height } = props;
            return createTrianglePath(width, height);
        };
    }
    getInternalPivotPosition(pivot) {
        const { width, height } = this.props;
        switch (pivot) {
            case PartBase_1.Pivot.TOP:
                return new paper_1.Point(0, 0);
            case PartBase_1.Pivot.BOTTOM:
                return new paper_1.Point(0, height);
            case PartBase_1.Pivot.CENTER:
            default:
                return new paper_1.Point(0, height / 3 * 2);
        }
    }
}
exports.default = TrianglePart;
function createTrianglePath(width, height) {
    let pathData = `M 0 0 L ${width / 2} ${height} L ${-width / 2} ${height} Z`;
    return pathData;
}
exports.createTrianglePath = createTrianglePath;
