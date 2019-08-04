import * as React from "react";
import RectPart from "react-rail-components/lib/parts/primitives//RectPart";
import {Point} from "paper";
import {Tool, View} from "react-paper-bindings";
import {createGridLines} from "common";
import PartGroup from "react-rail-components/lib/parts/primitives//PartGroup";
import {pointsEqual} from "react-rail-components/lib/utils";
import assert from "assert";


export default class Case03 extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      pivotPart: 0,
      position: new Point(200, 200),
      child_position_1: new Point(200, 100),
      child_position_2: new Point(300, 100)
    }
  }

  render() {


    return (
      <View width={800}
            height={600}
                        settings={{
              applyMatrix: false
            }}
      >
        {createGridLines(800, 600, 100)}

        /*
          Pivot指定なし＋PivotPart指定ありのパターン
         */

        <PartGroup
          position={this.state.position}
          pivotPartIndex={this.state.pivotPart}
          ref={(g) => {
            // 位置が確定していることを確認
            if (g) {
              console.log(`${g.getPosition(this.state.pivot)}, ${this.state.position})`);
              assert(pointsEqual(g.getPosition(this.state.pivot), this.state.position))
            }
          }}
        >
          <RectPart
            position={this.state.child_position_1}
            width={100}
            height={100}
            opacity={0.5}
            fillColor={'red'}
          />
          <RectPart
            position={this.state.child_position_2}
            width={100}
            height={100}
            opacity={0.5}
            fillColor={'green'}
          />
        </PartGroup>


        <Tool
          active={true}
          onMouseDown={(e) => {
            switch (this.state.count) {
              case 0:
                // PivotPartを変更
                this.setState({
                  count: this.state.count + 1,
                  pivotPart: 1
                })
                break
              case 1:
                // PivotPartを指定なしに変更
                // BoundingBoxの中心がPivotになる
                this.setState({
                  count: this.state.count + 1,
                  pivotPart: undefined
                })
                break
              case 2:
                // PivotPartを変更
                this.setState({
                  count: this.state.count + 1,
                  pivotPart: 0
                })
                break
            }
          }}
        />
      </View>
    )
  }
}
