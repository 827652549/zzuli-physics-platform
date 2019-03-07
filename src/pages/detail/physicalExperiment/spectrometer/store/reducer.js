import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
    "user_num": "541713460304",
    "user_id": 3,
    "user_name": "陈元",
    "phi1_1":"279°5",
    "phi2_1":"399°12",
    "phi3_1":"99°6",
    "phi4_1":"219°9",
    "phi1_2":"279°5",
    "phi2_2":"399°12",
    "phi3_2":"99°5",
    "phi4_2":"219°8",
    "phi1_3":"279°6",
    "phi2_3":"399°12",
    "phi3_3":"99°7",
    "phi4_3":"219°7",
    "phi1_4":"279°6",
    "phi2_4":"399°12",
    "phi3_4":"99°6",
    "phi4_4":"219°8",
    "phi1_5":"279°6",
    "phi2_5":"399°10",
    "phi3_5":"99°6",
    "phi4_5":"219°8",
    "phi1_6":"279°6",
    "phi2_6":"399°11",
    "phi3_6":"99°6",
    "phi4_6":"219°8",
    "Instrumenttolerance": "string",
    "phi1": "string",
    "phi2": "string",
    "phi3": "string",
    "phi4": "string",
    "phi5": "string",
    "phi6": "string",
    "alpha": "string",
    "phiba": "string",
    "delta": "string"
});

export default (state=defaultState,action)=> {
    const data = action.data;
    switch (action.type) {
        case constants.CHANGE_DATAS:
            return state.merge({
                "user_id": data.get('user_id'),
                "user_name": data.get('user_name'),
                "user_num": data.get('user_num'),
                "phi1_1": data.get('phi1_1'),
                "phi2_1": data.get('phi2_1'),
                "phi3_1": data.get('phi3_1'),
                "phi4_1": data.get('phi4_1'),
                "phi1_2": data.get('phi1_2'),
                "phi2_2": data.get('phi2_2'),
                "phi3_2": data.get('phi3_2'),
                "phi4_2": data.get('phi4_2'),
                "phi1_3": data.get('phi1_3'),
                "phi2_3": data.get('phi2_3'),
                "phi3_3": data.get('phi3_3'),
                "phi4_3": data.get('phi4_3'),
                "phi1_4": data.get('phi1_4'),
                "phi2_4": data.get('phi2_4'),
                "phi3_4": data.get('phi3_4'),
                "phi4_4": data.get('phi4_4'),
                "phi1_5": data.get('phi1_5'),
                "phi2_5": data.get('phi2_5'),
                "phi3_5": data.get('phi3_5'),
                "phi4_5": data.get('phi4_5'),
                "phi1_6": data.get('phi1_6'),
                "phi2_6": data.get('phi2_6'),
                "phi3_6": data.get('phi3_6'),
                "phi4_6": data.get('phi4_6'),
                "Instrumenttolerance": data.get('Instrumenttolerance'),
                "phi1": data.get('phi1'),
                "phi2": data.get('phi2'),
                "phi3": data.get('phi3'),
                "phi4": data.get('phi4'),
                "phi5": data.get('phi5'),
                "phi6": data.get('phi6'),
                "alpha": data.get('alpha'),
                "phiba": data.get('phiba'),
                "delta": data.get('delta')
            });
            //改变每个input的store数据
        case constants.CHANGE_INPUT_VALUE:
            return state.set(action.name,action.value);
        default:
            return state;
    }
}