import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
    "user_id": 0,
    "user_name": "string",
    "user_num": "string",
    "one": 0,
    "two": 0,
    "three": 0,
    "four": 0,
    "five": 0,
    "six": 0,
    "seven": 0,
    "eight": 0,
    "nine": 0,
    "ten": 0,
    "eleven": 0,
    "twelfth": 0,
    "seven_one": 0,
    "eight_two": 0,
    "nine_three": 0,
    "ten_four": 0,
    "eleven_five": 0,
    "twelfth_six": 0,
    "deltad": 0,
    "deltadD": 0,
    "lambda_avg": 0,
    "deltadlambda": 0,
    "E": "string",
    "Instrumenttolerance":0
});

export default (state=defaultState,action)=> {
    const data = action.data;
    switch (action.type) {
        case constants.CHANGE_DATAS:
            return state.merge({
                "user_id": data.get('user_id'),
                "user_name": data.get('user_name'),
                "user_num": data.get('user_num'),
                "one": data.get('one'),
                "two": data.get('two'),
                "three": data.get('three'),
                "four": data.get('four'),
                "five": data.get('five'),
                "six": data.get('six'),
                "seven": data.get('seven'),
                "eight": data.get('eight'),
                "nine": data.get('nine'),
                "ten": data.get('ten'),
                "eleven": data.get('eleven'),
                "twelfth": data.get('twelfth'),
                "seven_one": data.get('seven_one'),
                "eight_two": data.get('eight_two'),
                "nine_three": data.get('nine_three'),
                "ten_four": data.get('ten_four'),
                "eleven_five": data.get('eleven_five'),
                "twelfth_six": data.get('twelfth_six'),
                "deltad": data.get('deltad'),
                "deltadD": data.get('deltadD'),
                "lambda_avg": data.get('lambda_avg'),
                "deltadlambda": data.get('deltadlambda'),
                "E": data.get('E'),
                "Instrumenttolerance": data.get('Instrumenttolerance')
            });
            //改变每个input的store数据
        case constants.CHANGE_INPUT_VALUE:
            return state.set(action.name,action.value);
        default:
            return state;
    }
}