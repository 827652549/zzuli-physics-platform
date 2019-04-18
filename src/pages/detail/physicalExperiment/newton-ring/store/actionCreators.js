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
            url:'newrtown/only_query/',
            data: {
                "user_id": data.user_id,
                "user_name": data.user_name,
                "user_num": data.user_num,
                "l10":data.l10,
                "l11":data.l11,
                "l12": data.l12,
                "l13": data.l13,
                "l14": data.l14,
                "l15": data.l15,
                "l30": data.l30,
                "l31": data.l31,
                "l32": data.l32,
                "l33": data.l33,
                "l34": data.l34,
                "l35": data.l35,
                "r10": data.r10,
                "r11": data.r11,
                "r12": data.r12,
                "r13": data.r13,
                "r14": data.r14,
                "r15": data.r15,
                "r30": data.r30,
                "r31": data.r31,
                "r32": data.r32,
                "r33": data.r33,
                "r34": data.r34,
                "r35": data.r35,
                "d10": 0,
                "d11": 0,
                "d12": 0,
                "d13": 0,
                "d14": 0,
                "d15": 0,
                "d30": 0,
                "d31": 6,
                "d32": 0,
                "d33": 0,
                "d34": 0,
                "d35": 0,
                "r35_15": 0,
                "r34_14": 0,
                "r33_13": 0,
                "r32_12": 0,
                "r31_11": 0,
                "r30_10": 0,
                "value35_15": 0,
                "value34_14": 0,
                "value33_13": 0,
                "value32_12": 0,
                "value31_11": 0,
                "value30_10": 0,
                "Instrumenttolerance": data.Instrumenttolerance,
                "lamda": data.lamda,
                "uncertainty": data.uncertainty,
                "anwser": data.anwser
            },
            responseType: 'json'
        })
            .then((res) => {
                console.log('牛顿环第一次请求成功');
                /*将返回的数据封装陈immutable对象*/
                const action = changeDatas(res.data);
                dispatch(action);
            }).catch(() => {
            console.log("牛顿环第一次请求失败");
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
            url:'newrtown/',
            data: {
                "user_id": data.user_id,
                "user_name": data.user_name,
                "user_num": data.user_num,
                "l10":data.l10,
                "l11":data.l11,
                "l12": data.l12,
                "l13": data.l13,
                "l14": data.l14,
                "l15": data.l15,
                "l30": data.l30,
                "l31": data.l31,
                "l32": data.l32,
                "l33": data.l33,
                "l34": data.l34,
                "l35": data.l35,
                "r10": data.r10,
                "r11": data.r11,
                "r12": data.r12,
                "r13": data.r13,
                "r14": data.r14,
                "r15": data.r15,
                "r30": data.r30,
                "r31": data.r31,
                "r32": data.r32,
                "r33": data.r33,
                "r34": data.r34,
                "r35": data.r35,
                "d10": 0,
                "d11": 0,
                "d12": 0,
                "d13": 0,
                "d14": 0,
                "d15": 0,
                "d30": 0,
                "d31": 6,
                "d32": 0,
                "d33": 0,
                "d34": 0,
                "d35": 0,
                "r35_15": 0,
                "r34_14": 0,
                "r33_13": 0,
                "r32_12": 0,
                "r31_11": 0,
                "r30_10": 0,
                "value35_15": 0,
                "value34_14": 0,
                "value33_13": 0,
                "value32_12": 0,
                "value31_11": 0,
                "value30_10": 0,
                "Instrumenttolerance": data.Instrumenttolerance,
                "lamda": data.lamda,
                "uncertainty": data.uncertainty,
                "anwser": data.anwser
            },
            responseType: 'json'
        })
            .then((res) => {
                alert("上传成功")
                console.log('牛顿环第二次上传成功');
            }).catch(() => {
                console.log('上传失败');
            console.log("牛顿环第二次上传请求失败");
        });
    }
};