import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import homeReducer from '../pages/home/store';
import loginReducer from '../pages/login/store';
import {reducer as micheison} from '../pages/detail/physicalExperiment/michelson-interferometer/store';
import {reducer as newtonRing} from '../pages/detail/physicalExperiment/newton-ring/store';
import {reducer as yangStatic} from '../pages/detail/physicalExperiment/staticYoungmodulus/store';


export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    login:loginReducer,
    newtonRing:newtonRing,
    micheison:micheison,
    yangStatic:yangStatic
});