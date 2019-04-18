import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const  changeList =(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
});

export const searchFocus =()=>({
    type:constants.SEARCH_FOCUS
});
export const  searchBlur =()=>({
    type:constants.SEARCH_BLUR
});
export const  handleMouseEnter =()=>({
    type:constants.MOUSE_ENTER
});

export const  handleMouseLeave =()=>({
    type:constants.MOUSE_LEAVE
});
export const  changePageList =(page)=>({
    type:constants.CHANGE_PAGE,
    page
});



export const getList=()=>{
    return (dispatch)=>{
        axios.get('/headerList.json').then((res)=>{
            const data = res.data;
            const action =changeList(data.data);
            dispatch(action);
        }).catch(()=>{
            console.log("/api/headerList.json_______________Error");
        });
    }
}