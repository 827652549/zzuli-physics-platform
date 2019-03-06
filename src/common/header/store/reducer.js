import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
    focused: false,//鼠标是否聚焦搜索框
    mouseIn:false,//鼠标是否离开搜索框弹出的框
    list:[],//搜索框推荐选项卡列表
    page:1,//当前搜索框推荐选项卡页数
    totalPage:1//搜索框推荐选项卡总数
});

export default (state=defaultState,action)=>{

    switch (action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({//merge方法相当于多次调用set().性能更高
                list:action.data,
                totalPage:action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}