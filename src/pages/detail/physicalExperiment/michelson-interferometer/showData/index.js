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
                                        <Breadcrumb.Item> <Link to='/physicalExperiment/1'>
                                            迈克尔逊干涉仪的调整和使用（测波长）</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item>个人实验结果展示</Breadcrumb.Item>

                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

                                        <h2>个人实验结果展示</h2>
                                        <br/>
                                        {/*<h3>个人信息</h3>*/}
                                        {/*<hr/>*/}
                                        {/*<ol>*/}
                                            {/*<li style={{display:'none'}}>姓名：{this.props.user_name}</li>*/}
                                            {/*<li style={{display:'none'}}>学号：{this.props.user_num}</li>*/}
                                        {/*</ol>*/}
                                        {/*<br/>*/}
                                        <h3>数据记录</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请输入位置坐标</span>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>i</div>
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
                                                <div className='divTableTh'>坐标d（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.one}
                                                                                   name='one'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.two}
                                                                                   name='two'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.three}
                                                                                   name='three'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.four}
                                                                                   name='four'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.five}
                                                                                   name='five'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.six}
                                                                                   name='six'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>i+6（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>7</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>8</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>9</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>10</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>11</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTh'>12</div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>坐标d（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.seven}
                                                                                   name='seven'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.eight}
                                                                                   name='eight'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.nine}
                                                                                   name='nine'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.ten}
                                                                                   name='ten'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.eleven}
                                                                                   name='eleven'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.twelfth}
                                                                                   name='twelfth'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>△d（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.seven_one}
                                                                                   name='seven_one'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.eight_two}
                                                                                   name='eight_two'
                                                /></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.nine_three}
                                                                                   name='nine_three'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.ten_four}
                                                                                   name='ten_four'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.eleven_five}
                                                                                   name='eleven_five'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.twelfth_six}
                                                                                   name='twelfth_six'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <h3>测量条件</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>仪器允差（位置坐标）</strong><br/><Input value={this.props.Instrumenttolerance}/></Col>
                                            <Col span={6}><strong>d的平均值(mm)</strong><br/><Input value={this.props.deltad}/></Col>
                                            <Col span={6}><strong>△d的不确定度(mm)</strong><br/><Input value={this.props.deltadD}/></Col>
                                            <Col span={6}><strong>Λ平均值(nm)</strong><br/><Input  value={this.props.lambda_avg}/></Col>
                                            <Col span={6}><strong>Λ不确定度(nm)</strong><br/><Input  value={this.props.deltadlambda} /></Col>
                                            <Col span={6}><strong>相对不确定度</strong><br/><Input  value={this.props.E} /></Col>
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

        this.props.handleButtonClick(this.props.location.state);
        this.handleHeight();
        window.addEventListener('resize',this.handleHeight);

        /*
                alert("已经将程佩发来的数据保存到newtonRing的store中，下一步，根据他返回的编写就行！")
        */
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
        "user_id": state.getIn(['micheison', 'user_id']),
        "user_name": state.getIn(['micheison', 'user_name']),
        "user_num": state.getIn(['micheison', 'user_num']),
        "one": state.getIn(['micheison', 'one']),
        "two": state.getIn(['micheison', 'two']),
        "three": state.getIn(['micheison', 'three']),
        "four": state.getIn(['micheison', 'four']),
        "five": state.getIn(['micheison', 'five']),
        "six": state.getIn(['micheison', 'six']),
        "seven": state.getIn(['micheison', 'seven']),
        "eight": state.getIn(['micheison', 'eight']),
        "nine": state.getIn(['micheison', 'nine']),
        "ten": state.getIn(['micheison', 'ten']),
        "eleven": state.getIn(['micheison', 'eleven']),
        "twelfth": state.getIn(['micheison', 'twelfth']),
        "seven_one": state.getIn(['micheison', 'seven_one']),
        "eight_two": state.getIn(['micheison', 'eight_two']),
        "nine_three": state.getIn(['micheison', 'nine_three']),
        "ten_four": state.getIn(['micheison', 'ten_four']),
        "eleven_five": state.getIn(['micheison', 'eleven_five']),
        "twelfth_six": state.getIn(['micheison', 'twelfth_six']),
        "deltad": state.getIn(['micheison', 'deltad']),
        "deltadD": state.getIn(['micheison', 'deltadD']),
        "lambda_avg": state.getIn(['micheison', 'lambda_avg']),
        "deltadlambda": state.getIn(['micheison', 'deltadlambda']),
        "E": state.getIn(['micheison', 'E']),
        "Instrumenttolerance": state.getIn(['micheison', 'Instrumenttolerance'])

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
