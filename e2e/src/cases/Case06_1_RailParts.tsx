import * as React from "react";
import {Point} from "paper";
import {View} from "react-paper-bindings";
import {createGridLines} from "common";
import StraightRailPart from "react-rail-components/lib/parts/StraightRailPart";
import CurveRailPart from "react-rail-components/lib/parts/CurveRailPart";
import {ArcDirection} from "react-rail-components/lib/parts/primitives//ArcPart";
import SimpleTurnoutRailPart from "react-rail-components/lib/parts/SimpleTurnoutRailPart";
import CurvedTurnoutRailPart from "react-rail-components/lib/parts/CurvedTurnoutRailPart";
import ThreeWayTurnoutRailPart from "react-rail-components/lib/parts/ThreeWayTurnoutRailPart";
import Feeder from "react-rail-components/lib/parts/Feeder";

export default class Case05 extends React.Component<any, any> {

  render() {



    // PivotPartIndexを指定した場合、BoundingBoxではなくそのパーツに対してPivotを指定できる

    return (
      <View width={800}
            height={600}
                        settings={{
              applyMatrix: false
            }}
      >
        {createGridLines(800, 600, 100)}

        <Feeder
          id={0}
          position={{x: 100, y:100}}
          // pivot={Pivot.TOP}
        />
        <StraightRailPart
          pivotJointIndex={0}
          angle={30}
          position={new Point(200, 200)}
          length={200}
        />
        <StraightRailPart
          pivotJointIndex={1}
          angle={-30}
          position={new Point(200, 200)}
          length={200}
        />

        <CurveRailPart
          pivotJointIndex={0}
          position={new Point(400, 200)}
          direction={ArcDirection.LEFT}
          angle={30}
          radius={100}
          centerAngle={45}
        />
        <CurveRailPart
          pivotJointIndex={1}
          position={new Point(400, 200)}
          direction={ArcDirection.LEFT}
          angle={30}
          radius={100}
          centerAngle={45}
        />
        <CurveRailPart
          pivotJointIndex={0}
          position={new Point(600, 200)}
          direction={ArcDirection.RIGHT}
          angle={30}
          radius={100}
          centerAngle={45}
        />
        <CurveRailPart
          pivotJointIndex={1}
          position={new Point(600, 200)}
          direction={ArcDirection.RIGHT}
          angle={30}
          radius={100}
          centerAngle={45}
        />

        <SimpleTurnoutRailPart
          pivotJointIndex={0}
          position={new Point(200, 400)}
          direction={ArcDirection.RIGHT}
          angle={30}
          length={140}
          radius={280}
          centerAngle={30}
          fillColor={'blue'}
        />
        <SimpleTurnoutRailPart
          pivotJointIndex={1}
          position={new Point(200, 400)}
          direction={ArcDirection.RIGHT}
          angle={120}
          length={140}
          radius={280}
          centerAngle={30}
        />
        <SimpleTurnoutRailPart
          pivotJointIndex={2}
          position={new Point(200, 400)}
          direction={ArcDirection.RIGHT}
          angle={210}
          length={140}
          radius={280}
          centerAngle={30}
        />

        <CurvedTurnoutRailPart
          pivotJointIndex={0}
          position={new Point(400, 400)}
          direction={ArcDirection.RIGHT}
          angle={30}
          innerRadius={200}
          outerRadius={300}
          innerCenterAngle={45}
          outerCenterAngle={30}
        />
        <CurvedTurnoutRailPart
          pivotJointIndex={1}
          position={new Point(400, 400)}
          direction={ArcDirection.RIGHT}
          angle={120}
          innerRadius={200}
          outerRadius={300}
          innerCenterAngle={45}
          outerCenterAngle={30}
        />
        <CurvedTurnoutRailPart
          pivotJointIndex={2}
          position={new Point(400, 400)}
          direction={ArcDirection.RIGHT}
          angle={210}
          innerRadius={200}
          outerRadius={300}
          innerCenterAngle={45}
          outerCenterAngle={30}
        />

        <ThreeWayTurnoutRailPart
          pivotJointIndex={1}
          position={new Point(200, 400)}
          angle={120}
          length={140}
          leftStart={0}
          leftRadius={514}
          leftCenterAngle={15}
          rightStart={0}
          rightRadius={514}
          rightCenterAngle={15}
        />

      </View>
    )
  }
}
