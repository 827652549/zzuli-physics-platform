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
                                            衍射光栅实验</Link></Breadcrumb.Item>
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


                                            <Col span={3}>
                                                <div className='divTableTh'>角坐标</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>φ<sub>1</sub></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>φ<sub>2</sub></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>φ'<sub>1</sub></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>φ'<sub>2</sub></div>
                                            </Col>
                                            <Col span={5}>
                                                <div className='divTableTh'>φ=1/2(|φ<sub>1</sub>-φ<sub>2</sub>|+|φ'<sub>1</sub>-φ'<sub>2</sub>|)</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>光线波长</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>光线色散率</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>光线分辨本领</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>光线波长差</div>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col span={3}>
                                                <div className='divTableTh'>黄外光</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow1}
                                                                                   name='Beyond_yellow1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow2}
                                                                                   name='Beyond_yellow2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow3}
                                                                                   name='Beyond_yellow3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow4}
                                                                                   name='Beyond_yellow4'/></div>
                                            </Col>
                                            <Col span={5}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow}
                                                                                   name='Beyond_yellow'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow_lambda}
                                                                                   name='Beyond_yellow_lambda'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow_D}
                                                                                   name='Beyond_yellow_D'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow_R}
                                                                                   name='Beyond_yellow_R'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Beyond_yellow_delta_lambda}
                                                                                   name='Beyond_yellow_delta_lambda'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={3}>
                                                <div className='divTableTh'>黄内光</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow1}
                                                                                   name='Inside_yellow1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow2}
                                                                                   name='Inside_yellow2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow3}
                                                                                   name='Inside_yellow3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow4}
                                                                                   name='Inside_yellow4'/></div>
                                            </Col>
                                            <Col span={5}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow}
                                                                                   name='Inside_yellow'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow_lambda}
                                                                                   name='Inside_yellow_lambda'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow_D}
                                                                                   name='Inside_yellow_D'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow_R}
                                                                                   name='Inside_yellow_R'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Inside_yellow_delta_lambda}
                                                                                   name='Inside_yellow_delta_lambda'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={3}>
                                                <div className='divTableTh'>绿光</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green1}
                                                                                   name='green1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green2}
                                                                                   name='green2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green3}
                                                                                   name='green3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green4}
                                                                                   name='green4'/></div>
                                            </Col>
                                            <Col span={5}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green}
                                                                                   name='green'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green_lambda}
                                                                                   name='green_lambda'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green_D}
                                                                                   name='green_D'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green_R}
                                                                                   name='green_R'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.green_delta_lambda}
                                                                                   name='green_delta_lambda'/></div>
                                            </Col>

                                    </Row>
                                        <Row>
                                            <Col span={3}>
                                                <div className='divTableTh'>蓝光</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue1}
                                                                                   name='blue1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue2}
                                                                                   name='blue2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue3}
                                                                                   name='blue3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue4}
                                                                                   name='blue4'/></div>
                                            </Col>
                                            <Col span={5}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue}
                                                                                   name='blue'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue_lambda}
                                                                                   name='phi4_1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue_D}
                                                                                   name='phi4_1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue_R}
                                                                                   name='phi4_1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.blue_delta_lambda}
                                                                                   name='phi4_1'/></div>
                                            </Col>
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

    componentWillUnmount() {
        window.removeEventListener('resize',this.handleHeight);
    }

    handleHeight=()=>{
        const clientHeight = document.documentElement.clientHeight-184;
        this.setState({
            clientHeight
        });
    }

    //组件渲染之前先通过上级页面传来的数据更替store里的数据并发送ajax，然后接收到后台回传出的数据，再在此页面中操作回传的数据
    //注意，这个请求发送的是不更新数据库的操作
    componentDidMount() {

        this.props.handleButtonClick(this.props.location.state);
        {this.handleHeight()}
        window.addEventListener('resize',this.handleHeight);
    }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.getIn(['diffractiongrating', 'user_id']),
        user_name: state.getIn(['diffractiongrating', 'user_name']),
        user_num: state.getIn(['diffractiongrating', 'user_num']),
        Beyond_yellow1: state.getIn(['diffractiongrating', 'Beyond_yellow1']),
        Beyond_yellow2: state.getIn(['diffractiongrating', 'Beyond_yellow2']),
        Beyond_yellow3: state.getIn(['diffractiongrating', 'Beyond_yellow3']),
        Beyond_yellow4: state.getIn(['diffractiongrating', 'Beyond_yellow4']),
        Inside_yellow1: state.getIn(['diffractiongrating', 'Inside_yellow1']),
        Inside_yellow2: state.getIn(['diffractiongrating', 'Inside_yellow2']),
        Inside_yellow3: state.getIn(['diffractiongrating', 'Inside_yellow3']),
        Inside_yellow4: state.getIn(['diffractiongrating', 'Inside_yellow4']),
        green1: state.getIn(['diffractiongrating', 'green1']),
        green2: state.getIn(['diffractiongrating', 'green2']),
        green3: state.getIn(['diffractiongrating', 'green3']),
        green4: state.getIn(['diffractiongrating', 'green4']),
        blue1: state.getIn(['diffractiongrating', 'blue1']),
        blue2: state.getIn(['diffractiongrating', 'blue2']),
        blue3: state.getIn(['diffractiongrating', 'blue3']),
        blue4: state.getIn(['diffractiongrating', 'blue4']),
        N: state.getIn(['diffractiongrating', 'N']),
        Beyond_yellow_k: state.getIn(['diffractiongrating', 'Beyond_yellow_k']),
        Inside_yellow_k: state.getIn(['diffractiongrating', 'Inside_yellow_k']),
        green_k: state.getIn(['diffractiongrating', 'green_k']),
        blue_k: state.getIn(['diffractiongrating', 'blue_k']),
        d: state.getIn(['diffractiongrating', 'd']),
        Beyond_yellow: state.getIn(['diffractiongrating', 'Beyond_yellow']),
        Inside_yellow: state.getIn(['diffractiongrating', 'Inside_yellow']),
        green: state.getIn(['diffractiongrating', 'green']),
        blue: state.getIn(['diffractiongrating', 'blue']),
        Beyond_yellow_lambda: state.getIn(['diffractiongrating', 'Beyond_yellow_lambda']),
        Inside_yellow_lambda: state.getIn(['diffractiongrating', 'Inside_yellow_lambda']),
        green_lambda: state.getIn(['diffractiongrating', 'green_lambda']),
        blue_lambda: state.getIn(['diffractiongrating', 'blue_lambda']),
        Beyond_yellow_D: state.getIn(['diffractiongrating', 'Beyond_yellow_D']),
        Inside_yellow_D: state.getIn(['diffractiongrating', 'Inside_yellow_D']),
        green_D: state.getIn(['diffractiongrating', 'green_D']),
        blue_D: state.getIn(['diffractiongrating', 'blue_D']),
        Beyond_yellow_R: state.getIn(['diffractiongrating', 'Beyond_yellow_R']),
        Inside_yellow_R: state.getIn(['diffractiongrating', 'Inside_yellow_R']),
        green_R: state.getIn(['diffractiongrating', 'green_R']),
        blue_R: state.getIn(['diffractiongrating', 'blue_R']),
        Beyond_yellow_delta_lambda: state.getIn(['diffractiongrating', 'Beyond_yellow_delta_lambda']),
        Inside_yellow_delta_lambda: state.getIn(['diffractiongrating', 'Inside_yellow_delta_lambda']),
        green_delta_lambda: state.getIn(['diffractiongrating', 'green_delta_lambda']),
        blue_delta_lambda: state.getIn(['diffractiongrating', 'blue_delta_lambda'])

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
