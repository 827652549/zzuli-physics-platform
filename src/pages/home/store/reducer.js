import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id:1,
            title:'社会热点',
            imgUrl: '//upload.jianshu.io/collections/images/2194/android.graphics.Bitmap_6dd6427.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
        },
        {
            id:2,
            title:'悬疑推理',
            imgUrl:'//upload.jianshu.io/collections/images/333523/mymInbq_%E5%89%AF%E6%9C%AC.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
        }]
});

export default (state = defaultState, action) => {

    switch (action.type) {

        default:
            return state;
    }
}