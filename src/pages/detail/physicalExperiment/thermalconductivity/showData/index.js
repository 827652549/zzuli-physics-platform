import React, {Component, Fragment} from 'react';
import {actionCreators} from "../store";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb, Input, Button, Drawer, Popover, BackTop} from "antd";
import {Style} from './style';
import axios from "axios";

const {
    Footer, Content
} = Layout;

const content1 = (
    <span>点击上传即可将数据保存到服务器</span>
);
const content2 = (
    <span>本次计算中涉及到的关键步骤</span>
);

class showData extends Component {
    state = {visible: false,clientHeight:5};
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    print = () => {
        axios({
            method:'post',
            url:'/api/thermalconductivity_pdf/get_pdf/',
            data: {
                uu_id: `${this.props.uu_id}`
            },
            responseType : 'blob',
           /* responseType: 'json'*/
        })
            .then((res) => {
                let blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
                let downloadElement = document.createElement('a');
                let href = window.URL.createObjectURL(blob); //创建下载的链接
                downloadElement.href = href;
                downloadElement.download = '热导率.pdf'; //下载后文件名
                document.body.appendChild(downloadElement);
                downloadElement.click(); //点击下载
                document.body.removeChild(downloadElement); //下载完成移除元素
                window.URL.revokeObjectURL(href); //释放掉blob对象
            }).catch(() => {
            alert('请先上传再下载报告！')
        });


    };

    render() {
        return (
            <Fragment>
                <Style id={'billDetails'}>

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
                                            热导率实验</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item>个人实验结果展示</Breadcrumb.Item>

                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}} id='print'>

                                        <h3>模拟图像生成</h3>
                                        <hr/>
                                        <br/>

                                        <Row>
                                            <Col sm={24} md={12}>
                                                <img src={this.props.img1} alt="模拟图像1" style={{backgroundSize:'cover',width:'100%'}}/>

