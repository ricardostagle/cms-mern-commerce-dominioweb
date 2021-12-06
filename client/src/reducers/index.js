import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    item: itemReducer,
    user: userReducer,
    error: errorReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
})