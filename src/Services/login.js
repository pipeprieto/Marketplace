import { users } from "../users-data";

const login = async credentials => {
    console.log(window.localStorage.getItem("users"))
    if(window.localStorage.getItem("users") == null) {
        window.localStorage.setItem("users", JSON.stringify(users));
        return null;
    }else{
        let userStorage = JSON.parse(window.localStorage.getItem("users"));
        let userMap = {};
        userStorage.map( user => {
            if(user.email === credentials.email && user.password === credentials.password){
                userMap = user;
            }
        })
        return userMap;
    }
}

export default login;