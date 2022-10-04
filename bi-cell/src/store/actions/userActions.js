import UserService from "../../services/UserService";
export const GET_ALL_USERS ="GET_ALL_USERS";

const userService = new UserService();

export function getAllUsers() {
    return function(dispatch){
        userService
        .getAllUsers()
        .then((resp=>resp.data))
        .then((resp)=>dispatch({type:GET_ALL_USERS,payload:resp}))
    };
}