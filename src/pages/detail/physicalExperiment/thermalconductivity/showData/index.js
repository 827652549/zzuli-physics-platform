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
                                        <Breadcrumb.Item>                                            <Link to='/physicalExperiment/5'>
                                            热导率实验</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item>个人实验结果展示</Breadcrumb.Item>

                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>

                                        <h3>模拟图像生成</h3>
                                        <hr/>
                                        <br/>

                                        <Row>
                                            <Col span={12}>
                                                <img src={this.props.img1} alt="模拟图像1"/>

                                            </Col>
                                            <Col span={12}>
                                                <img src={this.props.img2}  alt="模拟图像2"/>
                                            </Col>
                                        </Row>
                                        <h3>加热盘Ta和散热盘Tp的温度（稳态法）</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请录入您实验的数据</span>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>3</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>4</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>5</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>7</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>8</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>9</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>10</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>11</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>12</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>13</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>14</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>15</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>16</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>17</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>18</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>19</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>20</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>

                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>散热盘初始温度</strong><br/><Input onChange={e => this.props.handleChangeInput(e)}
                                                                                              name='Instrumenttolerance'/></Col>
                                            <Col span={6}><strong>加热盘初始温度</strong><br/><Input value=''/></Col>
                                            <Col span={6}><strong>加热时间间隔</strong><br/><Input onChange={e => this.props.handleChangeInput(e)}
                                                                                             name='lamda'/></Col>
                                        </Row>


                                        <br/>
                                        <h3>散热盘Tp的冷却速率的测量</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请录入您实验的数据</span>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>3</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>4</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>5</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>7</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>8</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>9</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>10</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>11</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>12</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>13</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>14</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>15</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>16</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>17</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>18</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>19</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>20</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>

                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>散热时间间隔</strong><br/><Input onChange={e => this.props.handleChangeInput(e)}
                                                                                             name='lamda'/></Col>
                                        </Row>

                                        <br/>
                                        <h3>橡胶盘几何参数的测量</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请录入您实验的数据</span>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>次数</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>3</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>4</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>5</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>直径</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>


                                        </Row>

                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>厚度</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>面积</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
name='l35'/></div>
                                            </Col>


                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>橡胶盘质量</strong><br/><Input onChange={e => this.props.handleChangeInput(e)}
                                                                                            name='lamda'/></Col>
                                            <Col span={6}><strong>橡胶盘比热容</strong><br/><Input onChange={e => this.props.handleChangeInput(e)}
                                                                                             name='lamda'/></Col>
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
        user_id: state.getIn(['thermalconductivity', 'user_id']),
        user_name: state.getIn(['thermalconductivity','user_name']),
        user_num: state.getIn(['thermalconductivity', 'user_num']),
        add_Ta: state.getIn(['thermalconductivity', 'add_Ta']),
        add_Tp: state.getIn(['thermalconductivity', 'add_Tp']),
        Tp_1: state.getIn(['thermalconductivity', 'Tp_1']),
        Tp_2: state.getIn(['thermalconductivity', 'Tp_2']),
        Tp_3: state.getIn(['thermalconductivity', 'Tp_3']),
        Tp_4: state.getIn(['thermalconductivity', 'Tp_4']),
        Tp_5: state.getIn(['thermalconductivity', 'Tp_5']),

        Tp_6: state.getIn(['thermalconductivity', 'Tp_6']),
        Tp_7: state.getIn(['thermalconductivity', 'Tp_7']),
        Tp_8: state.getIn(['thermalconductivity', 'Tp_8']),
        Tp_9: state.getIn(['thermalconductivity', 'Tp_9']),
        Tp_10: state.getIn(['thermalconductivity', 'Tp_10']),
        Tp_11: state.getIn(['thermalconductivity', 'Tp_11']),
        Tp_12: state.getIn(['thermalconductivity', 'Tp_12']),
        Tp_13: state.getIn(['thermalconductivity', 'Tp_13']),
        Tp_14: state.getIn(['thermalconductivity', 'Tp_14']),
        Tp_15: state.getIn(['thermalconductivity', 'Tp_15']),
        Tp_16: state.getIn(['thermalconductivity', 'Tp_16']),
        Tp_17: state.getIn(['thermalconductivity', 'Tp_17']),
        Tp_18: state.getIn(['thermalconductivity', 'Tp_18']),
        Tp_19: state.getIn(['thermalconductivity', 'Tp_19']),
        Tp_20: state.getIn(['thermalconductivity', 'Tp_20']),
        hb_1: state.getIn(['thermalconductivity', 'hb_1']),
        hb_2: state.getIn(['thermalconductivity', 'hb_2']),
        hb_3: state.getIn(['thermalconductivity', 'hb_3']),
        hb_4: state.getIn(['thermalconductivity', 'hb_4']),
        hb_5: state.getIn(['thermalconductivity', 'hb_5']),
        hb_6: state.getIn(['thermalconductivity', 'hb_6']),
        Ta: state.getIn(['thermalconductivity', 'Ta']),
        Tp: state.getIn(['thermalconductivity', 'Tp']),
        hp: state.getIn(['thermalconductivity', 'hp']),
        D1: state.getIn(['thermalconductivity', 'D1']),
        D2: state.getIn(['thermalconductivity', 'D2']),
        D3: state.getIn(['thermalconductivity', 'D3']),
        D4: state.getIn(['thermalconductivity', 'D4']),
        D5: state.getIn(['thermalconductivity', 'D5']),
        D6: state.getIn(['thermalconductivity', 'D6']),
        m: state.getIn(['thermalconductivity', 'm']),
        c: state.getIn(['thermalconductivity', 'c']),
        space1: state.getIn(['thermalconductivity', 'space1']),
        space2: state.getIn(['thermalconductivity', 'space2']),
        p1: state.getIn(['thermalconductivity', 'p1']),
        p2: state.getIn(['thermalconductivity', 'p2']),
        t: state.getIn(['thermalconductivity', 't']),
        img1: state.getIn(['thermalconductivity', 'img1']),
        img2: state.getIn(['thermalconductivity', 'img2']),
        img10: state.getIn(['thermalconductivity', 'img10']),
        img20: state.getIn(['thermalconductivity', 'img20']),
        k: state.getIn(['thermalconductivity', 'k'])
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
