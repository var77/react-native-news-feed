import * as types from './types';

 export const selectPage = page => ({
     type: types.CHANGE_PAGE,
     page
 });