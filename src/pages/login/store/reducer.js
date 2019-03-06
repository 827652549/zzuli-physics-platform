import {fromJS} from 'immutable';

const defaultState = fromJS({
    ifLogin:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'login':
            return state.set('ifLogin',true);
        default:
            return state;
    }
}