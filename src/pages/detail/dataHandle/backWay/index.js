import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;

class backWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //利用state改变组件就会重新渲染的特性
            clientHeight: 5
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
                                    <Breadcrumb.Item>回归法</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

                                    <h1>回归法</h1>
                                    <hr/>
                                    <p style={{textIndent: '2em'}}>

                                            <div className="anchor-list ">
                                                <span name={1} className="lemma-anchor para-title"/>
                                                <span name="sub1338387_1" className="lemma-anchor "/>
                                                <span name="概念" className="lemma-anchor "/>
                                            </div>
                                            <div className="para-title level-2" label-module="para-title">
                                                <h2 className="title-text"><span className="title-prefix">回归分析预测法</span>概念
                                                </h2>

                                            </div>
                                            <div className="para" label-module="para">回归分析预测法(Regression Analysis
                                                Prediction Method)
                                            </div>
                                            <div className="para" label-module="para">回归分析预测法，是在分析市场现象<span target="_blank"
                                                                                                         href="/item/%E8%87%AA%E5%8F%98%E9%87%8F">自变量</span>和<span
                                                target="_blank" href="/item/%E5%9B%A0%E5%8F%98%E9%87%8F">因变量</span>之间相关关系的基础上，建立变量之间的<span
                                                target="_blank"
                                                href="/item/%E5%9B%9E%E5%BD%92%E6%96%B9%E7%A8%8B/11042494"
                                                data-lemmaid={11042494}>回归方程</span>，并将回归方程作为<span target="_blank"
                                                                                            href="/item/%E9%A2%84%E6%B5%8B%E6%A8%A1%E5%9E%8B/2488641"
                                                                                            data-lemmaid={2488641}>预测模型</span>，根据自变量在预测期的数量变化来预测因变量关系大多表现为相关关系，因此，回归分析预测法是一种重要的<span
                                                target="_blank"
                                                href="/item/%E5%B8%82%E5%9C%BA%E9%A2%84%E6%B5%8B">市场预测</span>方法，当我们在对市场现象未来发展状况和水平进行预测时，如果能将影响市场预测对象的主要因素找到，并且能够取得其数量资料，就可以采用回归分析预测法进行预测。它是一种具体的、行之有效的、实用价值很高的常用市场预测方法，常用于中短期预测。
                                            </div>
                                            <div className="anchor-list ">
                                                <span name={2} className="lemma-anchor para-title"/>
                                                <span name="sub1338387_2" className="lemma-anchor "/>
                                                <span name="分类" className="lemma-anchor "/>
                                            </div>
                                            <div className="para-title level-2" label-module="para-title">
                                                <h2 className="title-text"><span className="title-prefix">回归分析预测法</span>分类
                                                </h2>

                                            </div>
                                            <div className="para" label-module="para">回归分析预测法有多种类型。依据相关关系中<span
                                                target="_blank" href="/item/%E8%87%AA%E5%8F%98%E9%87%8F">自变量</span>的个数不同分类，可分为一元回归分析预测法和多元回归分析预测法。在一元回归分析预测法中，自变量只有一个，而在<span
                                                target="_blank"
                                                href="/item/%E5%A4%9A%E5%85%83%E5%9B%9E%E5%BD%92/1796460"
                                                data-lemmaid={1796460}>多元回归</span>分析预测法中，自变量有两个以上。依据自变量和<span target="_blank"
                                                                                                        href="/item/%E5%9B%A0%E5%8F%98%E9%87%8F">因变量</span>之间的相关关系不同，可分为<span
                                                target="_blank"
                                                href="/item/%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/8190345"
                                                data-lemmaid={8190345}>线性回归</span>预测和非线性回归预测。
                                            </div>
                                            <div className="anchor-list ">
                                                <span name={3} className="lemma-anchor para-title"/>
                                                <span name="sub1338387_3" className="lemma-anchor "/>
                                                <span name="步骤" className="lemma-anchor "/>
                                            </div>
                                            <div className="para-title level-2" label-module="para-title">
                                                <h2 className="title-text"><span className="title-prefix">回归分析预测法</span>步骤
                                                </h2>

                                            </div>
                                            <div className="para" label-module="para"><b>1．根据预测目标，确定<span target="_blank"
                                                                                                       href="/item/%E8%87%AA%E5%8F%98%E9%87%8F">自变量</span>和<span
                                                target="_blank" href="/item/%E5%9B%A0%E5%8F%98%E9%87%8F">因变量</span></b>
                                            </div>
                                            <div className="para"
                                                 label-module="para">明确预测的具体目标，也就确定了因变量。如预测具体目标是下一年度的销售量，那么销售量Y就是因变量。通过市场调查和查阅资料，寻找与预测目标的相关影响因素，即自变量，并从中选出主要的影响因素。
                                            </div>
                                            <div className="para" label-module="para"><b>2．建立回归<span target="_blank"
                                                                                                  href="/item/%E9%A2%84%E6%B5%8B%E6%A8%A1%E5%9E%8B/2488641"
                                                                                                  data-lemmaid={2488641}>预测模型</span></b>
                                            </div>
                                            <div className="para"
                                                 label-module="para">依据自变量和因变量的历史统计资料进行计算，在此基础上建立回归分析方程，即回归分析预测模型。
                                            </div>
                                            <div className="para" label-module="para"><b>3．进行<span target="_blank"
                                                                                                href="/item/%E7%9B%B8%E5%85%B3%E5%88%86%E6%9E%90/5905339"
                                                                                                data-lemmaid={5905339}>相关分析</span></b>
                                            </div>
                                            <div className="para"
                                                 label-module="para">回归分析是对具有因果关系的影响因素（自变量）和预测对象（因变量）所进行的<span
                                                target="_blank" href="/item/%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1/408183"
                                                data-lemmaid={408183}>数理统计</span>分析处理。只有当变量与<span target="_blank"
                                                                                            href="/item/%E5%9B%A0%E5%8F%98%E9%87%8F">因变量</span>确实存在某种关系时，建立的<span
                                                target="_blank"
                                                href="/item/%E5%9B%9E%E5%BD%92%E6%96%B9%E7%A8%8B/11042494"
                                                data-lemmaid={11042494}>回归方程</span>才有意义。因此，作为<span target="_blank"
                                                                                             href="/item/%E8%87%AA%E5%8F%98%E9%87%8F">自变量</span>的因素与作为因变量的预测对象是否有关，相关程度如何，以及判断这种相关程度的把握性多大，就成为进行回归分析必须要解决的问题。进行相关分析，一般要求出相关关系，以<span
                                                target="_blank"
                                                href="/item/%E7%9B%B8%E5%85%B3%E7%B3%BB%E6%95%B0/3109424"
                                                data-lemmaid={3109424}>相关系数</span>的大小来判断自变量和因变量的相关的程度。
                                            </div>
                                            <div className="para" label-module="para"><b>4．检验回归<span target="_blank"
                                                                                                  href="/item/%E9%A2%84%E6%B5%8B%E6%A8%A1%E5%9E%8B/2488641"
                                                                                                  data-lemmaid={2488641}>预测模型</span>，计算<span
                                                target="_blank"
                                                href="/item/%E9%A2%84%E6%B5%8B%E8%AF%AF%E5%B7%AE/7023926"
                                                data-lemmaid={7023926}>预测误差</span></b></div>
                                            <div className="para"
                                                 label-module="para">回归预测模型是否可用于实际预测，取决于对回归预测模型的检验和对预测误差的计算。回归方程只有通过各种检验，且预测误差较小，才能将回归方程作为预测模型进行预测。
                                            </div>
                                            <div className="para" label-module="para"><b>5．计算并确定预测值</b></div>
                                            <div className="para"
                                                 label-module="para">利用回归预测模型计算预测值，并对预测值进行综合分析，确定最后的预测值。
                                            </div>
                                            <div className="para" label-module="para">应用<span target="_blank"
                                                                                           href="/item/%E5%9B%9E%E5%BD%92%E9%A2%84%E6%B5%8B%E6%B3%95">回归预测法</span>时应首先确定变量之间是否存在相关关系。如果变量之间不存在相关关系，对这些变量应用回归预测法就会得出错误的结果。
                                            </div>
                                            <div className="para" label-module="para">正确应用回归分析预测时应注意：</div>
                                            <div className="para" label-module="para">①用<span target="_blank"
                                                                                           href="/item/%E5%AE%9A%E6%80%A7%E5%88%86%E6%9E%90/3469987"
                                                                                           data-lemmaid={3469987}>定性分析</span>判断现象之间的依存关系；
                                            </div>
                                            <div className="para" label-module="para">②避免回归预测的任意外推；</div>
                                            <div className="para" label-module="para">③应用合适的数据资料。</div>
                                            <div id="open-tag">

                                                <div className="open-tag-collapse" id="open-tag-collapse"
                                                     style={{display: 'none'}}/>
                                            </div>
                                            <div className="clear"/>
                                    </p>

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

    componentDidMount() {
        this.handleHeight();
        window.addEventListener('resize', this.handleHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleHeight);
    }

    handleHeight = () => {
        const clientHeight = document.documentElement.clientHeight - 184;
        this.setState({
            clientHeight
        });
    }


}

export default backWay;
