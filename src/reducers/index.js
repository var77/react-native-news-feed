import { combineReducers } from 'redux';
import * as tabReducers from './tabs';

export default combineReducers({...tabReducers});