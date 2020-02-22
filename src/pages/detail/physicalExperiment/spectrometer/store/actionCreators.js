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
            url:'/spectrometer/only_query/',
            data: {
                "user_id": data.user_id,
                "user_name": data.user_name,
                "user_num": data.user_num,
                "phi1_1": data.phi1_1,
                "phi2_1": data.phi2_1,
                "phi3_1": data.phi3_1,
                "phi4_1": data.phi4_1,
                "phi1_2": data.phi1_2,
                "phi2_2": data.phi2_2,
                "phi3_2": data.phi3_2,
                "phi4_2": data.phi4_2,
                "phi1_3": data.phi1_3,
                "phi2_3": data.phi2_3,
                "phi3_3": data.phi3_3,
                "phi4_3": data.phi4_3,
                "phi1_4": data.phi1_4,
                "phi2_4": data.phi2_4,
                "phi3_4": data.phi3_4,
                "phi4_4": data.phi4_4,
                "phi1_5": data.phi1_5,
                "phi2_5": data.phi2_5,
                "phi3_5": data.phi3_5,
                "phi4_5": data.phi4_5,
                "phi1_6": data.phi1_6,
                "phi2_6": data.phi2_6,
                "phi3_6": data.phi3_6,
                "phi4_6": data.phi4_6,
                "Instrumenttolerance": data.Instrumenttolerance,
                "phi1": data.phi1,
                "phi2": data.phi2,
                "phi3": data.phi3,
                "phi4": data.phi4,
                "phi5": data.phi5,
                "phi6": data.phi6,
                "alpha": data.alpha,
                "phiba": data.phiba,
                "delta": data.delta
            },
            responseType: 'json'
        })
            .then((res) => {
                console.log('分光计第一次请求成功');
                /*将返回的数据封装陈immutable对象*/
                const action = changeDatas(res.data);
                dispatch(action);
            }).catch(() => {
            console.log("分光计第一次请求失败");
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
            url:'/spectrometer/',
            data: {
                "user_id": data.user_id,
                "user_name": data.user_name,
                "user_num": data.user_num,
                "phi1_1": data.phi1_1,
                "phi2_1": data.phi2_1,
                "phi3_1": data.phi3_1,
                "phi4_1": data.phi4_1,
                "phi1_2": data.phi1_2,
                "phi2_2": data.phi2_2,
                "phi3_2": data.phi3_2,
                "phi4_2": data.phi4_2,
                "phi1_3": data.phi1_3,
                "phi2_3": data.phi2_3,
                "phi3_3": data.phi3_3,
                "phi4_3": data.phi4_3,
                "phi1_4": data.phi1_4,
                "phi2_4": data.phi2_4,
                "phi3_4": data.phi3_4,
                "phi4_4": data.phi4_4,
                "phi1_5": data.phi1_5,
                "phi2_5": data.phi2_5,
                "phi3_5": data.phi3_5,
                "phi4_5": data.phi4_5,
                "phi1_6": data.phi1_6,
                "phi2_6": data.phi2_6,
                "phi3_6": data.phi3_6,
                "phi4_6": data.phi4_6,
                "Instrumenttolerance": data.Instrumenttolerance,
                "phi1": data.phi1,
                "phi2": data.phi2,
                "phi3": data.phi3,
                "phi4": data.phi4,
                "phi5": data.phi5,
                "phi6": data.phi6,
                "alpha": data.alpha,
                "phiba": data.phiba,
                "delta": data.delta,
            },
            responseType: 'json'
        })
            .then((res) => {
                alert("上传成功")
                console.log('分光计第二次上传成功');
            }).catch(() => {
                console.log('上传失败');
            console.log("分光计第二次上传请求失败");
        });
    }
};