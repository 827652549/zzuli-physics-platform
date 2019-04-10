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
            url:'/thermalconductivity/only_query/',
            data: {
                user_id: data.user_id,
                user_name: data.user_name,
                user_num: data.user_num,
                add_Ta: data.add_Ta,
                add_Tp: data.add_Tp,
                Tp_1: data.Tp_1,
                Tp_2: data.Tp_2,
                Tp_3: data.Tp_3,
                Tp_4: data.Tp_4,
                Tp_5: data.Tp_5,
                Tp_6: data.Tp_6,
                Tp_7: data.Tp_7,
                Tp_8: data.Tp_8,
                Tp_9: data.Tp_9,
                Tp_10: data.Tp_10,
                Tp_11: data.Tp_11,
                Tp_12: data.Tp_12,
                Tp_13: data.Tp_13,
                Tp_14: data.Tp_14,
                Tp_15: data.Tp_15,
                Tp_16: data.Tp_16,
                Tp_17: data.Tp_17,
                Tp_18: data.Tp_18,
                Tp_19: data.Tp_19,
                Tp_20: data.Tp_20,
                hb_1: data.hb_1,
                hb_2: data.hb_2,
                hb_3: data.hb_3,
                hb_4: data.hb_4,
                hb_5: data.hb_5,
                hb_6: data.hb_6,
                Ta: data.Ta,
                Tp: data.Tp,
                hp: data.hp,
                D1: data.D1,
                D2: data.D2,
                D3: data.D3,
                D4: data.D4,
                D5: data.D5,
                D6: data.D6,
                m: data.m,
                c: data.c,
                space1: data.space1,
                space2: data.space2,
                p1: data.p1,
                p2: data.p2,
                t: data.t,
                k: data.k
            },
            responseType: 'json'
        })
            .then((res) => {
                console.log('热导率第一次请求成功');
                /*将返回的数据封装陈immutable对象*/
                const action = changeDatas(res.data);
                dispatch(action);
            }).catch(() => {
            console.log("热导率第一次请求失败");
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
            url:'/thermalconductivity/',
            data: {
                user_id: data.user_id,
                user_name: data.user_name,
                user_num: data.user_num,
                add_Ta: data.add_Ta,
                add_Tp: data.add_Tp,
                Tp_1: data.Tp_1,
                Tp_2: data.Tp_2,
                Tp_3: data.Tp_3,
                Tp_4: data.Tp_4,
                Tp_5: data.Tp_5,
                Tp_6: data.Tp_6,
                Tp_7: data.Tp_7,
                Tp_8: data.Tp_8,
                Tp_9: data.Tp_9,
                Tp_10: data.Tp_10,
                Tp_11: data.Tp_11,
                Tp_12: data.Tp_12,
                Tp_13: data.Tp_13,
                Tp_14: data.Tp_14,
                Tp_15: data.Tp_15,
                Tp_16: data.Tp_16,
                Tp_17: data.Tp_17,
                Tp_18: data.Tp_18,
                Tp_19: data.Tp_19,
                Tp_20: data.Tp_20,
                hb_1: data.hb_1,
                hb_2: data.hb_2,
                hb_3: data.hb_3,
                hb_4: data.hb_4,
                hb_5: data.hb_5,
                hb_6: data.hb_6,
                Ta: data.Ta,
                Tp: data.Tp,
                hp: data.hp,
                D1: data.D1,
                D2: data.D2,
                D3: data.D3,
                D4: data.D4,
                D5: data.D5,
                D6: data.D6,
                m: data.m,
                c: data.c,
                space1: data.space1,
                space2: data.space2,
                p1: data.p1,
                p2: data.p2,
                t: data.t,
                img1: data.img1,
                img2: data.img2,
                img10: data.img10,
                img20: data.img20,
                k: data.k
            },
            responseType: 'json'
        })
            .then((res) => {
                alert("上传成功")
                console.log('热导率第二次上传成功');
            }).catch(() => {
                console.log('上传失败');
            console.log("热导率第二次上传请求失败");
        });
    }
};