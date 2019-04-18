import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;

class listWay extends Component {
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
                                        <Breadcrumb.Item>列表法</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

                                        <h1>列表法</h1>
                                        <hr/>
                                        <p style={{textIndent:'2em'}}>正确、完整地记录和整理原始数据是获得实验成功的基本保证。为使测量数据一目了然，避免混乱和丢失，实验中记录和处理数据时，常常将数据列成表格。 用栏目清楚、行列分明、简洁醒目、结构合理的表格记录和整理数据是进行实验测量的基本要求，也是实验者必备的良好习惯和科学素养，应不断训练、逐步培养。</p>
                                        <ol>
                                            <li><strong>1. 列表的作用</strong></li>
                                            <p style={{textIndent:'2em'}}>及时发现问题和分析问题，而且有助于找出有关物理量之间的规律性联系，求出经验公式。 数据列表还可以提高处理数据的效率，减少和避免差错。根据需要，也可以把某些中间计算项列出来，以便随时从对比中发现运算是否有错，随时进行有效数字的简化处理，避免不必要的重复计算。数据列表有利于计算、分析误差和对数据的随时查对。</p>
                                            <li><strong>2. 列表的基本要求</strong></li>
                                            <ol>
                                                <li>（1）表的上方应有表头，写明所列表格的名称。</li>
                                                <li>（2）标题栏目要简单明了，便于看出有关物理量之间的关系。</li>
                                                <li>（3）各标题栏目必须标明物理量的名称和单位，单位和数量级写在标题栏中，一般不要重复地记在各个数字后面。

                                                </li>
                                                <li>（4）表格中的栏目顺序要注意数据间的联系和计算程序，做到条理清晰、项目齐全。

                                                </li>
                                                <li>（5）列入表中的数据应以原始测量数据为主，处理过程中一些重要的中间结果和最后结果也可列入表中，以方便数据处理和查阅核对。

                                                </li>
                                                <li>（6）提供与表格内容有关的说明和参数，包括主要测量仪器的规格（型号、量程和仪器误差等）、有关的环境参数（温度、湿度等）以及其它必要的说明。当然，对表格提供的说明和参数，应当根据简洁清晰、重点突出的原则，结合具体的实验，灵活掌握。 总而言之，列表的过程就是整理实验思路的过程，只有在清楚了解并通盘考虑实验的目的、原理、方法、步骤以及误差处理要求的基础上，才能列出科学、合理、实用、方便的数据处理表格。

                                                </li>
                                            </ol>
                                        </ol>
                                        <br/>
                                        <p>【例1】用螺旋测微计测量钢球直径D的数据记录和列表处理如表1</p>
                                        <div style={{textAlign:'center'}}>
                                            <div> 表1 测钢球直径D</div>

                                        <table style={{margin:'auto',border:'1px solid #555'}} cellpadding='2px' cellSpacing='10px'>
                                            <tbody>
                                            <tr>
                                                <th align="center">n</th>
                                                <th align="center">读数（mm）</th>
                                                <th align="center">直径D<sub>i</sub>（mm）</th>
                                                <th>D<sub>i</sub>-<span style={{textDecoration:'overline'}}>D</span>(mm)
                                                </th>
                                                <th align="center">(D<sub>i</sub>-<span
                                                    style={{textDecoration:'overline'}}>D</span>)<sup>2</sup>(×10<sup>-8</sup>mm<sup>2</sup>)
                                                </th>
                                            </tr>
                                            <tr>
                                                <td align="center">1</td>
                                                <td align="center">6.003</td>
                                                <td align="center">5.998</td>
                                                <td align="center">0.0013</td>
                                                <td align="center">169</td>
                                            </tr>
                                            <tr>
                                                <td align="center">2</td>
                                                <td align="center">6.002</td>
                                                <td align="center">5.997</td>
                                                <td align="center">0.0003</td>
                                                <td align="center">9</td>
                                            </tr>
                                            <tr>
                                                <td align="center">3</td>
                                                <td align="center">6.001</td>
                                                <td align="center">5.996</td>
                                                <td align="center">-0.0007</td>
                                                <td align="center">49</td>
                                            </tr>
                                            <tr>
                                                <td align="center">4</td>
                                                <td align="center">6.002</td>
                                                <td align="center">5.997</td>
                                                <td align="center">0.0003</td>
                                                <td align="center">9</td>
                                            </tr>
                                            <tr>
                                                <td align="center">5</td>
                                                <td align="center">6.001</td>
                                                <td align="center">5.996</td>
                                                <td align="center">-0.0007</td>
                                                <td align="center">49</td>
                                            </tr>
                                            <tr>
                                                <td align="center">6</td>
                                                <td align="center">6.001</td>
                                                <td align="center">5.996</td>
                                                <td align="center">-0.0007</td>
                                                <td align="center">49</td>
                                            </tr>
                                            <tr>
                                                <td align="center">7</td>
                                                <td align="center">6.002</td>
                                                <td align="center">5.997</td>
                                                <td align="center">0.0003</td>
                                                <td align="center">9</td>
                                            </tr>
                                            <tr>
                                                <td align="center">8</td>
                                                <td align="center">6.004</td>
                                                <td align="center">5.999</td>
                                                <td align="center">0.0023</td>
                                                <td align="center">529</td>
                                            </tr>
                                            <tr>
                                                <td align="center">9</td>
                                                <td align="center">6.000</td>
                                                <td align="center">5.995</td>
                                                <td align="center">-0.0017</td>
                                                <td align="center">289</td>
                                            </tr>
                                            <tr>
                                                <td align="center">10</td>
                                                <td align="center">6.001</td>
                                                <td align="center">5.996</td>
                                                <td align="center">-0.0007</td>
                                                <td align="center">49</td>
                                            </tr>

                                            </tbody>
                                        </table>

                                        </div>
                                        <div>
                                            <p>注：使用仪器：0～25 mm 1级螺旋测微计，m=0.004mm。零位读数：+0.005mm。</p>

                                            由数据表格1可知D = 5.9967(mm)<br/>

                                            测量结果 D = (5.997±0.003)mm(P = 0.683)<br/>
                                            ED = 0.039%<br/>
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

export default listWay;
