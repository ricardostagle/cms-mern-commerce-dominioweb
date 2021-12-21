import axios from 'axios';
import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER, USERS_LOADING, NEW_USER_FAIL} from './types';
import { returnErrors } from './errorActions';

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios.get('/api/users')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addUser = (user) => (dispatch) => {

    axios.post('/api/users', user)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'NEW_USER_FAIL'));
            dispatch({
                type: NEW_USER_FAIL
            });
        });

}

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`/api/users/${id}`)
        .then(res => dispatch({
            type: DELETE_USER,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const updateUser = (id, user) => (dispatch) => {
    axios.put(`/api/users/${id}`, user)
        .then(res => dispatch({
            type: UPDATE_USER,
            payload: Promise.all([id, res.data])
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}
