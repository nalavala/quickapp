import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import shortcutReducer from './shortcutReducer'
const rootReducer = combineReducers({
    modalReducer,
    shortcutReducer
})
export default rootReducer