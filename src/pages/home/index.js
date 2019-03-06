import React, {Component, Fragment} from 'react';
import {Layout, Row, Col, Carousel, List, Breadcrumb, BackTop, } from 'antd';
import {Link} from "react-router-dom";
import {Style} from './style';


const {
    Footer, Content
} = Layout;

const data1 = [
    '列表法',
    '作图法',
    '逐差法',
    '回归法',
    '最小二乘法'
];

const data2 = [

];

const data3 = [
    '牛顿环法测透镜曲率半径',
    '迈克尔逊干涉仪',
    '杨氏静态模量实验',
    'Australian walks 100km after outback crash.',

];
const data4 = [];


class Home extends Component {
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
                                        <span className="iconfont"
                                              style={{fontSize: '18px'}}>&#xe600;&ensp;欢迎来到物理实验模拟平台</span>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                                    <Carousel autoplay>
                                        <div><h1>认识来自实践，科学进步依赖于科学实验中的重大发现，物理实验就是人类追寻科学的印迹。</h1></div>
                                        <div><h1>人们在一次一次的科学试验中不断总结方法，提炼原理，又用已知原理去指导实验方法，为了简便快捷又发明了各种测量工具和仪器。</h1></div>
                                        <div><h1>在大学物理实验中，我们重复经典实验，从中学习前人智慧，体验发现过程，进行基本的实验训练，提高自己的科学实验技能和素养。</h1></div>
                                        <div><h1>使用良好的数据处理方法，更易于从纷繁复杂的实验现象和数据中发现简单的规律。</h1></div>
                                    </Carousel>
                                    <hr/>
                                    <Row>
                                        <Col span={6}>
                                            <List
                                                className='list'
                                                header={<h2>数据处理方法</h2>}
                                                bordered
                                                dataSource={data1}
                                                renderItem={(item,index) => (<List.Item className='list'><Link  id='link' to={'/dataHandle/'+index}><span>{item}</span></Link></List.Item>)}
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <List
                                                className='list'
                                                header={<h2>通用工具</h2>}
                                                bordered
                                                dataSource={data2}
                                                renderItem={item => (<List.Item className='list'><Link  id='link' to={'/detail/1'}><span>{item}</span></Link></List.Item>)}
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <List
                                                className='list'
                                                header={<h2>实验项目A</h2>}
                                                bordered
                                                dataSource={data3}
                                                renderItem={(item,index) => (<List.Item className='list'>
                                                    <Link  id='link' to={'/physicalExperiment/'+index}><span>{item}</span></Link>
                                                </List.Item>)}
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <List
                                                className='list'
                                                header={<h2>实验项目B</h2>}
                                                bordered
                                                dataSource={data4}
                                                renderItem={item => (<List.Item className='list'><Link  id='link' to={'/detail/1'}><span>{item}</span></Link></List.Item>)}
                                            />
                                        </Col>
                                    </Row>

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

export default Home;

