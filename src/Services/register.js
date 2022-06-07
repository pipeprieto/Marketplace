import { users } from "../users-data";

const register = async credentials => {
    console.log(window.localStorage.getItem("users"))
    if(window.localStorage.getItem("users") == null) {
        users.push({
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            email: credentials.email,
            password: credentials.password
        })
        window.localStorage.setItem("users", JSON.stringify(users));
        return users;
    }else{
        let userStorage = JSON.parse(window.localStorage.getItem("users"));
        console.log(credentials)
        userStorage.push({
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            email: credentials.email,
            password: credentials.password
        })
        window.localStorage.setItem("users", JSON.stringify(userStorage));
        return userStorage;
    }
}

export default register;