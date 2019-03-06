import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Breadcrumb} from "antd";

const {
    Footer, Content
} = Layout;

class backWay extends Component {
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
                                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>

                                        <h1>回归法</h1>
                                        <hr/>
                                        <p style={{textIndent:'2em'}}>有各种各样的回归技术用于预测。这些技术主要有三个度量（自变量的个数，因变量的类型以及回归线的形状），如下图。
                                            1. Linear Regression线性回归
                                            它是最为人熟知的建模技术之一。线性回归通常是人们在学习预测模型时首选的技术之一。在这种技术中，因变量是连续的，自变量可以是连续的也可以是离散的，回归线的性质是线性的。
                                            线性回归使用最佳的拟合直线（也就是回归线）在因变量（Y）和一个或多个自变量（X）之间建立一种关系。
                                            多元线性回归可表示为Y=a+b1X +b2X2+ e，其中a表示截距，b表示直线的斜率，e是误差项。多元线性回归可以根据给定的预测变量（s）来预测目标变量的值。
                                            2.Logistic Regression逻辑回归
                                            逻辑回归是用来计算“事件=Success”和“事件=Failure”的概率。当因变量的类型属于二元（1 / 0，真/假，是/否）变量时，我们就应该使用逻辑回归。这里，Y的值为0或1，它可以用下方程表示。
                                            odds= p/ (1-p) = probability of event occurrence / probability of not event occurrence
                                            ln(odds) = ln(p/(1-p))
                                            logit(p) = ln(p/(1-p)) =b0+b1X1+b2X2+b3X3....+bkXk
                                            上述式子中，p表述具有某个特征的概率。你应该会问这样一个问题：“我们为什么要在公式中使用对数log呢？”。
                                            因为在这里我们使用的是的二项分布（因变量），我们需要选择一个对于这个分布最佳的连结函数。它就是Logit函数。在上述方程中，通过观测样本的极大似然估计值来选择参数，而不是最小化平方和误差（如在普通回归使用的）。
                                            3. Polynomial Regression多项式回归
                                            对于一个回归方程，如果自变量的指数大于1，那么它就是多项式回归方程。如下方程所示：
                                            y=a+bx2
                                            在这种回归技术中，最佳拟合线不是直线。而是一个用于拟合数据点的曲线。
                                            4. Stepwise Regression逐步回归
                                            在处理多个自变量时，我们可以使用这种形式的回归。在这种技术中，自变量的选择是在一个自动的过程中完成的，其中包括非人为操作。
                                            这一壮举是通过观察统计的值，如R-square，t-stats和AIC指标，来识别重要的变量。逐步回归通过同时添加/删除基于指定标准的协变量来拟合模型。下面列出了一些最常用的逐步回归方法：
                                            标准逐步回归法做两件事情。即增加和删除每个步骤所需的预测。
                                            向前选择法从模型中最显著的预测开始，然后为每一步添加变量。
                                            向后剔除法与模型的所有预测同时开始，然后在每一步消除最小显著性的变量。
                                            这种建模技术的目的是使用最少的预测变量数来最大化预测能力。这也是处理高维数据集的方法之一。 [2]
                                            5. Ridge Regression岭回归
                                            当数据之间存在多重共线性（自变量高度相关）时，就需要使用岭回归分析。在存在多重共线性时，尽管最小二乘法（OLS）测得的估计值不存在偏差，它们的方差也会很大，从而使得观测值与真实值相差甚远。岭回归通过给回归估计值添加一个偏差值，来降低标准误差。
                                            在线性等式中，预测误差可以划分为 2 个分量，一个是偏差造成的，一个是方差造成的。预测误差可能会由这两者或两者中的任何一个造成。在这里，我们将讨论由方差所造成的误差。 [2]
                                            岭回归通过收缩参数λ（lambda）解决多重共线性问题。请看下面的等式：
                                            L2=argmin||y=xβ||  +λ||β||

                                            在这个公式中，有两个组成部分。第一个是最小二乘项，另一个是β-平方的λ倍，其中β是相关系数向量，与收缩参数一起添加到最小二乘项中以得到一个非常低的方差。
                                            6. Lasso Regression套索回归
                                            它类似于岭回归，Lasso （Least Absolute Shrinkage and Selection Operator）也会就回归系数向量给出惩罚值项。此外，它能够减少变化程度并提高线性回归模型的精度。看看下面的公式：
                                            L1=agrmin||y-xβ||  +λ||β||

                                            Lasso 回归与Ridge回归有一点不同，它使用的惩罚函数是L1范数，而不是L2范数。这导致惩罚（或等于约束估计的绝对值之和）值使一些参数估计结果等于零。使用惩罚值越大，进一步估计会使得缩小值越趋近于零。这将导致我们要从给定的n个变量中选择变量。
                                            如果预测的一组变量是高度相关的，Lasso 会选出其中一个变量并且将其它的收缩为零。
                                            7.ElasticNet回归
                                            ElasticNet是Lasso和Ridge回归技术的混合体。它使用L1来训练并且L2优先作为正则化矩阵。当有多个相关的特征时，ElasticNet是很有用的。Lasso 会随机挑选他们其中的一个，而ElasticNet则会选择两个。

                                            Lasso和Ridge之间的实际的优点是，它允许ElasticNet继承循环状态下Ridge的一些稳定性。
                                            数据探索是构建预测模型的必然组成部分。在选择合适的模型时，比如识别变量的关系和影响时，它应该是首选的一步。比较适合于不同模型的优点，我们可以分析不同的指标参数，如统计意义的参数，R-square，Adjusted R-square，AIC，BIC以及误差项，另一个是Mallows’ Cp准则。这个主要是通过将模型与所有可能的子模型进行对比（或谨慎选择他们），检查在你的模型中可能出现的偏差。
                                            交叉验证是评估预测模型最好的方法。在这里，将你的数据集分成两份（一份做训练和一份做验证）。使用观测值和预测值之间的一个简单均方差来衡量你的预测精度。
                                            如果你的数据集是多个混合变量，那么你就不应该选择自动模型选择方法，因为你应该不想在同一时间把所有变量放在同一个模型中。
                                            它也将取决于你的目的。可能会出现这样的情况，一个不太强大的模型与具有高度统计学意义的模型相比，更易于实现。回归正则化方法（Lasso，Ridge和ElasticNet）在高维和数据集变量之间多重共线性情况下运行良好。 [3] </p>

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



}

export default backWay;
