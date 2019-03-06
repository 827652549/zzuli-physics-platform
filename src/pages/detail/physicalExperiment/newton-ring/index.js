import React, {Component, Fragment} from 'react';
import {withRouter, Link,} from 'react-router-dom';
import {Style} from './style';
import {Layout, Row, Col, Breadcrumb, BackTop, Input, Button} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";

const {
    Footer, Content
} = Layout;

class NewtonRing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //利用state改变组件就会重新渲染的特性
            updateUI: 0
        }
    }


    render() {
        const { handleChangeInput, l10, l11, l12, l13, l14, l15, l30, l31, l32, l33, l34, l35, r10, r11, r12, r13, r14, r15, r30, r31, r32, r33, r34, r35,uncertainty,Instrumenttolerance,lamda,anwser} = this.props;
        return (
            <Fragment>

                {/* <div>
                    <h1>牛顿环法测透镜曲率半径</h1>
                    <h1>传来的编号为{this.props.match.params.id}</h1>
                </div>*/}
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
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                                        {/*<h3>基本资料</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>项目名称</strong><br/><Input/></Col>
                                            <Col span={6}><strong>学号</strong><br/><Input/></Col>
                                            <Col span={6}><strong>姓名</strong><br/><Input/></Col>
                                            <Col span={6}><strong>座号</strong><br/><Input/></Col>
                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>仪器编号</strong><br/><Input/></Col>
                                            <Col span={6}><strong>指导老师</strong><br/><Input/></Col>
                                            <Col span={6}><strong>实验日期</strong><br/><Input/></Col>
                                            <Col span={6}><strong>时间段</strong><br/><Input/></Col>
                                        </Row>
                                        <br/>*/}
                                        <h3>数据记录</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请输入各级牛顿环的位置坐标</span>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l34'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l33'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l32'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l31'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l30'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>右侧位置（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r34'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r33'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r32'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r31'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r30'/></div>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='l10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>右侧位置（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r15'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r14'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r13'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r12'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r11'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='r10'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <h3>其他参数</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>仪器允差（读数显微镜）</strong><br/><Input onChange={e => handleChangeInput(e)}
                                                                                                  name='Instrumenttolerance'/></Col>
                                            <Col span={6}><strong>半波损失</strong><br/><Input value='程佩还没算出来'/></Col>
                                            <Col span={6}><strong>钠光波长</strong><br/><Input onChange={e => handleChangeInput(e)}
                                                                                           name='lamda'/></Col>
                                            <Col span={6}><strong>波长不确定度</strong><br/><Input  onChange={e => handleChangeInput(e)}
                                                                                              name='uncertainty'/></Col>
                                        </Row>
                                        <br/>
                                        <Link to={
                                            {
                                                /*将数据传递到连接到的页面中*/
                                                pathname: `${this.props.match.url}/showData`,
                                                state: {
                                                    l10: l10,
                                                    l11: l11,
                                                    l12: l12,
                                                    l13: l13,
                                                    l14: l14,
                                                    l15: l15,
                                                    l30: l30,
                                                    l31: l31,
                                                    l32: l32,
                                                    l33: l33,
                                                    l34: l34,
                                                    l35: l35,
                                                    r10: r10,
                                                    r11: r11,
                                                    r12: r12,
                                                    r13: r13,
                                                    r14: r14,
                                                    r15: r15,
                                                    r30: r30,
                                                    r31: r31,
                                                    r32: r32,
                                                    r33: r33,
                                                    r34: r34,
                                                    r35: r35,
                                                    anwser:anwser,
                                                    lamda:lamda,
                                                    Instrumenttolerance:Instrumenttolerance,
                                                    uncertainty:uncertainty



                                                }
                                            }
                                        }>
                                            <Button type="primary" size='large'>提交</Button>
                                        </Link>
                                    </div>
                                </Content>
                                <Footer style={{textAlign: 'center'}}>
                                    Ant Design ©2019 Created by Junking
                                </Footer>
                            </Layout>
                        </Col>
                    </Row>
                    <BackTop visibilityHeight={50}/>
                </Style>
            </Fragment>
        )
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
        Instrumenttolerance: state.getIn(['newtonRing', 'Instrumenttolerance']),
        lamda: state.getIn(['newtonRing', 'lamda']),
        uncertainty: state.getIn(['newtonRing', 'uncertainty']),
        anwser: state.getIn(['newtonRing', 'anwser'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeInput(e) {
            const {value, name} = e.target;
            const action = actionCreators.changeInputValue(name, value);
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewtonRing));
