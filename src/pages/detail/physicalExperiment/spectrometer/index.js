import React, {Component, Fragment} from 'react';
import {withRouter, Link,} from 'react-router-dom';
import {Style} from './style';
import {Layout, Row, Col, Breadcrumb, BackTop, Input, Button} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";

const {
    Footer, Content
} = Layout;

class Spectrometer extends Component {
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
                                        <Breadcrumb.Item>                                            <Link to='/physicalExperiment/3'>
                                            分光计的调整和使用</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>
                                        {/*<h3>基本资料</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={8}><strong>项目名称</strong><br/><Input/></Col>
                                            <Col span={8}><strong>学号</strong><br/><Input/></Col>
                                            <Col span={8}><strong>姓名</strong><br/><Input/></Col>
                                            <Col span={8}><strong>座号</strong><br/><Input/></Col>
                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={8}><strong>仪器编号</strong><br/><Input/></Col>
                                            <Col span={8}><strong>指导老师</strong><br/><Input/></Col>
                                            <Col span={8}><strong>实验日期</strong><br/><Input/></Col>
                                            <Col span={8}><strong>时间段</strong><br/><Input/></Col>
                                        </Row>
                                        <br/>*/}
                                        <h3>数据记录</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请输入相关数据（分光计允差1'）</span>
                                        <Row>


                                            <Col span={8}>
                                                <div className='divTableTh'>次数n</div>
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
                                            {/*<Col span={8}>
                                                <div className='divTableTh'>φ=1/2(|φ<sub>1</sub>-φ<sub>2</sub>|+|φ'<sub>1</sub>-φ'<sub>2</sub>|)</div>
                                            </Col>*/}


                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi1_1'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi2_1'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi3_1'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi4_1'/></div>
                                            </Col>
                                            {/*<Col span={8}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>*/}

                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi1_2'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi2_2'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi3_2'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi4_2'/></div>
                                            </Col>
                                            {/*<Col span={8}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>*/}

                                        </Row><Row>
                                        <Col span={8}>
                                            <div className='divTableTh'>3</div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi1_3'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi2_3'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi3_3'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi4_3'/></div>
                                        </Col>
                                        {/*<Col span={8}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='five'/></div>
                                        </Col>*/}

                                    </Row>
                                        <Row>
                                        <Col span={8}>
                                            <div className='divTableTh'>4</div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi1_4'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi2_4'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi3_4'/></div>
                                        </Col>
                                        <Col span={4}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='phi4_4'/></div>
                                        </Col>
                                        {/*<Col span={8}>
                                            <div className='divTableTd'><Input className='divInput'
                                                                               onChange={e => handleChangeInput(e)}
                                                                               name='five'/></div>
                                        </Col>*/}
                                    </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>5</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi1_5'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi2_5'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi3_5'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi4_5'/></div>
                                            </Col>
                                            {/*<Col span={8}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>*/}
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi1_6'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi2_6'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi3_6'/></div>
                                            </Col>
                                            <Col span={4}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='phi4_6'/></div>
                                            </Col>
                                            {/*<Col span={8}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='five'/></div>
                                            </Col>*/}
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
                                                    "phi1_1": this.props.phi1_1,
                                                    "phi2_1": this.props.phi2_1,
                                                    "phi3_1": this.props.phi3_1,
                                                    "phi4_1": this.props.phi4_1,
                                                    "phi1_2": this.props.phi1_2,
                                                    "phi2_2": this.props.phi2_2,
                                                    "phi3_2": this.props.phi3_2,
                                                    "phi4_2": this.props.phi4_2,
                                                    "phi1_3": this.props.phi1_3,
                                                    "phi2_3": this.props.phi2_3,
                                                    "phi3_3": this.props.phi3_3,
                                                    "phi4_3": this.props.phi4_3,
                                                    "phi1_4": this.props.phi1_4,
                                                    "phi2_4": this.props.phi2_4,
                                                    "phi3_4": this.props.phi3_4,
                                                    "phi4_4": this.props.phi4_4,
                                                    "phi1_5": this.props.phi1_5,
                                                    "phi2_5": this.props.phi2_5,
                                                    "phi3_5": this.props.phi3_5,
                                                    "phi4_5": this.props.phi4_5,
                                                    "phi1_6": this.props.phi1_6,
                                                    "phi2_6": this.props.phi2_6,
                                                    "phi3_6": this.props.phi3_6,
                                                    "phi4_6": this.props.phi4_6,
                                                    "Instrumenttolerance": this.props.Instrumenttolerance,
                                                    "phi1": this.props.phi1,
                                                    "phi2": this.props.phi2,
                                                    "phi3": this.props.phi3,
                                                    "phi4": this.props.phi4,
                                                    "phi5": this.props.phi5,
                                                    "phi6": this.props.phi6,
                                                    "alpha": this.props.alpha,
                                                    "phiba": this.props.phiba,
                                                    "delta": this.props.delta
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
        this.handleHeight();
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
        handleChangeInput(e) {
            const {value, name} = e.target;
            const action = actionCreators.changeInputValue(name, value);
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Spectrometer));

