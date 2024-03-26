import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import classes from './styles/LoginHeader.module.css'
import { securityUtils} from '../../globals/SecurityUtils';

const LoginHeader = () =>{

    const [logFlag, setLogFlag] = useState(true);
    useState(()=>{},[logFlag])


    const login= ()=>{
        console.log("LOGGING")
        securityUtils.mockLogin();
        setLogFlag(!logFlag);
    }

    const logout = ()=>{
        console.log("LOGGING OUT")
        securityUtils.logout();
        setLogFlag(!logFlag);
    }

    if(!securityUtils.isLogged()){
        return (
            <div className={`${classes.row}`}>
                <div className={`${classes.loginBtn}`}>
                    <Button variant="outlined" onClick={login}>Вход</Button>
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