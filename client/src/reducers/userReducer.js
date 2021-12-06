import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    USERS_LOADING
} from '../actions/types';

const initialState = {
    users: [],
    loading: false
}

export default function(state=initialState, action){
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
                users: state.users.map(user => {
                    if(user._id===id){
                        user = data;
                    }
                })
            };

        case USERS_LOADING:
            return{
                ...state,
                loading: true
            };

        default:
            return state;
    }
}