                                            </Col>
                                            <Col sm={24} md={12}>
                                                <img src={this.props.img2} alt="模拟图像2" style={{backgroundSize:'cover',width:'100%'}}/>
                                            </Col>
                                        </Row>
                                        <h3>加热盘Ta和散热盘Tp的温度（稳态法）</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请录入您实验的数据</span>
                                        <Row>
                                            <Col xs={4} md={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>3</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>4</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>5</div>
                                            </Col>


                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(0)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(1)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(2)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(3)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(4)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(0)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(1)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(2)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>

                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(3)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(4)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>



                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>7</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>8</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>9</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>10</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(5)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(6)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(7)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(8)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(9)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(5)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(6)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(7)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(8)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(9)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={0} md={4}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(0)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(1)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(2)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(3)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(4)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(5)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(6)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(7)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(8)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(9)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={0} md={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(0)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(1)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(2)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(3)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(4)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(5)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(6)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(7)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(8)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(9)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={4} md={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>11</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>12</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>13</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>14</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>15</div>
                                            </Col>


                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(10)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='10'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(11)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='11'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(12)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='12'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(13)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='13'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(14)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='14'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(10)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='10'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(11)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='11'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(12)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='12'/></div>
                                            </Col>

                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(13)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='13'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(14)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='14'/></div>
                                            </Col>



                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>16</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>17</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>18</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>19</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>20</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(15)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='15'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(16)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='16'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(17)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='17'/></div>
                                            </Col>

                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(18)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='18'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(19)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='19'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(15)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='15'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(16)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='16'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(17)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='17'/></div>
                                            </Col>

                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(18)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='18'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(19)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='19'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={0} md={4}>
                                                <div className='divTableTh'>Ta（°C）</div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(0)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(1)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(2)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(3)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(4)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(5)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(6)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(7)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(8)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Ta.get(9)}
                                                                                   name='add_Ta' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={0} md={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(0)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='0'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(1)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='1'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(2)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='2'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(3)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='3'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(4)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='4'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(5)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='5'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(6)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='6'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(7)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='7'/></div>
                                            </Col>

                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(8)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='8'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.add_Tp.get(9)}
                                                                                   name='add_Tp' data-type='arrays'
                                                                                   data-index='9'/></div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>散热盘初始温度</strong><br/><Input
                                                value={this.props.Ta}
                                                name='Ta'/></Col>
                                            <Col span={6}><strong>加热时间间隔</strong><br/><Input
                                                value={this.props.space1}
                                                name='space1'/></Col>
                                        </Row>


                                        <br/>
                                        <h3>散热盘Tp的冷却速率的测量</h3>
                                        <hr/>
                                        <br/>
                                        <span className='tipSpan'>请录入您实验的数据</span>
                                        <Row>
                                            <Col xs={4} md={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>1</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>2</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>3</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>4</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>5</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_1}
                                                                                   name='Tp_1'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_2}
                                                                                   name='Tp_2'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_3}
                                                                                   name='Tp_3'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_4}
                                                                                   name='Tp_4'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_5}
                                                                                   name='Tp_5'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>6</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>7</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>8</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>9</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>10</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_6}
                                                                                   name='Tp_6'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_7}
                                                                                   name='Tp_7'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_8}
                                                                                   name='Tp_8'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_9}
                                                                                   name='Tp_9'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_10}
                                                                                   name='Tp_10'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={0} md={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_1}
                                                                                   name='Tp_1'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_2}
                                                                                   name='Tp_2'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_3}
                                                                                   name='Tp_3'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_4}
                                                                                   name='Tp_4'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_5}
                                                                                   name='Tp_5'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_6}
                                                                                   name='Tp_6'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_7}
                                                                                   name='Tp_7'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_8}
                                                                                   name='Tp_8'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_9}
                                                                                   name='Tp_9'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_10}
                                                                                   name='Tp_10'/></div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col  xs={4} md={4}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>11</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>12</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>13</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>14</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>15</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_11}
                                                                                   name='Tp_11'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_12}
                                                                                   name='Tp_12'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_13}
                                                                                   name='Tp_13'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_14}
                                                                                   name='Tp_14'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_15}
                                                                                   name='Tp_15'/></div>
                                            </Col>

                                            <Col  xs={4} md={0}>
                                                <div className='divTableTh'>n</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>16</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>17</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>18</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>19</div>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className='divTableTh'>20</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_16}
                                                                                   name='Tp_16'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_17}
                                                                                   name='Tp_17'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_18}
                                                                                   name='Tp_18'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_19}
                                                                                   name='Tp_19'/></div>
                                            </Col>
                                            <Col xs={4} md={0}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_20}
                                                                                   name='Tp_20'/></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={0} md={4}>
                                                <div className='divTableTh'>Tp（°C）</div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_11}
                                                                                   name='Tp_11'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_12}
                                                                                   name='Tp_12'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_13}
                                                                                   name='Tp_13'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_14}
                                                                                   name='Tp_14'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_15}
                                                                                   name='Tp_15'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_16}
                                                                                   name='Tp_16'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_17}
                                                                                   name='Tp_17'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_18}
                                                                                   name='Tp_18'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_19}
                                                                                   name='Tp_19'/></div>
                                            </Col>
                                            <Col xs={0} md={2}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.Tp_20}
                                                                                   name='Tp_20'/></div>
                                            </Col>

                                        </Row>
                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>散热时间间隔</strong><br/><Input
                                                value={this.props.space2}
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
                                                                                   value={this.props.D1}
                                                                                   name='D1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.D2}
                                                                                   name='D2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.D3}
                                                                                   name='D3'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.D4}
                                                                                   name='D4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.D5}
                                                                                   name='D5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.D6}
                                                                                   name='D6'/></div>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col span={6}>
                                                <div className='divTableTh'>厚度</div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.hb_1}
                                                                                   name='hb_1'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.hb_2}
                                                                                   name='hb_2'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.hb_3}
                                                                                   name='hb_3'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.hb_4}
                                                                                   name='hb_4'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.hb_5}
                                                                                   name='hb_5'/></div>
                                            </Col>
                                            <Col span={3}>
                                                <div className='divTableTd'><Input className='divInput'
                                                                                   value={this.props.hb_6}
                                                                                   name='hb_6'/></div>
                                            </Col>


                                        </Row>

                                        <br/>
                                        <Row gutter={24}>
                                            <Col span={6}><strong>橡胶盘质量</strong><br/><Input
                                                value={this.props.m}
                                                name='m'/></Col>
                                            <Col span={6}><strong>橡胶盘比热容</strong><br/><Input
                                                value={this.props.c}
                                                name='c'/></Col>
                                        </Row>
                                        <br/>
                                        <div id='printHide'>
                                            <Popover content={content1}>
                                                <Button onClick={() => this.props.handleButtonUpload(this.props)}
                                                        type="primary" size='large'>上传</Button>
                                            </Popover>
                                            <Button type="primary" size='large' onClick={this.print}
                                                    style={{marginLeft: '10px'}}>打印</Button>

                                            <Popover content={content2}>
                                                <Button type="primary" size='large' onClick={this.showDrawer}
                                                        style={{marginLeft: '10px'}}>拟合函数</Button>
                                            </Popover>
                                        </div>
                                        <Drawer
                                            title="关键计算过程"
                                            placement="bottom"
                                            closable={true}
                                            onClose={this.onClose}
                                            visible={this.state.visible}
                                        >
                                            <p style={{marginBottom: '20px'}}>
                                                原函数：<span style={{
                                                backgroundColor: '#e7eaed',
                                                padding: '8px 20px',
                                                borderRadius: '10px'
                                            }} dangerouslySetInnerHTML={{__html: this.props.p1}}></span>
                                            </p>
                                            <p style={{marginBottom: '20px'}}>
                                                导函数：<span style={{
                                                backgroundColor: '#e7eaed',
                                                padding: '8px 20px',
                                                borderRadius: '10px'
                                            }} dangerouslySetInnerHTML={{__html: this.props.p2}}></span>
                                            </p>

                                        </Drawer>

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
        /*
                alert("已经将程佩发来的数据保存到newtonRing的store中，下一步，根据他返回的编写就行！")
        */
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
