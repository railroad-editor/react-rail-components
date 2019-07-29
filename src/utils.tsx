import * as React from "react";
import {Point} from "paper";





/**
 * Point同士を比較し、一致したらtrueを返す
 * @param p1 {Point}
 * @param p2 {Point}
 * @param {number} tolerance 許容誤差
 * @returns {boolean}
 */
export const pointsEqual = (p1, p2, tolerance = 0.0000001) => {
  if (p1 && p2) {
    return (Math.abs(p1.x - p2.x) < tolerance && Math.abs(p1.y - p2.y) < tolerance)
  } else if (! p1 && ! p2) {
    return true
  } else {
    return false
  }
}

/**
 * Angle同士を比較し、一致したらtrueを返す
 * @param a1 {number}
 * @param a2 {number}
 * @param {number} tolerance 許容誤差
 * @returns {boolean}
 */
export const anglesEqual = (a1, a2, tolerance = 0.0000001) => {
  return Math.abs((a1 + 360) % 360 - (a2 + 360) % 360) < tolerance
}

// 上記メソッド、これで良かった説
// export const pointsReasonablyClose = (p1, p2, tolerance) => {
//   return p1.isClose(p2, 0.001)
// }

export const normAngle = (angle: number) => {
  return (angle + 360) % 360
}
