import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;

class zhuChaWay extends Component {
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

                                        <h1>逐差法</h1>
                                        <hr/>
                                        <p style={{textIndent:'2em'}}>逐差法也是物理实验中数据处理的一种常用方法，是对等间隔变化的被测物理量的数据进行逐项或隔项相减来获得实验结果的数据处理方法。</p>
                                        <p style={{textIndent:'2em'}}>当函数可以写成多项式形式、自变量作等间隔变化时，便可以用逐差法进行数据处理。逐差法进行数据处理有很多优点，诸如可以验证函数的表达形式，也可以充分利用所测数据，具有对数据取平均的效果，起到减小随机误差的作用。</p>
                                        <ol>
                                            <li>1.逐项逐差</li>
                                            <p style={{textIndent:'2em'}}>逐项逐差可以验证线性函数。方法是：将对应于各个自变量xi的函数值yi逐项相减，如果相应的各函数值逐项相减一次都得一常量，即说明y是x的线性函数。现把对线性函数的验证说明如下：</p>
                                            <p style={{textIndent:'2em'}}>当y = a + bx时，测得｛xi，yi｝（1，2，…，n）,令xi = x0 + i△x，有</p>
                                            <p style={{textIndent:'2em'}}>yi = a + b(x0 +i△x) (i=1,2,…, n) (2.6-3)</p>
                                            <p style={{textIndent:'2em'}}>对以上各方程逐差一次，得</p>
                                            <p style={{textIndent:'2em'}}>yi yi-1 = b△x (i=1,2,…, n) (2.6-4)</p>
                                            <p style={{textIndent:'2em'}}>以上各式中的△x是自变量每次的增量，由于x是等间隔变化的，所以b△x为一恒量。因此，当各函数值的一次逐差结果都是恒量时，则函数是线性函数。</p>

                                            <li>2.隔项逐差</li>
                                            <p style={{textIndent:'2em'}}>隔项逐差是物理实验中经常采用的数据处理方法之一，该方法一般用于等间隔线性变化的测量中。</p>
                                            <p style={{textIndent:'2em'}}>根据前面误差处理的介绍，我们知道多次测量的算术平均值是测量的最佳值，为了减小随机误差，在实验过程中测量次数应尽量多。但在等间隔线性变化测量中，如果仍用一般的求平均值的方法（将测得的每个间隔值相加，再除以间隔数），结果将发现只有第一次测量值和最后一次测量值起到作用，而中间值全部抵消了，这样就无法反映出多次测量能减小随机误差的优点。为保持多次测量的优点，采用隔项逐差的方法，仍能达到利用多次测量来减小随机误差的目的。该方法是：将测得的数据按次序等分为前后两组，将后一组的第一项与前一组的第一项相减，后一组的第二项与前一组的第二项相减……，再利用各相减项的差值求出被测量的算术平均值。</p>
                                            <p style={{textIndent:'2em'}}>除此之外，隔项逐差还可以求得线性函数的系数。现把线性函数的求系数公式推导如下：</p>
                                            <p style={{textIndent:'2em'}}>y = a + bx (2.6-5)</p>
                                            <p style={{textIndent:'2em'}}>设△x是自变量每次变化值，如有2l组数据，则</p>
                                            <p style={{textIndent:'2em'}}>yi = a + b(x0 + i△x) ( i = 1,2,…,2l ) (2.6-6)</p>
                                            <p style={{textIndent:'2em'}}>隔l项逐差有</p>
                                            <p style={{textIndent:'2em'}}> yi = yl+i yi = lb△x ( i=1,2,…,l ) (2.6-7)</p>
                                            <p style={{textIndent:'2em'}}> 一共有l个yi，可得到l个b值，取平均值有</p>
                                            <p style={{textIndent:'2em'}}>(2.6-8)</p>
                                            <p style={{textIndent:'2em'}}>将 代入式（2.6-6）中，可得到2l个a值，取平均有</p>
                                            <p style={{textIndent:'2em'}}>(2.6-9)</p>


                                            <li>3.一次逐差和二次逐差</li>
                                            <p style={{textIndent:'2em'}}>(2.6-9)</p>
                                            <p style={{textIndent:'2em'}}>对多项式实施一次逐差处理，即逐差一次，称为一次逐差。在对多项式进行一次逐差之后，再接着进行第二次逐差处理，即逐差两次，称为二次逐差，二次逐差要在一次逐差的基础上进行。一次逐差用于线性函数的验证和求值，二次逐差用于二次多项式的验证和求值。现仅对二次逐差作一简单介绍。</p>
                                            <p style={{textIndent:'2em'}}>(2.6-10)</p>
                                            <p style={{textIndent:'2em'}}>其中 为一次逐差结果， 为自变量每次变化值（为恒定值），故若发现二次逐差量为定值时，可说明y是x的二次多项式</p>

                                            <li>4.关于逐差法的说明</li>
                                            <ol>
                                                <li>（1）在验证函数表达式的形式时，要用逐项逐差，不用隔项逐差，这样可以检验每个数据点之间的变化是否符合规律。</li>
                                                <li>（2）在求某一物理量的算术平均值时，要用隔项逐差。</li>
                                                <li>（3）一次逐差用于线性函数，二次逐差用于二次多项式。</li>
                                                <li>（4）在工科物理实验教学中所用到的逐差法，大多为线性函数的求值问题，因此，对一次隔项逐差求算术平均值的方法，应当牢固掌握、熟练运用。</li>
                                                <li>（5）逐差法一般只适用于自变量x为等间隔变化而函数 y为线性函数或多项式形式的函数</li>
                                            </ol>
                                        </ol>
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

export default zhuChaWay;
