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
    '最小二乘法',
    // '误差分析法'
    'XXXXXX'
];

const data2 = [
    '方差工具',
    // '标准差工具',
    // '方差工具',
    // '进制转换工具',
    // '光学相关查询工具',
    // '误差分析'
    'XXXXXX',
    'XXXXXX',
    'XXXXXX',
    'XXXXXX',
    'XXXXXX'
];

const data3 = [
    '牛顿环法测透镜曲率半径',
    '迈克尔逊干涉仪',
    '杨氏静态模量实验',
    '分光计的调整和使用',
    '衍射光栅实验',
    '热导率的测量'

];
const data4 = [
    // '塞曼效应',
    // '光电效应法测定普朗克常量',
    // '光强分布的测量',
    // '电位差计的使用',
    // '液体黏性系数的测量',
    // '铁磁材料磁滞回线的测绘',
    'XXXXXX',
    'XXXXXX',
    'XXXXXX',
    'XXXXXX',
    'XXXXXX',
    'XXXXXX'
];


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
                                              style={{fontSize: '18px'}}>&#xe600;&ensp;欢迎来到物理实验数据处理平台</span>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{background: '#fff', paddingTop: 15,paddingLeft:10,paddingRight:10,paddingBottom:50, minHeight: 550}}>
                                    <Carousel autoplay>
                                        <div><h1>物理实验就是人类追寻科学的印迹</h1></div>
                                        <div><h1>人们在一次一次的科学试验中不断总结方法</h1></div>
                                        <div><h1>在大学物理实验中学习前人智慧</h1></div>
                                        <div><h1>从纷繁复杂的实验现象和数据中发现简单的规律</h1></div>
                                    </Carousel>
                                    <hr/>
                                    <Row>
                                        <Col xs={24} sm={12} xl={6}>
                                            <List
                                                className='list'
                                                header={<h2>数据处理方法</h2>}
                                                bordered
                                                dataSource={data1}
                                                renderItem={(item,index) => (<List.Item className='list'><Link  id='link' to={'/dataHandle/'+index}><span>{item}</span></Link></List.Item>)}
                                            />
                                        </Col>
                                        <Col xs={24} sm={12} xl={6}>
                                            <List
                                                className='list'
                                                header={<h2>通用工具</h2>}
                                                bordered
                                                dataSource={data2}
                                                renderItem={(item,index)=> (<List.Item className='list'><Link  id='link' to={'/generalTools/'+index}><span>{item}</span></Link></List.Item>)}
                                            />
                                        </Col>
                                        <Col xs={24} sm={12} xl={6}>
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
                                        <Col xs={24} sm={12} xl={6}>
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

