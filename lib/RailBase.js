"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Joint_1 = require("./parts/Joint");
const utils_1 = require("./utils");
const _ = require("lodash");
const FeederSocket_1 = require("./parts/FeederSocket");
const GapJoiner_1 = require("./parts/GapJoiner");
const Feeder_1 = require("./parts/Feeder");
const GapJoinerSocket_1 = require("./parts/GapJoinerSocket");
const logging_1 = require("./logging");
class RailBase extends React.Component {
    constructor(props) {
        super(props);
        this.getInitialState = (props) => {
            return {
                jointPositions: new Array(this.props.numJoints).fill(props.position),
                jointAngles: new Array(this.props.numJoints).fill(props.angle),
                feederSocketPositions: new Array(this.props.numFeederSockets).fill(props.position),
                feederSocketAngles: new Array(this.props.numFeederSockets).fill(props.angle),
            };
        };
        this.bringToFrontConductiveParts = () => {
            this.railPart.conductiveParts.map(idx => this.railPart.partGroup.children[idx].path.bringToFront());
            this.gapJoiners.filter(gj => gj).forEach(gj => gj.part.path.bringToFront());
            this.gapJoinerSockets.filter(gj => gj).forEach(gj => gj.part.partGroup.group.bringToFront());
        };
        /**
         * ジョイントコンポーネントを生成する
         * @returns {any[]}
         */
        this.renderJoints = (props) => {
            const { id, opacity, opposingJoints, enableJoints, visible, showJoints } = props;
            const { jointPositions, jointAngles } = this.state;
            if (!showJoints) {
                return React.createElement(React.Fragment, null);
            }
            return _.range(this.joints.length).map(i => {
                return (React.createElement(Joint_1.default, { key: `j-${i}`, position: jointPositions[i], angle: jointAngles[i], opacity: opacity, visible: visible, data: {
                        type: 'Joint',
                        partId: i,
                        railId: id,
                    }, detectionEnabled: enableJoints, hasOpposingJoint: opposingJoints[i] != null, onLeftClick: this.props.onJointLeftClick.bind(this, i), onRightClick: this.props.onJointRightClick.bind(this, i), onMouseMove: this.props.onJointMouseMove.bind(this, i), onMouseEnter: this.props.onJointMouseEnter.bind(this, i), onMouseLeave: this.props.onJointMouseLeave.bind(this, i), ref: (joint) => {
                        if (joint)
                            this.joints[i] = joint;
                    } }));
            });
        };
        /**
         * フィーダーソケット・フィーダーを生成
         */
        this.renderFeederSockets = (props) => {
            const { id, opacity, visible, feeders, enableFeederSockets } = props;
            const { feederSocketPositions, feederSocketAngles } = this.state;
            const feederSocketComponents = _.range(this.feederSockets.length).map(i => {
                const hasFeeder = feeders.map(feeder => feeder.socketId).includes(i);
                return (React.createElement(FeederSocket_1.default, { key: `fs-${i}`, position: feederSocketPositions[i], angle: feederSocketAngles[i], opacity: opacity, visible: visible && enableFeederSockets, detectionEnabled: enableFeederSockets && !hasFeeder, hasFeeder: hasFeeder, data: {
                        type: 'FeederSocket',
                        partId: i,
                        railId: id,
                    }, onLeftClick: this.props.onFeederSocketLeftClick.bind(this, i), onRightClick: this.props.onFeederSocketRightClick.bind(this, i), onMouseEnter: this.props.onFeederSocketMouseEnter.bind(this, i), onMouseLeave: this.props.onFeederSocketMouseLeave.bind(this, i), ref: (fs) => {
                        if (fs)
                            this.feederSockets[i] = fs;
                    } }));
            });
            const feederComponents = feeders.map(feeder => {
                return (React.createElement(Feeder_1.default, { id: feeder.id, position: feederSocketPositions[feeder.socketId], angle: feederSocketAngles[feeder.socketId], direction: feeder.direction, visible: visible, selected: feeder.selected, data: {
                        type: 'Feeder',
                    }, onLeftClick: this.props.onFeederLeftClick.bind(this, feeder.id), onMouseEnter: this.props.onFeederMouseEnter.bind(this, feeder.id), onMouseLeave: this.props.onFeederMouseLeave.bind(this, feeder.id), ref: (r) => {
                        if (r)
                            this.feeders[feeder.socketId] = r;
                    } }));
            });
            return (React.createElement(React.Fragment, null,
                feederSocketComponents,
                feederComponents));
        };
        /**
         * ギャップジョイナーソケット・ギャップジョイナーを生成
         */
        this.renderGapJoiners = (props) => {
            const { id, opacity, visible, enableGapJoinerSockets, gapJoiners, opposingJoints } = props;
            const { jointPositions, jointAngles } = this.state;
            const gapJoinerSocketComponents = _.range(this.gapJoinerSockets.length).map(i => {
                if (opposingJoints[i] && id < opposingJoints[i].railId) {
                    const hasGapJoiner = gapJoiners.map(gapJoiner => gapJoiner.jointId).includes(i);
                    return (React.createElement(GapJoinerSocket_1.default, { key: `gj-${i}`, position: jointPositions[i], angle: jointAngles[i], opacity: opacity, visible: visible && enableGapJoinerSockets, detectionEnabled: enableGapJoinerSockets && !hasGapJoiner, hasGapJoiner: hasGapJoiner, data: {
                            type: 'GapJoinerSocket',
                            partId: i,
                            railId: id,
                        }, onLeftClick: this.props.onGapJoinerSocketLeftClick.bind(this, i), onMouseEnter: this.props.onGapJoinerSocketMouseEnter.bind(this, i), onMouseLeave: this.props.onGapJoinerSocketMouseLeave.bind(this, i), ref: (r) => {
                            if (r)
                                this.gapJoinerSockets[i] = r;
                        } }));
                }
                else {
                    return React.createElement(React.Fragment, null);
                }
            });
            const gapJoinerComponents = gapJoiners.map(gapJoiner => {
                return (React.createElement(GapJoiner_1.default, { id: gapJoiner.id, position: jointPositions[gapJoiner.jointId], angle: jointAngles[gapJoiner.jointId], visible: visible, selected: gapJoiner.selected, data: {
                        type: 'GapJoiner'
                    }, onLeftClick: this.props.onGapJoinerLeftClick.bind(this, gapJoiner.id), onMouseEnter: this.props.onGapJoinerMouseEnter.bind(this, gapJoiner.id), onMouseLeave: this.props.onGapJoinerMouseLeave.bind(this, gapJoiner.id), ref: (r) => {
                        if (r)
                            this.gapJoiners[gapJoiner.jointId] = r;
                    } }));
            });
            return (React.createElement(React.Fragment, null,
                gapJoinerSocketComponents,
                gapJoinerComponents));
        };
        this.getInstance = (railPart) => {
            if (railPart)
                this.railPart = railPart;
        };
        this.onFrame = (e) => {
            this.railPart.onFrame(e);
        };
        this.joints = new Array(this.props.numJoints).fill(null);
        this.feederSockets = new Array(this.props.numFeederSockets).fill(null);
        this.feeders = new Array(this.props.numFeederSockets).fill(null);
        this.gapJoinerSockets = new Array(this.props.numJoints).fill(null);
        this.gapJoiners = new Array(this.props.numJoints).fill(null);
        this.getInstance = this.getInstance.bind(this);
    }
    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount(this);
        }
    }
    componentDidUpdate() {
        this.fixJoints();
        this.fixFeederSockets();
        this.bringToFrontConductiveParts();
    }
    componentDidMount() {
        this.fixJoints();
        this.fixFeederSockets();
        // HOCを用いる場合、refではラップされたコンテナを取得することになってしまう
        // そのためonMountコールバックでコンポーネントインスタンスを取得する手段を与える
        if (this.props.onMount) {
            this.props.onMount(this);
        }
        this.bringToFrontConductiveParts();
        logging_1.log(`Rail ${this.props.id} mounted.`); //`
    }
    /**
     * レールパーツの位置・角度に合わせてジョイントの位置・角度を変更する
     */
    fixJoints() {
        // 注意: オブジェクトをStateにセットする場合はきちんとCloneすること
        const jointPositions = _.range(this.joints.length).map(i => _.clone(this.railPart.getPivotPositionToParent(this.railPart.joints[i])));
        const jointAngles = _.range(this.joints.length).map(i => _.clone(this.railPart.getPivotAngleToParent(this.railPart.joints[i])));
        // _.range(this.joints.length).forEach(i => {
        //   console.debug(`[Rail][${this.props.id}] Joint${i} position: ${this.state.jointPositions[i]} -> ${jointPositions[i]}`)
        //   console.debug(`[Rail][${this.props.id}] Joint${i} angle: ${this.state.jointAngles[i]} -> ${jointAngles[i]}`)
        // })
        // レールパーツから取得したジョイントの位置・角度が現在のものと異なれば再描画
        if (_.range(this.joints.length).every(i => utils_1.pointsEqual(this.state.jointPositions[i], jointPositions[i])
            && utils_1.anglesEqual(this.state.jointAngles[i], jointAngles[i]))) {
            // noop
        }
        else {
            this.setState({
                jointPositions,
                jointAngles
            });
        }
    }
    fixFeederSockets() {
        const feederSocketPositions = _.range(this.feederSockets.length).map(i => _.clone(this.railPart.getPivotPositionToParent(this.railPart.feederSockets[i])));
        const feederSocketAngles = _.range(this.feederSockets.length).map(i => _.clone(this.railPart.getPivotAngleToParent(this.railPart.feederSockets[i])));
        if (_.range(this.feederSockets.length).every(i => utils_1.pointsEqual(this.state.feederSocketPositions[i], feederSocketPositions[i])
            && utils_1.anglesEqual(this.state.feederSocketAngles[i], feederSocketAngles[i]))) {
            // noop
        }
        else {
            this.setState({
                feederSocketPositions,
                feederSocketAngles
            });
        }
    }
    render() {
        const { name, fillColor, fillColors, onRailPartLeftClick, onRailPartRightClick, onRailPartMouseEnter, onRailPartMouseLeave, onRailPartMouseMove, flowDirections, conductionState, showGap, showJoints } = this.props;
        const railPart = this.renderRailPart(this.props);
        const extendedRailPart = React.cloneElement(railPart, Object.assign(Object.assign({}, railPart.props), { name: name, fillColor: fillColor, fillColors: fillColors, onLeftClick: onRailPartLeftClick, onRightClick: onRailPartRightClick, onMouseEnter: onRailPartMouseEnter, onMouseLeave: onRailPartMouseLeave, onMouseMove: onRailPartMouseMove, flowDirections: flowDirections, conductionState: conductionState, showGap: showGap }));
        // console.debug(`rail ${this.props.id} render: ${JSON.stringify(this.props)}`)
        return (React.createElement(React.Fragment, null,
            extendedRailPart,
            this.renderJoints(this.props),
            this.renderFeederSockets(this.props),
            this.renderGapJoiners(this.props)));
    }
}
exports.RailBase = RailBase;
RailBase.defaultProps = {
    type: 'RailBase',
    numJoints: 2,
    pivotJointChangingStride: 1,
    numFeederSockets: 0,
    feeders: [],
    gapJoiners: [],
    selected: false,
    opposingJoints: {},
    enableJoints: true,
    visible: true,
    opacity: 1,
    fillColor: undefined,
    fillColors: {},
    flowDirections: {},
    enableFeederSockets: false,
    enableGapJoinerSockets: false,
    numConductionStates: 1,
    conductionState: 0,
    showGap: true,
    showJoints: true,
    // @formatter:off
    // 何もしないハンドラをセットしておく
    onRailPartLeftClick: (e) => false,
    onRailPartRightClick: (e) => false,
    onRailPartMouseEnter: (e) => { },
    onRailPartMouseLeave: (e) => { },
    onRailPartMouseMove: (e) => { },
    onJointLeftClick: (jointId, e) => { },
    onJointRightClick: (jointId, e) => { },
    onJointMouseMove: (jointId, e) => { },
    onJointMouseEnter: (jointId, e) => { },
    onJointMouseLeave: (jointId, e) => { },
    onFeederSocketMouseEnter: (feederId, e) => { },
    onFeederSocketMouseLeave: (feederId, e) => { },
    onFeederSocketLeftClick: (feederId, e) => { },
    onFeederSocketRightClick: (feederId, e) => { },
    onFeederMouseEnter: (id, e) => { },
    onFeederMouseLeave: (id, e) => { },
    onFeederLeftClick: (id, e) => { },
    onGapJoinerSocketMouseEnter: (feederId, e) => { },
    onGapJoinerSocketMouseLeave: (feederId, e) => { },
    onGapJoinerSocketLeftClick: (feederId, e) => { },
    onGapJoinerMouseEnter: (id, e) => { },
    onGapJoinerMouseLeave: (id, e) => { },
    onGapJoinerLeftClick: (id, e) => { },
};
