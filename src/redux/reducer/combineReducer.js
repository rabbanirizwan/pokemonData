import {combineReducers} from 'redux';
import rootReducer from './rootReducer';

const root = combineReducers({
    rA:rootReducer,
})
export default root