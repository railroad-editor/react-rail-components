import * as React from "react";
import RectPart from "react-rail-components/lib/parts/primitives//RectPart";
import {Point} from "paper";
import {Tool, View} from "react-paper-bindings";
import {createGridLines} from "common";
import {Pivot} from "react-rail-components/lib/parts/primitives//PartBase";
import PartGroup from "react-rail-components/lib/parts/primitives//PartGroup";
import assert from "assert";
import {pointsEqual} from "react-rail-components/lib/utils";


export default class Case03 extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      pivot: Pivot.LEFT,
      position: new Point(200, 200),
      child_position_1: new Point(200, 100),
      child_position_2: new Point(300, 100)
    }
  }

  render() {


    console.log(this.state)

    return (
      <View width={800}
            height={600}
                        settings={{
              applyMatrix: false
            }}
      >
        {createGridLines(800, 600, 100)}

        /*
          Pivot指定あり＋PivotPart指定なしのパターン
          常にBoundingBoxに対するPivot指定となる
         */

        <PartGroup
          position={this.state.position}
          pivot={this.state.pivot}
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
                // Groupの位置を変更
                this.setState({
                  count: this.state.count + 1,
                  position: new Point(300, 200),
                })
                break
              case 1:
                // 子とGroupの位置を変更
                // ここでGroup内のパーツの位置を変更するのでPivotも変化する
                // TODO: Bounds のキャッシュが更新されず、古いままのものを使う不具合あり？
                this.setState({
                  count: this.state.count + 1,
                  position: new Point(300, 300),
                  child_position_1: new Point(500, 100)
                  // child_position_2: new Point(500,100)
                })
                break
              case 2:
                // 子とGroupの位置を変更
                this.setState({
                  count: this.state.count + 1,
                  position: new Point(300, 400),
                })
                break
            }
          }}
        />
      </View>
    )
  }
}
