import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const changeInputValue = (name,value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    name,
    value:value

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
            url:'/api/diffractiongrating/only_query/',
            data: {
                id:data.id,
                user_id:data.user_id,
                user_name:data.user_name,
                user_num:data.user_num,
                Beyond_yellow1:data.Beyond_yellow1,
                Beyond_yellow2:data.Beyond_yellow2,
                Beyond_yellow3:data.Beyond_yellow3,
                Beyond_yellow4:data.Beyond_yellow4,
                Inside_yellow1:data.Inside_yellow1,
                Inside_yellow2:data.Inside_yellow2,
                Inside_yellow3:data.Inside_yellow3,
                Inside_yellow4:data.Inside_yellow4,
                green1:data.green1,
                green2:data.green2,
                green3:data.green3,
                green4:data.green4,
                blue1:data.blue1,
                blue2:data.blue2,
                blue3:data.blue3,
                blue4:data.blue4,
                N:data.N,
                Beyond_yellow_k:data.Beyond_yellow_k,
                Inside_yellow_k:data.Inside_yellow_k,
                green_k:data.green_k,
                blue_k:data.blue_k,
                d:data.d,
                Beyond_yellow:data.Beyond_yellow,
                Inside_yellow:data.Inside_yellow,
                green:data.green,
                blue:data.blue,
                Beyond_yellow_lambda:data.Beyond_yellow_lambda,
                Inside_yellow_lambda:data.Inside_yellow_lambda,
                green_lambda:data.green_lambda,
                blue_lambda:data.blue_lambda,
                Beyond_yellow_D:data.Beyond_yellow_D,
                Inside_yellow_D:data.Inside_yellow_D,
                green_D:data.green_D,
                blue_D:data.blue_D,
                Beyond_yellow_R:data.Beyond_yellow_R,
                Inside_yellow_R:data.Inside_yellow_R,
                green_R:data.green_R,
                blue_R:data.blue_R,
                Beyond_yellow_delta_lambda:data.Beyond_yellow_delta_lambda,
                Inside_yellow_delta_lambda:data.Inside_yellow_delta_lambda,
                green_delta_lambda:data.green_delta_lambda,
                blue_delta_lambda:data.blue_delta_lambda


            },
            responseType: 'json'
        })
            .then((res) => {
                console.log('衍射光栅第一次请求成功');
                /*将返回的数据封装陈immutable对象*/
                const action = changeDatas(res.data);
                dispatch(action);
            }).catch(() => {
            console.log("衍射光栅第一次请求失败");
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
            url:'/api/diffractiongrating/',
            data: {
                id:data.id,
                user_id:data.user_id,
                user_name:data.user_name,
                user_num:data.user_num,
                Beyond_yellow1:data.Beyond_yellow1,
                Beyond_yellow2:data.Beyond_yellow2,
                Beyond_yellow3:data.Beyond_yellow3,
                Beyond_yellow4:data.Beyond_yellow4,
                Inside_yellow1:data.Inside_yellow1,
                Inside_yellow2:data.Inside_yellow2,
                Inside_yellow3:data.Inside_yellow3,
                Inside_yellow4:data.Inside_yellow4,
                green1:data.green1,
                green2:data.green2,
                green3:data.green3,
                green4:data.green4,
                blue1:data.blue1,
                blue2:data.blue2,
                blue3:data.blue3,
                blue4:data.blue4,
                N:data.N,
                Beyond_yellow_k:data.Beyond_yellow_k,
                Inside_yellow_k:data.Inside_yellow_k,
                green_k:data.green_k,
                blue_k:data.blue_k,
                d:data.d,
                Beyond_yellow:data.Beyond_yellow,
                Inside_yellow:data.Inside_yellow,
                green:data.green,
                blue:data.blue,
                Beyond_yellow_lambda:data.Beyond_yellow_lambda,
                Inside_yellow_lambda:data.Inside_yellow_lambda,
                green_lambda:data.green_lambda,
                blue_lambda:data.blue_lambda,
                Beyond_yellow_D:data.Beyond_yellow_D,
                Inside_yellow_D:data.Inside_yellow_D,
                green_D:data.green_D,
                blue_D:data.blue_D,
                Beyond_yellow_R:data.Beyond_yellow_R,
                Inside_yellow_R:data.Inside_yellow_R,
                green_R:data.green_R,
                blue_R:data.blue_R,
                Beyond_yellow_delta_lambda:data.Beyond_yellow_delta_lambda,
                Inside_yellow_delta_lambda:data.Inside_yellow_delta_lambda,
                green_delta_lambda:data.green_delta_lambda,
                blue_delta_lambda:data.blue_delta_lambda

            },
            responseType: 'json'
        })
            .then((res) => {
                alert("上传成功")
                console.log('衍射光栅第二次上传成功');
            }).catch(() => {
                console.log('上传失败');
            console.log("衍射光栅第二次上传请求失败");
        });
    }
};