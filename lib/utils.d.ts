/**
 * Point同士を比較し、一致したらtrueを返す
 * @param p1 {Point}
 * @param p2 {Point}
 * @param {number} tolerance 許容誤差
 * @returns {boolean}
 */
export declare const pointsEqual: (p1: any, p2: any, tolerance?: number) => boolean;
/**
 * Angle同士を比較し、一致したらtrueを返す
 * @param a1 {number}
 * @param a2 {number}
 * @param {number} tolerance 許容誤差
 * @returns {boolean}
 */
export declare const anglesEqual: (a1: any, a2: any, tolerance?: number) => boolean;
export declare const normAngle: (angle: number) => number;
