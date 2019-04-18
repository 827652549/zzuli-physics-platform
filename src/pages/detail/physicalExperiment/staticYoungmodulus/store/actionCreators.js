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
            url:'/api/staticyoungmodulus/only_query/',
            data: {
                n0:data.n0,
                n1:data.n1,
                n2:data.n2,
                n3:data.n3,
                n4:data.n4,
                n5:data.n5,
                n6:data.n6,
                n7:data.n7,
                n_0:data.n_0,
                n_1:data.n_1,
                n_2:data.n_2,
                n_3:data.n_3,
                n_4:data.n_4,
                n_5:data.n_5,
                n_6:data.n_6,
                n_7:data.n_7,
                d1:data.d1,
                d2:data.d2,
                d3:data.d3,
                d4:data.d4,
                d5:data.d5,
                d6:data.d6,
                d_avg:data.d_avg,
                L:data.L,
                D:data.D,
                K:data.K,
                delta_L:data.delta_L,
                delta_D:data.delta_D,
                delta_K:data.delta_K,
                micrometer:data.micrometer,
                verniercaliper:data.verniercaliper,
                n0_avg:data.n0_avg,
                n1_avg:data.n1_avg,
                n2_avg:data.n2_avg,
                n3_avg:data.n3_avg,
                n4_avg:data.n4_avg,
                n5_avg:data.n5_avg,
                n6_avg:data.n6_avg,
                n7_avg:data.n7_avg,
                n4_0:data.n4_0,
                n5_1:data.n5_1,
                n6_2:data.n6_2,
                n7_3:data.n7_3,
                ln:data.ln,
                delta_dn:data.delta_dn,
                delta_ln:data.delta_ln,
                E:data.E,
                delta_E:data.delta_E,
                relative_E: data.relative_E
            },
            responseType: 'json'
        })
            .then((res) => {
                console.log('杨氏静态第一次请求成功');
                console.log(res.data);
                /*将返回的数据封装陈immutable对象*/
                const action = changeDatas(res.data);
                dispatch(action);
            }).catch(() => {
            console.log("杨氏静态第一次请求失败");
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
            url:'/api/staticyoungmodulus/',
            data: {
                n0:data.n0,
                n1:data.n1,
                n2:data.n2,
                n3:data.n3,
                n4:data.n4,
                n5:data.n5,
                n6:data.n6,
                n7:data.n7,
                n_0:data.n_0,
                n_1:data.n_1,
                n_2:data.n_2,
                n_3:data.n_3,
                n_4:data.n_4,
                n_5:data.n_5,
                n_6:data.n_6,
                n_7:data.n_7,
                d1:data.d1,
                d2:data.d2,
                d3:data.d3,
                d4:data.d4,
                d5:data.d5,
                d6:data.d6,
                d_avg:data.d_avg,
                L:data.L,
                D:data.D,
                K:data.K,
                delta_L:data.delta_L,
                delta_D:data.delta_D,
                delta_K:data.delta_K,
                micrometer:data.micrometer,
                verniercaliper:data.verniercaliper,
                n0_avg:data.n0_avg,
                n1_avg:data.n1_avg,
                n2_avg:data.n2_avg,
                n3_avg:data.n3_avg,
                n4_avg:data.n4_avg,
                n5_avg:data.n5_avg,
                n6_avg:data.n6_avg,
                n7_avg:data.n7_avg,
                n4_0:data.n4_0,
                n5_1:data.n5_1,
                n6_2:data.n6_2,
                n7_3:data.n7_3,
                ln:data.ln,
                delta_dn:data.delta_dn,
                delta_ln:data.delta_ln,
                E:data.E,
                delta_E:data.delta_E,
                relative_E: data.relative_E
            },
            responseType: 'json'
        })
            .then((res) => {
                alert("上传成功")
                console.log('杨氏静态第二次上传成功');
            }).catch(() => {
                console.log('上传失败');
            console.log("杨氏静态第二次上传请求失败");
        });
    }
};