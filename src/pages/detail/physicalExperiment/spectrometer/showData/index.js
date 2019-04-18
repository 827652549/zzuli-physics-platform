import React, {Component, Fragment} from 'react';
import {actionCreators} from "../store";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb, Input, Button} from "antd";
import {Style} from './style';

const {
    Footer, Content
} = Layout;

class showData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //利用state改变组件就会重新渲染的特性
            clientHeight:5
        }
    }
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
                                                <span className="iconfont"
                                                      style={{fontSize: '18px'}}>&#xe600;&ensp;</span>
                                                首页
                                            </Link>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item> <Link to='/physicalExperiment/3'>
                                            分光计的调整与使用</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item>个人实验结果展示</Breadcrumb.Item>

                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

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
                                        <span className='tipSpan'>请输入相关数据（分光计允差1'）</span>
                                        <Row>


                                            <Col span={6}>
                                                <div className='divTableTh'>次数n</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>φ<sub>1</sub></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>φ<sub>2</sub></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>φ'<sub>1</sub></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>φ'<sub>2</sub></div>
                                            </Col>
                                            <Col span={6}>
                                                <div className='divTableTh'>φ=1/2(|φ<sub>1</sub>-φ<sub>2</sub>|+|φ'<sub>1</sub>-φ'<sub>2</sub>|)</div>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi1_1}
                                                                                   name='phi1_1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi2_1}
                                                                                   name='phi2_1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi3_1}
                                                                                   name='phi3_1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi4_1}
                                                                                   name='phi4_1'/></div>
                                            </Col>
                                            <Col span={6}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi1}
                                                                                   name='phi1'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi1_2}
                                                                                   name='phi1_2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi2_2}
                                                                                   name='phi2_2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi3_2}
                                                                                   name='phi3_2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi4_2}
                                                                                   name='phi4_2'/></div>
                                            </Col>
                                            <Col span={6}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi2}
                                                                                   name='phi2'/></div>
                                            </Col>

                                        </Row><Row>
                                        <Col span={6}>
                                            <div className='divTableTh'>3</div>
                                        </Col>
                                        <Col span={3}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               value={this.props.phi1_3}
                                                                               name='phi1_3'/></div>
                                        </Col>
                                        <Col span={3}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               value={this.props.phi2_3}
                                                                               name='phi2_3'/></div>
                                        </Col>
                                        <Col span={3}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               value={this.props.phi3_3}
                                                                               name='phi3_3'/></div>
                                        </Col>
                                        <Col span={3}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               value={this.props.phi4_3}
                                                                               name='phi4_3'/></div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               value={this.props.phi3}
                                                                               name='phi3'/></div>
                                        </Col>

                                    </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>4</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi1_4}
                                                                                   name='phi1_4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi2_4}
                                                                                   name='phi2_4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi3_4}
                                                                                   name='phi3_4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi4_4}
                                                                                   name='phi4_4'/></div>
                                            </Col>
                                            <Col span={6}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               value={this.props.phi4}
                                                                               name='phi4'/></div>
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>5</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi1_5}
                                                                                   name='phi1_5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi2_5}
                                                                                   name='phi2_5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi3_5}
                                                                                   name='phi3_5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi4_5}
                                                                                   name='phi4_5'/></div>
                                            </Col>
                                            <Col span={6}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi5}
                                                                                   name='phi5'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi1_6}
                                                                                   name='phi1_6'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi2_6}
                                                                                   name='phi2_6'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi3_6}
                                                                                   name='phi3_6'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi4_6}
                                                                                   name='phi4_6'/></div>
                                            </Col>
                                            <Col span={6}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.phi6}
                                                                                   name='phi6'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <h3>测量条件</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>分光计仪器允差</strong><br/><Input value={this.props.Instrumenttolerance}/></Col>
                                            <Col span={6}><strong>顶角</strong><br/><Input value={this.props.alpha}/></Col>
                                            <Col span={6}><strong>角度平均值</strong><br/><Input value={this.props.phiba}/></Col>
                                            <Col span={6}><strong>不确定度</strong><br/><Input  value={this.props.delta}/></Col>
                                        </Row>
                                        <br/>
                                        <Button onClick={() => this.props.handleButtonUpload(this.props)} type="primary"
                                                size='large'>上传
                                        </Button>

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
        {this.handleHeight()}
        window.addEventListener('resize',this.handleHeight);
        this.props.handleButtonClick(this.props.location.state);
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.handleHeight);
    }

    handleHeight=()=>{
        const clientHeight = document.documentElement.clientHeight-184;
        this.setState({
            clientHeight
        });
    }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.getIn(['Spectrometer', 'user_id']),
        user_name: state.getIn(['Spectrometer', 'user_name']),
        user_num: state.getIn(['Spectrometer', 'user_num']),
        phi1_1: state.getIn(['Spectrometer', 'phi1_1']),
        phi2_1: state.getIn(['Spectrometer', 'phi2_1']),
        phi3_1: state.getIn(['Spectrometer', 'phi3_1']),
        phi4_1: state.getIn(['Spectrometer', 'phi4_1']),
        phi1_2: state.getIn(['Spectrometer', 'phi1_2']),
        phi2_2: state.getIn(['Spectrometer', 'phi2_2']),
        phi3_2: state.getIn(['Spectrometer', 'phi3_2']),
        phi4_2: state.getIn(['Spectrometer', 'phi4_2']),
        phi1_3: state.getIn(['Spectrometer', 'phi1_3']),
        phi2_3: state.getIn(['Spectrometer', 'phi2_3']),
        phi3_3: state.getIn(['Spectrometer', 'phi3_3']),
        phi4_3: state.getIn(['Spectrometer', 'phi4_3']),
        phi1_4: state.getIn(['Spectrometer', 'phi1_4']),
        phi2_4: state.getIn(['Spectrometer', 'phi2_4']),
        phi3_4: state.getIn(['Spectrometer', 'phi3_4']),
        phi4_4: state.getIn(['Spectrometer', 'phi4_4']),
        phi1_5: state.getIn(['Spectrometer', 'phi1_5']),
        phi2_5: state.getIn(['Spectrometer', 'phi2_5']),
        phi3_5: state.getIn(['Spectrometer', 'phi3_5']),
        phi4_5: state.getIn(['Spectrometer', 'phi4_5']),
        phi1_6: state.getIn(['Spectrometer', 'phi1_6']),
        phi2_6: state.getIn(['Spectrometer', 'phi2_6']),
        phi3_6: state.getIn(['Spectrometer', 'phi3_6']),
        phi4_6: state.getIn(['Spectrometer', 'phi4_6']),
        Instrumenttolerance: state.getIn(['Spectrometer', 'Instrumenttolerance']),
        phi1: state.getIn(['Spectrometer', 'phi1']),
        phi2: state.getIn(['Spectrometer', 'phi2']),
        phi3: state.getIn(['Spectrometer', 'phi3']),
        phi4: state.getIn(['Spectrometer', 'phi4']),
        phi5: state.getIn(['Spectrometer', 'phi5']),
        phi6: state.getIn(['Spectrometer', 'phi6']),
        alpha: state.getIn(['Spectrometer', 'alpha']),
        phiba: state.getIn(['Spectrometer', 'phiba']),
        delta: state.getIn(['Spectrometer', 'delta'])

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleButtonClick(state) {
            const action = actionCreators.sendData(state);
            dispatch(action);
        },
        handleButtonUpload(props) {
            const action = actionCreators.sendDataToBackend(props);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(showData));
