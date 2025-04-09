import  { useState} from "react"
import { logout as logoutHandler} from "./userLoginout"

const getUserDetails = () => {
    const userDetaitls = localStorage.getItem('user');

    if(userDetaitls) {
        return JSON.parse(userDetaitls);
    }else{
        return null;
    }
}

export const useUserDetails = () => {
    const [userDetaitls, setUserDetails] = useState(getUserDetails())

    const logout = () =>{
        logoutHandler()
    }

    return {
        isLogged: Boolean(userDetaitls),
        username: userDetaitls?.username ? userDetaitls.username : 'Guest',
        logout
    }
}