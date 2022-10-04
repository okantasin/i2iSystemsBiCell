import {
    GET_ALL_USERS
} from "../actions/userActions";

import { users } from "../initialValues/userItems"

const initialValues = {
    users,
}

function userReducer(state = initialValues, { type, payload }){
    switch (type) {
    case GET_ALL_USERS: {
        return {
            ...state,
            users: payload,
        };
    }
    default:
        return { ...state };
}

}

export default userReducer;