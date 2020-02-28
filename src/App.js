import React, {Component, Fragment} from 'react';
import {GlobalSytle} from './style';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import Header from './common/header';//'/index'可以省略
import {IconSytle} from './statics/iconfont/iconfont';
import Home from './pages/home';
import NewtonRing from './pages/detail/physicalExperiment/newton-ring';
import NewtonRingShowData from './pages/detail/physicalExperiment/newton-ring/showData';
import MichelsonInterferometer from './pages/detail/physicalExperiment/michelson-interferometer';
import MichelsonInterferometerShowData from './pages/detail/physicalExperiment/michelson-interferometer/showData';
import diffractiongrating from './pages/detail/physicalExperiment/diffractiongrating';
import diffractiongratingShowData from './pages/detail/physicalExperiment/diffractiongrating/showData';
import Staticyoungmodulus from './pages/detail/physicalExperiment/staticYoungmodulus';
import StaticyoungmodulusShowData from './pages/detail/physicalExperiment/staticYoungmodulus/showData';
import Spectrometer from './pages/detail/physicalExperiment/spectrometer';
import SpectrometerShowData from './pages/detail/physicalExperiment/spectrometer/showData';
import thermalconductivity from './pages/detail/physicalExperiment/thermalconductivity';
import thermalconductivityShowData from './pages/detail/physicalExperiment/thermalconductivity/showData';
import listWay from './pages/detail/dataHandle/listWay';
import drawPicture from "./pages/detail/dataHandle/drawPicture";
import zhuChaWay from "./pages/detail/dataHandle/zhuChaWay";
import backWay from "./pages/detail/dataHandle/backWay";
import minDoubleWay from "./pages/detail/dataHandle/minDoubleWay";
import Variance from "./pages/detail/generalTools/variance";
import about from "./common/header/about";
import callUs from "./common/header/callUs";
import Login from './pages/login'


class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            {/*exact的意义是“完全匹配路径”，免除了并集的情况*/}

                            <Switch>
                                {/*关于*/}
                                <Route path='/about' exact component={about}></Route>
                                {/*联系我们*/}
                                <Route path='/callUs' exact component={callUs}></Route>

                                <Route path='/' exact component={Home}></Route>
                                {/*牛顿环实验一级界面*/}
                                <Route path='/physicalExperiment/0' exact component={NewtonRing}></Route>
                                {/*牛顿环实验二级界面*/}
                                <Route path='/physicalExperiment/0/showData' component={NewtonRingShowData}></Route>

                                {/*迈克尔逊干涉仪一级页面*/}
                                <Route path='/physicalExperiment/1' exact component={MichelsonInterferometer}></Route>
                                {/*迈克尔逊干涉仪二级页面*/}
                                <Route path='/physicalExperiment/1/showData' exact component={MichelsonInterferometerShowData}></Route>

                                {/*杨氏静态一级页面*/}
                                <Route path='/physicalExperiment/2' exact component={Staticyoungmodulus}></Route>
                                {/*杨氏静态二级页面*/}
                                <Route path='/physicalExperiment/2/showData' exact component={StaticyoungmodulusShowData}></Route>

                                {/*分光计一级页面*/}
                                <Route path='/physicalExperiment/3' exact component={Spectrometer}></Route>
                                {/*分光计二级页面*/}
                                <Route path='/physicalExperiment/3/showData' exact component={SpectrometerShowData}></Route>

                                {/*衍射光栅一级页面*/}
                                <Route path='/physicalExperiment/4' exact component={diffractiongrating}></Route>
                                {/*衍射光栅二级页面*/}
                                <Route path='/physicalExperiment/4/showData' exact component={diffractiongratingShowData}></Route>

                                {/*热导率一级页面*/}
                                <Route path='/physicalExperiment/5' exact component={thermalconductivity}></Route>
                                {/*热导率二级页面*/}
                                <Route path='/physicalExperiment/5/showData' exact component={thermalconductivityShowData}></Route>

                                {/*列表法*/}
                                <Route path='/dataHandle/0' exact component={listWay}></Route>
                                {/*作图法*/}
                                <Route path='/dataHandle/1' exact component={drawPicture}></Route>
                                {/*逐差法*/}
                                <Route path='/dataHandle/2' exact component={zhuChaWay}></Route>
                                {/*回归法*/}
                                <Route path='/dataHandle/3' exact component={backWay}></Route>
                                {/*最小二乘法*/}
                                <Route path='/dataHandle/4' exact component={minDoubleWay}></Route>

                                {/*方差工具*/}
                                <Route path='/generalTools/0' exact component={Variance}></Route>
                                {/*<Route path='/generalTools/1' exact component={Variance}></Route>*/}
                                {/*<Route path='/generalTools/2' exact component={Variance}></Route>*/}
                                {/*<Route path='/generalTools/3' exact component={Variance}></Route>*/}
                                {/*<Route path='/generalTools/4' exact component={Variance}></Route>*/}
                                {/*<Route path='/generalTools/5' exact component={Variance}></Route>*/}


                                <Route path='/login' exact component={Login}></Route>
                                <Redirect to="/login" />
                            </Switch>
                        </div>
                    </BrowserRouter>

                    {/*全局样式*/}
                    <IconSytle/>
                    <GlobalSytle/>
                </Provider>
            </Fragment>

        );
    }
}

export default App;
