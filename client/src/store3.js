
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
/*
import { AuthReducer } from './reducers/authReducer';
import { CartReducer } from './reducers/cartReducer';
import { ErrorReducer } from './reducers/errorReducer';
import { ItemReducer } from './reducers/itemReducer';
import { OrderReducer } from './reducers/orderReducer';
import { UserReducer } from './reducers/userReducer';
*/

export const history = createBrowserHistory();
// combineReducers will be handled internally by configureStore

const createReducer = (history) => ({
  auth: AuthReducer,
  cart: CartReducer,
  error: ErrorReducer,
  item: ItemReducer,
  order: OrderReducer,
  user: UserReducer,
  router: connectRouter(history)
});

const store = configureStore({
    reducer: createReducer(history),
    // for the preloaded, if you have your initial state in diffrent file
    // import and set it like this "preloadedState: myState"
    preloadedState: {},
    devTools: composeWithDevTools(),
    // the thunk middleware will be automatically provided by getDefaultMiddleware
    // and you dont need to import getDefaultMiddleware configureStore will handle it
    // middleware: (getDefaultMiddleware) =>   getDefaultMiddleware().concat(routerMiddleware(history)),
    middleware: [thunk, routerMiddleware(history)],
  });
  export default store;
/*
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
));

export default store;
*/