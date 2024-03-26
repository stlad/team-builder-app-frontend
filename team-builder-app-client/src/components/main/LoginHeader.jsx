import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import classes from './styles/LoginHeader.module.css'

const LoginHeader = () =>{

    const [logFlag, setLogFlag] = useState(true);
    useState(()=>{},[logFlag])


    const mockLogin = ()=>{
        console.log("LOGGING")
        localStorage.setItem("user_id", 1);
        localStorage.setItem("username", "testusername");
        localStorage.setItem("firstname", "Никита");
        localStorage.setItem("lastname", "Никитин");
        setLogFlag(!logFlag);
    }

    const logout = ()=>{
        console.log("LOGGING OUT")
        localStorage.removeItem("user_id");
        localStorage.removeItem("username");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        setLogFlag(!logFlag);
    }

    if(localStorage.getItem("user_id")===null){
        return (
            <div className={`${classes.row}`}>
                <div className={`${classes.loginBtn}`}>
                    <Button variant="outlined" onClick={mockLogin}>Вход</Button>
                </div>
            </div>
        )
    }


    return (
        <div className={`${classes.row}`}>
            <div className={`${classes.loginBtn}`}>
                <Button variant="outlined" onClick={logout}>Выход</Button>
            </div>
            <div>
                {localStorage.getItem("username")} {localStorage.getItem("firstname")}
            </div>
        </div>
    )
}


export default LoginHeader;