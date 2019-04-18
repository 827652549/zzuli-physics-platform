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
                                        <Breadcrumb.Item> <Link to='/physicalExperiment/2'>
                                            杨氏静态模量实验</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item>个人实验结果展示</Breadcrumb.Item>

                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

                                        <h2>个人实验结果展示</h2>
                                        <br/>
                                        <h3>个人信息</h3>
                                        <hr/>
                                        <ol>
                                            <li>姓名：苏一恒</li>
                                            <li>学号：4343432323123213</li>
                                        </ol>
                                        <br/>
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
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n0} name='n0'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n1} name='n1'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n2} name='n2'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n3} name='n3'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n4} name='n4'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n5} name='n5'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n6} name='n6'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n7} name='n7'/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>减荷时（mm）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_0} name='n_0'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_1} name='n_1'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_2} name='n_2'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_3} name='n_3'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_4} name='n_4'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_5} name='n_5'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_6} name='n_6'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n_7} name='n_7'/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                <div className='divTableTh'>加减荷平均值（mm）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n0_avg} name='n0_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n1_avg} name='n1_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n2_avg} name='n2_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n3_avg} name='n3_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n4_avg} name='n4_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n5_avg} name='n5_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n6_avg} name='n6_avg'/>
                                                </div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.n7_avg} name='n7_avg'/>
                                                </div>
                                            </Col>
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
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d1} name='d1'/>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d2} name='d2'/>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d3} name='d3'/>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d4} name='d4'/>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d5} name='d5'/>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d6} name='d6'/>
                                                </div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>d的平均值（mm）</div>
                                            </Col>
                                            <Col span={18}>
                                                <div className='divTableTd'><Input className='divInput' value={this.props.d_avg} name='d_avg'/>
                                                </div>
                                            </Col>

                                        </Row>
                                        <h3>测量条件</h3>
                                        <hr/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>螺旋测微器允差</strong><br/><Input name='micrometer' value={this.props.micrometer} /></Col>
                                            <Col span={6}><strong>金属丝原长L</strong><br/><Input name='L' value={this.props.L}
                                            /></Col>
                                            <Col span={6}><strong>金属丝原长不确定度</strong><br/><Input value={this.props.delta_L} name='delta_L'/></Col>
                                            <Col span={6}><strong>光杆与镜尺距离</strong><br/><Input value={this.props.D} name='D'/></Col>
                                        </Row>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>光杆与镜尺距离不确定度</strong><br/><Input value={this.props.delta_D}
                                                name='delta_D'/></Col>
                                            <Col span={6}><strong>游标卡尺允差</strong><br/><Input value={this.props.verniercaliper} name='verniercaliper'
                                            /></Col>
                                            <Col span={6}><strong>光杆常数</strong><br/><Input value={this.props.K} name='K'/></Col>
                                            <Col span={6}><strong>光杆常数不确定度</strong><br/><Input value={this.props.delta_K} name='delta_K'/></Col>
                                        </Row>
                                        <br/>
                                        <h3>最终结果</h3>
                                        <hr/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>d的不确定度</strong><br/><Input value={this.props.delta_dn}
                                                name='delta_dn'/></Col>
                                            <Col span={6}><strong>l的不确定度</strong><br/><Input value={this.props.delta_ln}
                                                className='delta_ln'
                                            /></Col>
                                            <Col span={6}><strong>杨氏模量</strong><br/><Input value={this.props.E} name='E'/></Col>
                                            <Col span={6}><strong>不确定度</strong><br/><Input value={this.props.delta_E} name='delta_E'/></Col>
                                            <Col span={6}><strong>相对不确定度</strong><br/><Input value={this.props.relative_E} name='relative_E'/></Col>
                                        </Row>
                                        <br/>

                                        <br/>

                                        <Button onClick={() => this.props.handleButtonUpload(this.props)} type="primary"
                                                size='large'> 上传
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
