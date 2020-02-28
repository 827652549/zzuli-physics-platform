import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;


class callUs extends Component {
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
                                    <Breadcrumb  style={{margin: '16px 0'}}>
                                        <Breadcrumb.Item>
                                            <Link to='/'>
                                                <span className="iconfont" style={{fontSize: '18px'}}>&#xe600;&ensp;</span>
                                                首页
                                            </Link>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>联系我们</Breadcrumb.Item>
                                    </Breadcrumb>
                                    {/*184是上header和下footer的高度和，和body作差得到适应高度*/}
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>
                                        <h1>联系我们</h1>
                                        <hr/>
                                        <p style={{textIndent:'2em'}}>郑州轻工业大学物理组</p>
                                        <span id='gs1'>
                                            联系电话：XXX-XXXXXXXX
                                        </span>
                                        {/*<InlineMath>'c = \\pm\\sqrt{a^2 + b^2}'</InlineMath>*/}

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

export default callUs;
