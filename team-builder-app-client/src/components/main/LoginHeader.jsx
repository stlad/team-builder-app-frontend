import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import classes from './styles/LoginHeader.module.css'
import { securityUtils} from '../../globals/SecurityUtils';
import TextField from '@mui/material/TextField';

const LoginHeader = () =>{

    const [logFlag, setLogFlag] = useState(true);
    const [logData, setLogData] = useState(null);
    useState(()=>{},[logFlag])
    const navigate = useNavigate();

    const login= ()=>{
        console.log("LOGGING")
        
        if(logData === null || logData.email===null || logData.email===undefined || logData.email ==="")
            return
        securityUtils.login(logData.email, logData.password);
        setLogFlag(!logFlag);
    }

    const logout = ()=>{
        console.log("LOGGING OUT")
        securityUtils.logout();
        setLogFlag(!logFlag);
    }

    const  handleInputChange = (evt) => {
        const name = evt.target.name;
        const value =
          evt.target.type === "checkbox" ? !evt.target.checked : evt.target.value;
        setLogData({
          ...logData,
          [name]: value ==="" ? null : value
        })
      }

    if(!securityUtils.isLogged()){
        return (
            <div className={`${classes.row}`}>
                <div className={`${classes.loginBtn}`}>
                    <form className={`${classes.col}`}>
                        <TextField id="outlined-basic" label="email" name='email' variant="outlined" onChange={handleInputChange}/>
                        <TextField id="outlined-basic" label="password" name='password'variant="outlined" type="password" onChange={handleInputChange}/>
                        <Button variant="outlined" onClick={login}>Вход</Button>
                        
                    </form>
                        <Button variant="outlined" onClick={()=>navigate("/register")}>Регистрация</Button>
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
                {localStorage.getItem("lastname")} {localStorage.getItem("firstname")} {localStorage.getItem("academicGroup")}
            </div>
        </div>
    )
}


export default LoginHeader;