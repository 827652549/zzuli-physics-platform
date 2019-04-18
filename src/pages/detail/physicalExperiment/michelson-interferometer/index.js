import React, {Component, Fragment} from 'react';
import {withRouter, Link,} from 'react-router-dom';
import {Style} from './style';
import {Layout, Row, Col, Breadcrumb, BackTop, Input, Button} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";

const {
    Footer, Content
} = Layout;

class MichelsonInterferometer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //利用state改变组件就会重新渲染的特性
            updateUI: 0,
            clientHeight:5
        }
    }


    render() {
        const { handleChangeInput} = this.props;
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
                                        <Breadcrumb.Item>                                            <Link to='/physicalExperiment/1'>
                                            迈克尔逊干涉仪的调整和使用（测波长）</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='one'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='two'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='three'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='four'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='seven'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='eight'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='nine'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='ten'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='eleven'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='twelfth'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <h3>测量条件</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>仪器允差（位置坐标）</strong><br/><Input onChange={e => handleChangeInput(e)}
                                                                                                  name='Instrumenttolerance'/></Col>
                                            {/*<Col span={6}><strong>涌出/淹没</strong><br/><Input value='程佩还没算出来'/></Col>
                                            <Col span={6}><strong>相邻位置级数差</strong><br/><Input onChange={e => handleChangeInput(e)}
                                                                                           name='lamda'/></Col>
                                            <Col span={6}><strong>每100级的计数误差</strong><br/><Input  onChange={e => handleChangeInput(e)}
                                                                                              name='uncertainty'/></Col>*/}
                                        </Row>
                                        <br/>
                                        <Link to={
                                            {
                                                /*将数据传递到连接到的页面中*/
                                                pathname: `${this.props.match.url}/showData`,
                                                state: {
                                                    "user_id": this.props.user_id,
                                                    "user_name": this.props.user_name,
                                                    "user_num": this.props.user_num,
                                                    "one": this.props.one,
                                                    "two": this.props.two,
                                                    "three": this.props.three,
                                                    "four": this.props.four,
                                                    "five": this.props.five,
                                                    "six": this.props.six,
                                                    "seven": this.props.seven,
                                                    "eight": this.props.eight,
                                                    "nine": this.props.nine,
                                                    "ten": this.props.ten,
                                                    "eleven": this.props.eleven,
                                                    "twelfth": this.props.twelfth,
                                                    "seven_one": this.props.seven_one,
                                                    "eight_two": this.props.eight_two,
                                                    "nine_three": this.props.nine_three,
                                                    "ten_four": this.props.ten_four,
                                                    "eleven_five": this.props.eleven_five,
                                                    "twelfth_six": this.props.twelfth_six,
                                                    "deltad": this.props.deltad,
                                                    "deltadD": this.props.deltadD,
                                                    "lambda_avg": this.props.lambda_avg,
                                                    "deltadlambda": this.props.deltadlambda,
                                                    "E": this.props.E,
                                                    "Instrumenttolerance": this.props.Instrumenttolerance
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
    componentDidMount(){
        {this.handleHeight()}
        window.addEventListener('resize',this.handleHeight);
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
        handleChangeInput(e) {
            const {value, name} = e.target;
            const action = actionCreators.changeInputValue(name, value);
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MichelsonInterferometer));

