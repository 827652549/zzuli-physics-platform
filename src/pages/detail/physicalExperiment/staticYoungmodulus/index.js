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
                                            杨氏静态模量实验</Link></Breadcrumb.Item>
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
                                        <h3>静态拉伸法测杨氏模量数据记录</h3>
                                        <hr/>
                                        <span className='tipSpan'>1、不同荷重时光标的位置Xi</span>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>砝码质量（kg）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTh'>0</div>
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
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>增荷时（mm）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n0'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n4'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n5'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n6'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n7'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>减荷时（mm）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_0'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_4'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_5'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_6'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='n_7'/></div>
                                            </Col>
                                        </Row>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>望远镜标尺允差（Xi）</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='Instrumenttolerance'/></Col>
                                        </Row>
                                        <br/>
                                        <span className='tipSpan'>2、钢丝直径d</span>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>n</div>
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
                                                <div className='divTableTh'>d（mm）</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='d1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='d2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='d3'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='d4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='d5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='d6'/></div>
                                            </Col>

                                        </Row>
                                        <h3>测量条件</h3>
                                        <hr/>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>螺旋测微器允差</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='micrometer'/></Col>
                                            <Col span={6}><strong>金属丝原长L</strong><br/><Input name='L' onChange={e => handleChangeInput(e)}/></Col>
                                            <Col span={6}><strong>金属丝原长不确定度</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='delta_L'/></Col>
                                            <Col span={6}><strong>光杆与望镜尺距离</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='D'/></Col>
                                        </Row>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>光杆与镜尺距离不确定度</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='delta_D'/></Col>
                                            <Col span={6}><strong>游标卡尺允差</strong><br/><Input name='verniercaliper'
                                                                                             onChange={e => handleChangeInput(e)}/></Col>
                                            <Col span={6}><strong>光杆常数</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='K'/></Col>
                                            <Col span={6}><strong>光杆常数不确定度</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='delta_K'/></Col>
                                        </Row>
                                        <br/>
                                        <Link to={
                                            {
                                                /*将数据传递到连接到的页面中*/
                                                pathname: `${this.props.match.url}/showData`,
                                                state: {
                                                    n0: this.props.n0,
                                                    n1: this.props.n1,
                                                    n2: this.props.n2,
                                                    n3: this.props.n3,
                                                    n4: this.props.n4,
                                                    n5: this.props.n5,
                                                    n6: this.props.n6,
                                                    n7: this.props.n7,
                                                    n_0: this.props.n_0,
                                                    n_1: this.props.n_1,
                                                    n_2: this.props.n_2,
                                                    n_3: this.props.n_3,
                                                    n_4: this.props.n_4,
                                                    n_5: this.props.n_5,
                                                    n_6: this.props.n_6,
                                                    n_7: this.props.n_7,
                                                    d1: this.props.d1,
                                                    d2: this.props.d2,
                                                    d3: this.props.d3,
                                                    d4: this.props.d4,
                                                    d5: this.props.d5,
                                                    d6: this.props.d6,
                                                    d_avg: this.props.d_avg,
                                                    L: this.props.L,
                                                    D: this.props.D,
                                                    K: this.props.K,
                                                    delta_L: this.props.delta_L,
                                                    delta_D: this.props.delta_D,
                                                    delta_K: this.props.delta_K,
                                                    micrometer: this.props.micrometer,
                                                    verniercaliper: this.props.verniercaliper,
                                                    n0_avg: this.props.n0_avg,
                                                    n1_avg: this.props.n1_avg,
                                                    n2_avg: this.props.n2_avg,
                                                    n3_avg: this.props.n3_avg,
                                                    n4_avg: this.props.n4_avg,
                                                    n5_avg: this.props.n5_avg,
                                                    n6_avg: this.props.n6_avg,
                                                    n7_avg: this.props.n7_avg,
                                                    n4_0: this.props.n4_0,
                                                    n5_1: this.props.n5_1,
                                                    n6_2: this.props.n6_2,
                                                    n7_3: this.props.n7_3,
                                                    ln: this.props.ln,
                                                    delta_dn: this.props.delta_dn,
                                                    delta_ln: this.props.delta_ln,
                                                    E: this.props.E,
                                                    delta_E: this.props.delta_E,
                                                    relative_E: this.props.relative_E
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

        n0: state.getIn(['yangStatic', 'n0']),
        n1: state.getIn(['yangStatic', 'n1']),
        n2: state.getIn(['yangStatic', 'n2']),
        n3: state.getIn(['yangStatic', 'n3']),
        n4: state.getIn(['yangStatic', 'n4']),
        n5: state.getIn(['yangStatic', 'n5']),
        n6: state.getIn(['yangStatic', 'n6']),
        n7: state.getIn(['yangStatic', 'n7']),
        n_0: state.getIn(['yangStatic', 'n_0']),
        n_1: state.getIn(['yangStatic', 'n_1']),
        n_2: state.getIn(['yangStatic', 'n_2']),
        n_3: state.getIn(['yangStatic', 'n_3']),
        n_4: state.getIn(['yangStatic', 'n_4']),
        n_5: state.getIn(['yangStatic', 'n_5']),
        n_6: state.getIn(['yangStatic', 'n_6']),
        n_7: state.getIn(['yangStatic', 'n_7']),
        d1: state.getIn(['yangStatic', 'd1']),
        d2: state.getIn(['yangStatic', 'd2']),
        d3: state.getIn(['yangStatic', 'd3']),
        d4: state.getIn(['yangStatic', 'd4']),
        d5: state.getIn(['yangStatic', 'd5']),
        d6: state.getIn(['yangStatic', 'd6']),
        d_avg: state.getIn(['yangStatic', 'd_avg']),
        L: state.getIn(['yangStatic', 'L']),
        D: state.getIn(['yangStatic', 'D']),
        K: state.getIn(['yangStatic', 'K']),
        delta_L: state.getIn(['yangStatic', 'delta_L']),
        delta_D: state.getIn(['yangStatic', 'delta_D']),
        delta_K: state.getIn(['yangStatic', 'delta_K']),
        micrometer: state.getIn(['yangStatic', 'micrometer']),
        verniercaliper: state.getIn(['yangStatic', 'verniercaliper']),
        n0_avg: state.getIn(['yangStatic', 'n0_avg']),
        n1_avg: state.getIn(['yangStatic', 'n1_avg']),
        n2_avg: state.getIn(['yangStatic', 'n2_avg']),
        n3_avg: state.getIn(['yangStatic', 'n3_avg']),
        n4_avg: state.getIn(['yangStatic', 'n4_avg']),
        n5_avg: state.getIn(['yangStatic', 'n5_avg']),
        n6_avg: state.getIn(['yangStatic', 'n6_avg']),
        n7_avg: state.getIn(['yangStatic', 'n7_avg']),
        n4_0: state.getIn(['yangStatic', 'n4_0']),
        n5_1: state.getIn(['yangStatic', 'n5_1']),
        n6_2: state.getIn(['yangStatic', 'n6_2']),
        n7_3: state.getIn(['yangStatic', 'n7_3']),
        ln: state.getIn(['yangStatic', 'ln']),
        delta_dn: state.getIn(['yangStatic', 'delta_dn']),
        delta_ln: state.getIn(['yangStatic', 'delta_ln']),
        E: state.getIn(['yangStatic', 'E']),
        delta_E: state.getIn(['yangStatic', 'delta_E']),
        relative_E: state.getIn(['yangStatic', 'relative_E'])

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

