import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
    "n0": 1,
    "n1": 1,
    "n2": 1,
    "n3": 1,
    "n4": 1,
    "n5": 1,
    "n6": 1,
    "n7": 1,
    "n_0": 1,
    "n_1": 1,
    "n_2": 1,
    "n_3": 1,
    "n_4": 1,
    "n_5": 1,
    "n_6": 1,
    "n_7": 1,
    "d1": 1,
    "d2": 1,
    "d3": 1,
    "d4": 1,
    "d5": 1,
    "d6": 1,
    "d_avg": 1,
    "L": 1,
    "D": 1,
    "K": 1,
    "delta_L": 1,
    "delta_D": 1,
    "delta_K": 1,
    "micrometer": 1,
    "verniercaliper": 1,
    "n0_avg": 1,
    "n1_avg": 1,
    "n2_avg": 1,
    "n3_avg": 1,
    "n4_avg": 1,
    "n5_avg": 1,
    "n6_avg": 1,
    "n7_avg": 1,
    "n4_0": 1,
    "n5_1": 1,
    "n6_2": 1,
    "n7_3": 1,
    "ln": 1,
    "delta_dn": 1,
    "delta_ln": 1,
    "E": 1,
    "delta_E": 1,
    "relative_E": "string"
});

export default (state=defaultState,action)=> {
    const data = action.data;
    switch (action.type) {
        case constants.CHANGE_DATAS:
            return state.merge({
                n0:data.get('n0'),
                n1:data.get('n1'),
                n2:data.get('n2'),
                n3:data.get('n3'),
                n4:data.get('n4'),
                n5:data.get('n5'),
                n6:data.get('n6'),
                n7:data.get('n7'),
                n_0:data.get('n_0'),
                n_1:data.get('n_1'),
                n_2:data.get('n_2'),
                n_3:data.get('n_3'),
                n_4:data.get('n_4'),
                n_5:data.get('n_5'),
                n_6:data.get('n_6'),
                n_7:data.get('n_7'),
                d1:data.get('d1'),
                d2:data.get('d2'),
                d3:data.get('d3'),
                d4:data.get('d4'),
                d5:data.get('d5'),
                d6:data.get('d6'),
                d_avg:data.get('d_avg'),
                L:data.get('L'),
                D:data.get('D'),
                K:data.get('K'),
                delta_L:data.get('delta_L'),
                delta_D:data.get('delta_D'),
                delta_K:data.get('delta_K'),
                micrometer:data.get('micrometer'),
                verniercaliper:data.get('verniercaliper'),
                n0_avg:data.get('n0_avg'),
                n1_avg:data.get('n1_avg'),
                n2_avg:data.get('n2_avg'),
                n3_avg:data.get('n3_avg'),
                n4_avg:data.get('n4_avg'),
                n5_avg:data.get('n5_avg'),
                n6_avg:data.get('n6_avg'),
                n7_avg:data.get('n7_avg'),
                n4_0:data.get('n4_0'),
                n5_1:data.get('n5_1'),
                n6_2:data.get('n6_2'),
                n7_3:data.get('n7_3'),
                ln:data.get('ln'),
                delta_dn:data.get('delta_dn'),
                delta_ln:data.get('delta_ln'),
                E:data.get('E'),
                delta_E:data.get('delta_E'),
                relative_E: data.get('relative_E')
            });
            //改变每个input的store数据
        case constants.CHANGE_INPUT_VALUE:
            return state.set(action.name,action.value);
        default:
            return state;
    }
}