import React, {Component, Fragment} from 'react';
import {actionCreators} from "../store";
import {connect} from "react-redux";
import {withRouter,Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb, Input, Button} from "antd";
import {Style} from './style';

const {
    Footer, Content
} = Layout;

class showData extends Component {

    render() {
        return (
            <Fragment>
                <Style>
                    <Row>
                        <Col span={24}>
                            <Layout className="layout">
                                <Content style={{padding: '0 50px'}}>
                                    <Breadcrumb style={{margin: '16px 0'}}>
                                        <Breadcrumb.Item>
                                            <Link to='/'>
                                            <span className="iconfont" style={{fontSize: '18px'}}>&#xe600;&ensp;</span>
                                            首页
                                            </Link>
                                            </Breadcrumb.Item>
                                        <Breadcrumb.Item>                                            <Link to='/physicalExperiment/0'>
                                            牛顿环法测透镜曲率半径</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item>个人实验结果展示</Breadcrumb.Item>

                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>

                                        <h2>个人实验结果展示</h2>
                                        <br/>
                                        <h3>个人信息</h3>
                                        <hr/>
                                        <ol>
                                            <li>姓名：{this.props.user_name}</li>
                                            <li>学号：{this.props.user_num}</li>
                                        </ol>
                                        <br/>
                                        <h3>数据记录</h3>
                                        <hr/>
                                        <br/>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>级数m（圈数）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>35</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>34</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>33</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>32</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>31</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>30</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>左侧位置（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l35}
                                                                                   disabled={true}
                                                                                   name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.l34}

                                                                                   name='l34'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.l33}

                                                                                   name='l33'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l32}
                                                                                   disabled={true}
                                                                                   name='l32'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l31}
                                                                                   disabled={true}
                                                                                   name='l31'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l30}
                                                                                   disabled={true}
                                                                                   name='l30'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>右侧位置（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r35}
                                                                                   disabled={true}
                                                                                   name='r35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r34}
                                                                                   disabled={true}
                                                                                   name='r34'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r33}
                                                                                   disabled={true}
                                                                                   name='r33'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r32}
                                                                                   disabled={true}
                                                                                   name='r32'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r31}
                                                                                   disabled={true}
                                                                                   name='r31'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r30}
                                                                                   disabled={true}
                                                                                   name='r30'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>直径（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   name='d35'
                                                                                   value={this.props.d35}
                                                                                   disabled={true}
                                                /></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d34}
                                                                                   name='d34'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d33}
                                                                                   name='d33'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d32}
                                                                                   name='d32'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d31}
                                                                                   name='d31'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d30}
                                                                                   name='d30'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>级数n（圈数）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>15</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>14</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>13</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>12</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>11</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>10</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>左侧位置（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l15}
                                                                                   disabled={true}
                                                                                   name='l15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l14}
                                                                                   disabled={true}
                                                                                   name='l14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l13}
                                                                                   disabled={true}
                                                                                   name='l13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l12}
                                                                                   disabled={true}
                                                                                   name='l12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l11}
                                                                                   disabled={true}
                                                                                   name='l11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.l10}
                                                                                   disabled={true}
                                                                                   name='l10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>右侧位置（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r15}
                                                                                   disabled={true}
                                                                                   name='r15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r14}
                                                                                   disabled={true}
                                                                                   name='r14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r13}
                                                                                   disabled={true}
                                                                                   name='r13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r12}
                                                                                   disabled={true}
                                                                                   name='r12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r11}
                                                                                   disabled={true}
                                                                                   name='r11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.r10}
                                                                                   disabled={true}
                                                                                   name='r10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>直径（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d15}
                                                                                   name='d15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d14}
                                                                                   name='d14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d13}
                                                                                   name='d13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d12}
                                                                                   name='d12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d11}
                                                                                   name='d11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.d10}
                                                                                   name='d10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>半径（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.r35_15}
                                                                                   name='r35_15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.r34_14}
                                                                                   name='r34_14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.r33_13}
                                                                                   name='r33_13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.r32_12}
                                                                                   name='r32_12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.r31_11}
                                                                                   name='r31_11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.r30_10}
                                                                                   name='r30_10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>直径的平方差（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.value35_15}
                                                                                   name='value35_15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.value34_14}
                                                                                   name='value34_14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.value33_13}
                                                                                   name='value33_13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.value32_12}
                                                                                   name='value32_12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.value31_11}
                                                                                   name='value31_11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   disabled={true}
                                                                                   value={this.props.value30_10}
                                                                                   name='value30_10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>结果（mm）</div>
                                            </Col>
                                            <Col span={18}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   style={{textAlign: 'center'}}
                                                                                   disabled={true}
                                                                                   value={this.props.anwser}
                                                                                   name='anwser'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <h3>其他参数</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>仪器允差（读数显微镜）</strong><br/><Input value={this.props.Instrumenttolerance} disabled={true}/></Col>
                                            {/*
                                            TODO 等程佩会算了再填
                                            */}
                                            <Col span={6}><strong>半波损失</strong><br/><Input disabled={true} value='程佩还没算出来'/></Col>
                                            <Col span={6}><strong>钠光波长</strong><br/><Input disabled={true} value={this.props.lamda}/></Col>
                                            <Col span={6}><strong>波长不确定度</strong><br/><Input disabled={true} value={this.props.uncertainty}/></Col>
                                        </Row>
                                        <br/>
                                        <Button onClick={()=>this.props.handleButtonUpload(this.props)} type="primary" size='large'>上传</Button>

                                    </div>
                                </Content>
                                <Footer style={{textAlign: 'center'}}>
                                    Ant Design ©2019 Created by Junking
                                </Footer>
                            </Layout>
                        </Col>
                    </Row>
                </Style>
            </Fragment>

        )
    }

    //组件渲染之前先通过上级页面传来的数据更替store里的数据并发送ajax，然后接收到后台回传出的数据，再在此页面中操作回传的数据
    //注意，这个请求发送的是不更新数据库的操作
    componentDidMount() {
        this.props.handleButtonClick(this.props.location.state);
/*
        alert("已经将程佩发来的数据保存到newtonRing的store中，下一步，根据他返回的编写就行！")
*/
    }
}

