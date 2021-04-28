import { useState ,useContext , useEffect } from "react";
import UserContext from '../context/user'
import {  getUserById } from "../services/firebassServ";



export default function useUser() {
    
    const [activeUser, setActiveUser] = useState({});
    const {User} = useContext(UserContext)
    useEffect(()=> {

       async function getUserObjByUserId(){
           const [res] = await getUserById(User.uid)
           setActiveUser(res)
          
       }
       if(User?.uid){
        getUserObjByUserId()
        
       }
    } , [User])

    return {user : activeUser}
}
