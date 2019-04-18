import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;

class drawPicture extends Component {
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
                                        <Breadcrumb.Item>作图法</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div style={{background: '#fff', padding: 24, minHeight: this.state.clientHeight}}>

                                        <h1>作图法</h1>
                                        <hr/>
                                        <p style={{textIndent:'2em'}}>作图法是处理实验数据，研究物理量之变化规律，找出对应的函数关系，求解经验公式的一种常用的重要方法。它能把一系列数据之间的关系或其他变化情况用图线直观形象地表示出来。</p>
                                        <ol>
                                            <li>1. 作图的作用</li>
                                            <ol>
                                                <li>（1）能简便地从图线中求出实验需要的某些结果，也可以从图线上求函数值（相加、相减）。</li>
                                                <li>（2）可以作出仪器的校准曲线。</li>
                                                <li>（3）若图线是依据许多测量数据点（实验点）描出的平滑曲线，则作图法有多次测量取其平均效果的作用。</li>
                                                <li>（4）在图线上，可以读出没有进行观测的对应点（内插法），在一定条件下，也可以从图线的延伸部分读到测量范围以外的对应点（外推法）。</li>
                                                <li>（5）图线可帮助发现实验中个别的测量错误，有时也可利用图线对误差进行分析。</li>
                                                <li>（6）作图可以求出直线的斜率和截距。</li>
                                            </ol>
                                            <li>2.作图的基本要求</li>
                                            <ol>
                                                <li>（1）选用合适坐标纸</li>
                                                <p style={{textIndent:'2em'}}>根据所测的物理量决定作图的参量以后，应当根据情况选用合适的坐标纸。直角坐标纸较为常用，此外还有双对数坐标纸、单对数坐标纸、极坐标纸和倒数坐标纸。</p>
                                                <li>（2）坐标纸的大小和坐标轴的比例及分度</li>
                                                <p style={{textIndent:'2em'}}>“合理选轴，正确分度”是一张图作得好坏成败的关键。</p>
                                                <p style={{textIndent:'2em'}}>坐标纸的大小和坐标轴的比例及分度应尽可能不改变测量数据的精度，并根据所测数据的有效数字和结果确定。原则上，数据中的可靠数字在图中应为可靠的，数据中的可疑数字在图中应是估计的。图纸中一小格要与数据中可靠数字的最后一位相对应，必要时也可适当放大些，使图上实际可能读出的有效数与测量的读数相当。当然，也不要过多放大，以致在本来的测量误差范围内可以连成光滑曲线的看起来偏离太大。总之，应以不损失实验数据的有效数字并能包括所有实验点作为选取坐标纸大小的最低限度。</p>
                                                <p style={{textIndent:'2em'}}>x轴与y轴的比例和坐标的起点要选取得当，使图线比较对称地充满整个图纸，不要缩在一边或一角。为了使图线在坐标纸上的布局合理和充分利用坐标纸，坐标轴的起点不一定取为零值，两轴的比例也可以不同。</p>
                                                <p style={{textIndent:'2em'}}>选定坐标轴比例及分度时，以不用计算就能直接读出图线上每一点的坐标为宜。通常使坐标纸的一小分格代表被测物理量的最后一位准确数字的1个、2个、5个单位，不要使一小分格代表3个、6个、7个、9个单位，这样不仅方便描点和读数，而且还不容易出错。</p>
                                                <li>（3）画坐标轴</li>
                                                <p style={{textIndent:'2em'}}>习惯上常常将自变量作横坐标轴，因变量作纵坐标轴，在选定坐标纸的左下方画两条粗细适当的线表示纵轴和横轴，并在方向箭头的近旁标明坐标轴所代表的物理量（可以用公认的符号代表物理量）和单位（单位放在物理量右边的圆括号内），在轴上每隔一定间距标明该物理量的数值。</p>
                                                <li>（4）描点</li>
                                                <p style={{textIndent:'2em'}}>根据测量数据，用符号“+”标出各点的坐标。用直尺和尖铅笔清楚地画出“+”，使与实验数据对应的坐标落在“+”的中心。一张图上要画几条曲线时，不同图线要用不同的描点符号加以区别。除“+”之外，还可使用“×”、“△”、“□”等符号描点标注，并使与实验数据对应的坐标落在所使用的符号中心。不使用“．”作为描点符号，一是由于测量数据都有不确定性，应用有一定区域的图形表示，二是以防被连线掩盖而看不清楚。</p>
                                                <li>（5）连线</li>
                                                <p style={{textIndent:'2em'}}>用直尺、曲线板等画图工具，根据不同情况，把数据点连成光滑曲线、直线或折线。一般情况下，物理量之间的关系在某一范围内是连续的，可根据图上各点的分布和趋势作出一条光滑连续曲线；当确认两个物理量之间的关系是线性或者所有实验点都在某一直线附近时，可将图线画成一条直线；只有在作校准曲线或者测量数据不够充分，图上点数过少，自变量和因变量的对应关系难以确定时，才采用折线连线。当连成直线或光滑曲线时，图线不一定通过所有的实验数据点，实验数据点应在图线的两侧有较均匀的分布。在连线时，个别偏离过大的点应当舍去或重新测量核对。若图线需延伸到测量范围之外，可按其趋势用虚线表示。</p>
                                                <p style={{textIndent:'2em'}}>这里介绍一种检查图线连接好坏的“斜视法”：将眼睛靠近图纸，视线顺曲线看去，若发现某些连接处斜度有明显突变，这样的连接就欠佳。</p>
                                                <li>（6）图注</li>
                                                <p>在图纸的明显位置写出图线的名称、测试条件、实验者姓名和日期。</p>
                                            </ol>
                                            <li>3.曲线改直</li>
                                            <ol>在物理实验中，物理量之间的函数关系并非都是线性的，对有些较为复杂的非线性函数关系，可以经过适当的变量置换变成线性关系，即把曲线变成直线，这种作图方法称为曲线改直。其目的在于保证图线绘制的精确性，因为直线是最能够精确绘制的图线。</ol>
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

export default drawPicture;
