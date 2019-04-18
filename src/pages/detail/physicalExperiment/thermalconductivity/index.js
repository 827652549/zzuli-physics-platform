import React, {Component, Fragment} from 'react';
import {withRouter, Link,} from 'react-router-dom';
import {Style} from './style';
import {Layout, Row, Col, Breadcrumb, BackTop, Input, Button, Drawer} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";

const {
    Footer, Content
} = Layout;

class thermalconductivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //利用state改变组件就会重新渲染的特性
            updateUI: 0,
            visible: false,
            visibleDrawer: false,
            clientHeight:5

        }
    }

    showDrawer = () => {
        this.setState({
            visibleDrawer: true,
        });
    };

    onClose = () => {
        this.setState({
            visibleDrawer: false,
        });
    };


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
                                        <Breadcrumb.Item> <Link to='/physicalExperiment/5'>
                                            热导率实验</Link>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>
                                        <h3>加热盘Ta和散热盘Tp的温度（稳态法）
                                            <span onClick={this.showDrawer} className="iconfont playVideo"
                                                  style={{float: 'right'}}>&#xe643;&ensp;播放视频</span></h3>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='9'/></div>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='10'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='11'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='12'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='13'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='14'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='15'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='16'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='17'/></div>
                                            </Col>

                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='18'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='19'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='10'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='11'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='12'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='13'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='14'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='15'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='16'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='17'/></div>
                                            </Col>

                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='18'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='19'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>散热盘初始温度</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='Ta'/></Col>
                                            <Col span={6}><strong>加热时间间隔</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='space1'/></Col>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_1'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_2'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_3'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_4'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_5'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_6'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_7'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_8'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_9'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_10'/></div>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_11'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_12'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_13'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_14'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_15'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_16'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_17'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_18'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_19'/></div>
                                            </Col>
                                            <Col span={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='Tp_20'/></div>
                                            </Col>

                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>散热时间间隔</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='space2'/></Col>
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
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='D1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='D2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='D3'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='D4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='D5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='D6'/></div>
                                            </Col>


                                        </Row>

                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>厚度</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='hb_1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='hb_2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='hb_3'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='hb_4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='hb_5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   onChange={e => handleChangeInput(e)}
                                                                                   name='hb_6'/></div>
                                            </Col>


                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>橡胶盘质量</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='m'/></Col>
                                            <Col span={6}><strong>橡胶盘比热容</strong><br/><Input
                                                onChange={e => handleChangeInput(e)}
                                                name='c'/></Col>
                                        </Row>
                                        <br/>
                                        <Link to={
                                            {
                                                /*将数据传递到连接到的页面中*/
                                                pathname: `${this.props.match.url}/showData`,
                                                state: {
                                                    user_id: this.props.user_id,
                                                    user_name: this.props.user_name,
                                                    user_num: this.props.user_num,
                                                    add_Ta: this.props.add_Ta,
                                                    add_Tp: this.props.add_Tp,
                                                    uu_id: this.props.uu_id,
                                                    Tp_1: this.props.Tp_1,
                                                    Tp_2: this.props.Tp_2,
                                                    Tp_3: this.props.Tp_3,
                                                    Tp_4: this.props.Tp_4,
                                                    Tp_5: this.props.Tp_5,
                                                    Tp_6: this.props.Tp_6,
                                                    Tp_7: this.props.Tp_7,
                                                    Tp_8: this.props.Tp_8,
                                                    Tp_9: this.props.Tp_9,
                                                    Tp_10: this.props.Tp_10,
                                                    Tp_11: this.props.Tp_11,
                                                    Tp_12: this.props.Tp_12,
                                                    Tp_13: this.props.Tp_13,
                                                    Tp_14: this.props.Tp_14,
                                                    Tp_15: this.props.Tp_15,
                                                    Tp_16: this.props.Tp_16,
                                                    Tp_17: this.props.Tp_17,
                                                    Tp_18: this.props.Tp_18,
                                                    Tp_19: this.props.Tp_19,
                                                    Tp_20: this.props.Tp_20,
                                                    hb_1: this.props.hb_1,
                                                    hb_2: this.props.hb_2,
                                                    hb_3: this.props.hb_3,
                                                    hb_4: this.props.hb_4,
                                                    hb_5: this.props.hb_5,
                                                    hb_6: this.props.hb_6,
                                                    Ta: this.props.Ta,
                                                    Tp: this.props.Tp,
                                                    hp: this.props.hp,
                                                    D1: this.props.D1,
                                                    D2: this.props.D2,
                                                    D3: this.props.D3,
                                                    D4: this.props.D4,
                                                    D5: this.props.D5,
                                                    D6: this.props.D6,
                                                    m: this.props.m,
                                                    c: this.props.c,
                                                    space1: this.props.space1,
                                                    space2: this.props.space2,
                                                    p1: this.props.p1,
                                                    p2: this.props.p2,
                                                    t: this.props.t,
                                                    img1: this.props.img1,
                                                    img2: this.props.img2,
                                                    img10: this.props.img10,
                                                    img20: this.props.img20,
                                                    k: this.props.k


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
                    <Drawer
                        title="热导率视频播放"
                        placement="top"
                        closable={true}
                        height='90%'
                        onClose={this.onClose}
                        visible={this.state.visibleDrawer}
                        style={{textAlign: 'center'}}
                        destroyOnClose={true}
                    >
                        <video style={{margin: '0 auto'}} height='70%' width='70%' src="/test.mp4"
                               controls="controls"></video>
                    </Drawer>
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
        user_id: state.getIn(['thermalconductivity', 'user_id']),
        user_name: state.getIn(['thermalconductivity', 'user_name']),
        user_num: state.getIn(['thermalconductivity', 'user_num']),
        add_Ta: state.getIn(['thermalconductivity', 'add_Ta']),
        add_Tp: state.getIn(['thermalconductivity', 'add_Tp']),
        uu_id: state.getIn(['thermalconductivity', 'uu_id']),
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
        handleChangeInput(e) {
            //当判断到时数组时
            if (e.target.getAttribute('data-type') == 'arrays') {
                const index = e.target.getAttribute('data-index');//下表号
                const {name, value} = e.target;//数组名,值
                const action = actionCreators.changeInputValueArrays(name, index, value);
                dispatch(action);


            } else {//当判断不是数组时
                const {value, name} = e.target;
                const action = actionCreators.changeInputValue(name, value);
                dispatch(action);

            }


        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(thermalconductivity));
