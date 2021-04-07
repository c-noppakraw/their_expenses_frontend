import axios from 'axios';
import { SET_LISTS, ADD_LISTS, GET_LISTS, REMOVE_LISTS } from './type';

export const setListExpensives = () => async (dispatch) => {
    const {data, status} = await axios.get(
        `http://localhost:4000/expenses`
    );
    if (status === 200) {
        dispatch({
            type: SET_LISTS,
            payload: data,
        });
    }
};

export const getListExpensives = (id) => async (dispatch) => {
    const {data, status} = await axios.get(
        `http://localhost:4000/expenses/${id}`
    );
    if (status === 200) {
        dispatch({
            type: GET_LISTS,
            payload: data,
        });
    }
};

export const addListExpensives = (description, amount, month, year) => async (dispatch) => {
    const { data, status } = await axios.post(
        `http://localhost:4000/expenses`,
        {
            description,
            month,
            year,
            amount,
        }
    );
    if (status === 201) {
        dispatch({
            type: ADD_LISTS,
            payload: data,
        });
    }
};

export const removeListExpensives = (id) => async (dispatch) => {
    const { status } = await axios.delete(
        `http://localhost:4000/expenses/${id}`
    );
    if (status === 200) {
        dispatch({
            type: REMOVE_LISTS,
            payload: id,
        });
    }
}