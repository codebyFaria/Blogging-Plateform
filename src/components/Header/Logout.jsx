import React from "react"
import authService from '../../Appwrite/Auth'
import {userLogout} from '../../Store/slice'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from "../Button";


function Logout() {
    const navigate = useNavigate();   
    const dispatch = useDispatch();
 
    function LogoutHandeler() {
       authService.logout().then(()=>{
        dispatch(userLogout())
        navigate(`/`);  
       }) 
    }

    return (
   <button className="inline-block w-full text-center px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full"  onClick={LogoutHandeler} >Logout</button>
    )
}

export default Logout