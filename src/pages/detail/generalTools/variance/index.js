import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;

class Variance extends Component {
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
                                        <Breadcrumb.Item>方差工具</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

                                        <h1>方差工具</h1>
                                        <hr/>
                                        <div>
                                            <p style={{margin: '0pt', orphans: 0, textAlign: 'center', widows: 0}}><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}></span><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}></span><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}> </span><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}> </span><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}>标准正态分</span><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}>布函数表</span><span style={{fontFamily: '宋体', fontSize: '14pt', fontWeight: 'bold'}}> </span></p>
                                            <div style={{textAlign: 'center'}}>
                                                <table style={{borderCollapse: 'collapse', margin: '0 auto', width: '413.9pt'}}>
                                                    <tbody><tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'right'}}></p>
                                                            <p style={{margin: '0pt', textAlign: 'justify'}}></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.00</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.01</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.02</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.03</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.04</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.05</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.06</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.07</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.08</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderTopColor: '#000000', borderTopStyle: 'solid', borderTopWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'middle', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.09</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0</span><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>.0</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5000 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5040 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5080 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5120 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5160 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5199 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5239 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5279 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5319 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5359 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.1</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5398 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5438 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5478 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5517 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5557 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5596 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5636 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5675 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5714 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5753 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.2</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5793 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5832 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5871 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5910 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5948 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5987 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6026 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6064 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6103 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6141 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.3</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6179 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6217 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6255 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6293 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6331 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6368 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6406 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6443 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6480 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6517 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.4</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6554 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6591 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6628 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6664 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6700 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6736 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6772 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6808 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6844 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6879 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.5</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6915 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6950 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6985 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7019 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7054 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7088 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7123 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7157 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7190 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7224 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.6</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7257 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7291 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7324 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7357 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7389 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7422 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7454 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7486 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7517 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7549 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7580 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7611 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7642 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7673 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7704 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7734 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7764 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7794 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7823 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7852 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7881 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7910 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7939 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7967 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.7995 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8023 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8051 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8078 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8106 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8133 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8159 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8186 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8212 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8238 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8264 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8289 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8315 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8340 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8365 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8389 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1</span><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>.0</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8413 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8438 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8461 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8485 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8508 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8531 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8554 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8577 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8599 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8621 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.1</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8643 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8665 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8686 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8708 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8729 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8749 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8770 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8790 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8810 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8830 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.2</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8849 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8869 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8888 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8907 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8925 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8944 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8962 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8980 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.8997 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9015 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.3</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9032 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9049 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9066 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9082 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9099 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9115 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9131 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9147 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9162 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9177 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.4</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9192 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9207 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9222 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9236 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9251 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9265 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9279 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9292 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9306 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9319 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.5</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9332 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9345 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9357 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9370 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9382 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9394 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9406 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9418 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9429 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9441 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.6</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9452 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9463 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9474 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9484 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9495 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9505 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9515 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9525 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9535 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9545 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.7</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9554 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9564 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9573 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9582 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9591 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9599 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9608 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9616 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9625 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9633 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.8</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9641 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9649 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9656 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9664 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9671 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9678 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9686 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9693 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9699 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9706 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.9</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9713 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9719 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9726 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9732 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9738 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9744 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9750 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9756 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9761 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9767 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2</span><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>.0</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9772 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9778 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9783 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9788 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9793 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9798 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9803 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9808 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9812 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9817 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.1</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9821 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9826 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9830 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9834 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9838 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9842 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9846 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9850 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9854 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9857 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.2</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9861 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9864 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9868 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9871 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9875 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9878 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9881 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9884 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9887 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9890 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.3</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9893 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9896 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9898 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9901 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9904 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9906 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9909 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9911 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9913 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9916 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.4</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9918 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9920 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9922 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9925 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9927 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9929 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9931 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9932 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9934 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9936 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.5</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9938 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9940 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9941 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9943 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9945 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9946 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9948 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9949 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9951 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9952 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.6</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9953 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9955 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9956 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9957 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9959 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9960 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9961 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9962 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9963 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9964 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.7</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9965 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9966 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9967 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9968 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9969 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9970 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9971 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9972 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9973 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9974 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.8</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9974 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9975 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9976 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9977 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9977 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9978 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9979 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9979 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9980 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9981 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>2.9</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9981 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9982 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9982 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9983 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9984 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9984 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9985 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9985 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9986 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9986 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3</span><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>.0</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9987 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9987 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9987 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9988 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9988 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9989 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9989 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9989 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9990 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9990 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.1</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9990 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9991 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9991 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9991 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9992 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9992 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9992 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9992 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9993 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9993 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.2</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9993 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9993 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9994 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9994 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9994 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9994 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9994 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9995 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9995 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9995 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.3</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9995 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9995 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9995 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9996 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9996 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9996 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9996 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9996 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9996 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.4</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9997 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.5</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.6</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9998 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.7</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.8</span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                        <td style={{paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>0.9999 </span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: '1pt'}}>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>3.9</span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', borderRightColor: '#000000', borderRightStyle: 'solid', borderRightWidth: '1pt', paddingLeft: '5.4pt', paddingRight: '4.9pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                        <td style={{borderBottomColor: '#000000', borderBottomStyle: 'solid', borderBottomWidth: '1.5pt', paddingLeft: '5.4pt', paddingRight: '5.4pt', verticalAlign: 'bottom', width: '43.2pt'}}>
                                                            <p style={{margin: '0pt', textAlign: 'center'}}><span style={{fontFamily: '"Times New Roman"', fontSize: '9pt'}}>1.0000 </span></p>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <p style={{margin: '0pt', orphans: 0, textAlign: 'justify', widows: 0}}><span style={{fontFamily: '"Times New Roman"', fontSize: '10.5pt'}}>&nbsp;</span></p>
                                        </div>


                                    </div>
                                </Content>
                                <Footer style={{textAlign: 'center'}}>
                                    Ant Design ©2019 Created by Junking
                                </Footer>
                            </Layout>
                        </Col>
                    </Row>

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

export default Variance;
