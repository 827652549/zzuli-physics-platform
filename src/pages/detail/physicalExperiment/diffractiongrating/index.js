import React, {Component, Fragment} from 'react';
import {withRouter, Link,} from 'react-router-dom';
import {Style} from './style';
import {Layout, Row, Col, Breadcrumb, BackTop, Input, Button} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";

const {
    Footer, Content
} = Layout;

class Staticyoungmodulus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //利用state改变组件就会重新渲染的特性
            updateUI: 0
        }
    }


    render() {
        const {handleChangeInput} = this.props;
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
                                        <Breadcrumb.Item> <Link to='/physicalExperiment/2'>
                                            衍射光栅实验</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                                        <br/>
                                        <h3>数据记录</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请输入相关数据</span>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>角坐标</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTh'>φ<sub>1</sub></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTh'>φ<sub>2</sub></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTh'>φ'<sub>1</sub></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTh'>φ'<sub>2</sub></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>黄外光</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Beyond_yellow1'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Beyond_yellow2'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Beyond_yellow3'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Beyond_yellow4'/></div>
                                            </Col>
                                            {/*<Col span={8}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>*/}

                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>黄内光</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Inside_yellow1'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Inside_yellow2'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Inside_yellow3'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Inside_yellow4'/></div>
                                            </Col>
                                            {/*<Col span={8}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>*/}

                                        </Row><Row>
                                        <Col span={8}>
                                            <div className='divTableTh'>绿光</div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='green1'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='green2'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='green3'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='green4'/></div>
                                        </Col>
                                        {/*<Col span={8}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='five'/></div>
                                        </Col>*/}

                                    </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>蓝光</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='blue1'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='blue2'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='blue3'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='blue4'/></div>
                                            </Col>

                                        </Row>

                                        <br/>
                                        <Link to={
                                            {
                                                /*将数据传递到连接到的页面中*/
                                                pathname: `${this.props.match.url}/showData`,
                                                state: {
                                                    user_id:this.props.user_id,
                                                    user_name:this.props.user_name,
                                                    user_num:this.props.user_num,
                                                    Beyond_yellow1:this.props.Beyond_yellow1,
                                                    Beyond_yellow2:this.props.Beyond_yellow2,
                                                    Beyond_yellow3:this.props.Beyond_yellow3,
                                                    Beyond_yellow4:this.props.Beyond_yellow4,
                                                    Inside_yellow1:this.props.Inside_yellow1,
                                                    Inside_yellow2:this.props.Inside_yellow2,
                                                    Inside_yellow3:this.props.Inside_yellow3,
                                                    Inside_yellow4:this.props.Inside_yellow4,
                                                    green1:this.props.green1,
                                                    green2:this.props.green2,
                                                    green3:this.props.green3,
                                                    green4:this.props.green4,
                                                    blue1:this.props.blue1,
                                                    blue2:this.props.blue2,
                                                    blue3:this.props.blue3,
                                                    blue4:this.props.blue4,
                                                    N:this.props.N,
                                                    Beyond_yellow_k:this.props.Beyond_yellow_k,
                                                    Inside_yellow_k:this.props.Inside_yellow_k,
                                                    green_k:this.props.green_k,
                                                    blue_k:this.props.blue_k,
                                                    d:this.props.d,
                                                    Beyond_yellow:this.props.Beyond_yellow,
                                                    Inside_yellow:this.props.Inside_yellow,
                                                    green:this.props.green,
                                                    blue:this.props.blue,
                                                    Beyond_yellow_lambda:this.props.Beyond_yellow_lambda,
                                                    Inside_yellow_lambda:this.props.Inside_yellow_lambda,
                                                    green_lambda:this.props.green_lambda,
                                                    blue_lambda:this.props.blue_lambda,
                                                    Beyond_yellow_D:this.props.Beyond_yellow_D,
                                                    Inside_yellow_D:this.props.Inside_yellow_D,
                                                    green_D:this.props.green_D,
                                                    blue_D:this.props.blue_D,
                                                    Beyond_yellow_R:this.props.Beyond_yellow_R,
                                                    Inside_yellow_R:this.props.Inside_yellow_R,
                                                    green_R:this.props.green_R,
                                                    blue_R:this.props.blue_R,
                                                    Beyond_yellow_delta_lambda:this.props.Beyond_yellow_delta_lambda,
                                                    Inside_yellow_delta_lambda:this.props.Inside_yellow_delta_lambda,
                                                    green_delta_lambda:this.props.green_delta_lambda,
                                                    blue_delta_lambda:this.props.blue_delta_lambda
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
        handleChangeInput(e) {
            const {value, name} = e.target;
            const action = actionCreators.changeInputValue(name, value);
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Staticyoungmodulus));

