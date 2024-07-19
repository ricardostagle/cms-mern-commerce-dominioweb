
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
    productAddReducer,
    productDeleteReducer,
    productDetailsReducer,
    productListReducer,
    productUpdateReducer,
  } from './reducers/productReducers'
//import rootReducer from './reducers';
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
  } from './reducers/userReducers'

const middleware = [thunk]

const reducer = {
    // User
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    // Product
    productAdd: productAddReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
  }

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const preLoadedState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const store = configureStore({
    reducer,
    preLoadedState,
    middleware,
  });

export default store;