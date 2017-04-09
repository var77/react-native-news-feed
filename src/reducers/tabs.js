import createReducer from '../helpers/createReducer' ;
import * as types from '../actions/types';

export const page = createReducer('home', {
    [types.CHANGE_PAGE](state, action) {
        return action.page;
    }
});