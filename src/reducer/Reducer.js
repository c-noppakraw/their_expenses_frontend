import { SET_LISTS, ADD_LISTS, GET_LISTS } from '../actions/type';

const initialState = [];

export default (state = initialState, action) => {
    // console.log(action.data.data);
    switch (action.type) {
        case SET_LISTS: {
            return (state = [...action.payload.data]);
        }
        case ADD_LISTS: {
            return (state = [action.payload, ...state]);
        }
        case GET_LISTS: {
            return (state = [action.payload.data]);
        }
        default:
            return state;
    }
}