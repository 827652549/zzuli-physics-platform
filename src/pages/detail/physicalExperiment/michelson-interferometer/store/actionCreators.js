import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const changeInputValue = (name,value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    name,
    value:parseFloat(value)

});
/**
 * 不保存数据
 * @param data
 * @returns {{data: any, type: string}}
 */
const changeDatas = (data) => ({
    type: constants.CHANGE_DATAS,
    data: fromJS(data),
});

/**
 * ajax向后台发送数据，并把返回的json数据dispatch到reducer中
 * @returns {Function}
 */
export const sendData = (data) => {
    return (dispatch) => {
        axios({
            method:'post',
            url:'/api/michelson/only_query/',
            data: {
                "user_id": data.user_id,
                "user_name": data.user_name,
                "user_num": data.user_num,
                "one": data.one,
                "two": data.two,
                "three": data.three,
                "four": data.four,
                "five": data.five,
                "six": data.six,
                "seven": data.seven,
                "eight": data.eight,
                "nine": data.nine,
                "ten": data.ten,
                "eleven": data.eleven,
                "twelfth": data.twelfth,
                "seven_one": data.seven_one,
                "eight_two": data.eight_two,
                "nine_three": data.nine_three,
                "ten_four": data.ten_four,
                "eleven_five": data.eleven_five,
                "twelfth_six": data.twelfth_six,
                "deltad": data.deltad,
                "deltadD": data.deltadD,
                "lambda_avg": data.lambda_avg,
                "deltadlambda": data.deltadlambda,
                "E": data.E,
                "Instrumenttolerance": data.Instrumenttolerance
            },
            responseType: 'json'
        })
            .then((res) => {
                console.log('迈克尔逊第一次请求成功');
                /*将返回的数据封装陈immutable对象*/
                const action = changeDatas(res.data);
                dispatch(action);
            }).catch(() => {
            console.log("迈克尔逊第一次请求失败");
        });
    }
};

/**
 * 将store的数据发送到后台，这次是保存操作
 * @returns {Function}
 */
export const sendDataToBackend = (data) => {
    return (dispatch) => {
        axios({
            method:'post',
            url:'/api/michelson/',
            data: {
                "user_id": data.user_id,
                "user_name": data.user_name,
                "user_num": data.user_num,
                "one": data.one,
                "two": data.two,
                "three": data.three,
                "four": data.four,
                "five": data.five,
                "six": data.six,
                "seven": data.seven,
                "eight": data.eight,
                "nine": data.nine,
                "ten": data.ten,
                "eleven": data.eleven,
                "twelfth": data.twelfth,
                "seven_one": data.seven_one,
                "eight_two": data.eight_two,
                "nine_three": data.nine_three,
                "ten_four": data.ten_four,
                "eleven_five": data.eleven_five,
                "twelfth_six": data.twelfth_six,
                "deltad": data.deltad,
                "deltadD": data.deltadD,
                "lambda_avg": data.lambda_avg,
                "deltadlambda": data.deltadlambda,
                "E": data.E,
                "Instrumenttolerance": data.Instrumenttolerance
            },
            responseType: 'json'
        })
            .then((res) => {
                alert("上传成功")
                console.log('迈克尔逊第二次上传成功');
            }).catch(() => {
                console.log('上传失败');
            console.log("迈克尔逊第二次上传请求失败");
        });
    }
};