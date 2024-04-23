import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    USERS_LOADING,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function authReducer(state=initialState, action){
    switch(action.type){

        case GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        
        case ADD_USER:
            return{
                ...state,
                users: [action.payload, ...state.users]
            }
        
        case DELETE_USER:
            return{
                ...state,
                users: state.users.filter(user => user._id!==action.payload)                
            };
        
        case UPDATE_USER:
            const { id, data } = action.payload;
            return{
                ...state,
                users: state.users.map(user => 
                    user._id===id ? user = data : user 
                )
            };

        case USERS_LOADING:
            return{
                ...state,
                loading: true
            };

        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}