const mapStateToProps = (state) => {
    return {
        l35: state.getIn(['newtonRing', 'l35']),
        l34: state.getIn(['newtonRing', 'l34']),
        l33: state.getIn(['newtonRing', 'l33']),
        l32: state.getIn(['newtonRing', 'l32']),
        l31: state.getIn(['newtonRing', 'l31']),
        l30: state.getIn(['newtonRing', 'l30']),
        l15: state.getIn(['newtonRing', 'l15']),
        l14: state.getIn(['newtonRing', 'l14']),
        l13: state.getIn(['newtonRing', 'l13']),
        l12: state.getIn(['newtonRing', 'l12']),
        l11: state.getIn(['newtonRing', 'l11']),
        l10: state.getIn(['newtonRing', 'l10']),
        r35: state.getIn(['newtonRing', 'r35']),
        r34: state.getIn(['newtonRing', 'r34']),
        r33: state.getIn(['newtonRing', 'r33']),
        r32: state.getIn(['newtonRing', 'r32']),
        r31: state.getIn(['newtonRing', 'r31']),
        r30: state.getIn(['newtonRing', 'r30']),
        r15: state.getIn(['newtonRing', 'r15']),
        r14: state.getIn(['newtonRing', 'r14']),
        r13: state.getIn(['newtonRing', 'r13']),
        r12: state.getIn(['newtonRing', 'r12']),
        r11: state.getIn(['newtonRing', 'r11']),
        r10: state.getIn(['newtonRing', 'r10']),
        d10: state.getIn(['newtonRing', 'd10']),
        d11: state.getIn(['newtonRing', 'd11']),
        d12: state.getIn(['newtonRing', 'd12']),
        d13: state.getIn(['newtonRing', 'd13']),
        d14: state.getIn(['newtonRing', 'd14']),
        d15: state.getIn(['newtonRing', 'd15']),
        d30: state.getIn(['newtonRing', 'd30']),
        d31: state.getIn(['newtonRing', 'd31']),
        d32: state.getIn(['newtonRing', 'd32']),
        d33: state.getIn(['newtonRing', 'd33']),
        d34: state.getIn(['newtonRing', 'd34']),
        d35: state.getIn(['newtonRing', 'd35']),
        r35_15: state.getIn(['newtonRing', 'r35_15']),
        r34_14: state.getIn(['newtonRing', 'r34_14']),
        r33_13: state.getIn(['newtonRing', 'r33_13']),
        r32_12: state.getIn(['newtonRing', 'r32_12']),
        r31_11: state.getIn(['newtonRing', 'r31_11']),
        r30_10: state.getIn(['newtonRing', 'r30_10']),
        value35_15: state.getIn(['newtonRing', 'value35_15']),
        value34_14: state.getIn(['newtonRing', 'value34_14']),
        value33_13: state.getIn(['newtonRing', 'value33_13']),
        value32_12: state.getIn(['newtonRing', 'value32_12']),
        value31_11: state.getIn(['newtonRing', 'value31_11']),
        value30_10: state.getIn(['newtonRing', 'value30_10']),
        Instrumenttolerance: state.getIn(['newtonRing', 'Instrumenttolerance']),
        uncertainty: state.getIn(['newtonRing', 'uncertainty']),
        anwser: state.getIn(['newtonRing', 'anwser']),
        lamda: state.getIn(['newtonRing', 'lamda']),

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleButtonClick(state) {
            const action = actionCreators.sendData(state);
            dispatch(action);
        },
        handleButtonUpload(props){
            const action  = actionCreators.sendDataToBackend(props);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(showData));
