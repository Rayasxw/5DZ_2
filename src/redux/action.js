import {types} from "./types";




function getUsersAction (users) {
    return {
        type: types.USERS,
        payload: users
    }
}
function getUserDetails(user) {
    return {
        type: types.USER_ID,
        payload: user,
    };
}
export function fetchUsersGetMoreAction(userId) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json()

        dispatch(getUserDetails(data))

    }

}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        dispatch(getUsersAction(data))

    }

}
