import {types} from "./types";

const initialState = {
    users:[],
    UserMore: null,
}


function UsersReducer(state = initialState, action) {
    if(action.type === types.USERS) {
        return {...state, users: action.payload}
    }else if(action.type === types.USER_ID) {
        return {...state, UserMore: action.payload }
    }
    return state
}

export default UsersReducer;