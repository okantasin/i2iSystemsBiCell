import axios from "axios";

class UserService{
    constructor(){
        this.baseUrl="http://localhost:8080/api/v1/categories"
    }
    async getAllUsers(){
        return await axios
        .get(this.baseUrl)
        .then((resp)=>resp.data)
        .catch((err)=>console.log(err));
    }
}
export default UserService;