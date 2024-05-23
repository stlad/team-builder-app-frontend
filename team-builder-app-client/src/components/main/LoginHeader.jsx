import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import classes from './styles/LoginHeader.module.css'
import { securityUtils } from '../../globals/SecurityUtils';
import TextField from '@mui/material/TextField';

const LoginHeader = () => {

    // const [logFlag, setLogFlag] = useState(true);
    // const [logData, setLogData] = useState(null);
    // useState(() => { }, [logFlag])
    const navigate = useNavigate();

    // const login = () => {
    //     console.log("LOGGING")

    //     if (logData === null || logData.email === null || logData.email === undefined || logData.email === "")
    //         return
    //     securityUtils.login(logData.email, logData.password);
    //     setLogFlag(!logFlag);
    // }

    const logout = () => {
        // console.log("LOGGING OUT")
        securityUtils.logout();
        navigate('/')
        // setLogFlag(!logFlag);
    }

    // const handleInputChange = (evt) => {
    //     const name = evt.target.name;
    //     const value =
    //         evt.target.type === "checkbox" ? !evt.target.checked : evt.target.value;
    //     setLogData({
    //         ...logData,
    //         [name]: value === "" ? null : value
    //     })
    // }

    if (!securityUtils.isLogged()) {
        return (
            // <div className={`${classes.row}`}>
            //     <div className={`${classes.loginBtn}`}>
            //         <form className={`${classes.col}`}>
            //             <TextField id="outlined-basic" label="email" name='email' variant="outlined" onChange={handleInputChange} />
            //             <TextField id="outlined-basic" label="password" name='password' variant="outlined" type="password" onChange={handleInputChange} />
            //             <Button variant="outlined" onClick={login}>Вход</Button>

            //         </form>
            //         <Button variant="outlined" onClick={() => navigate("/register")}>Регистрация</Button>
            //     </div>
            // </div>

            <div>
                <NavLink to='register'>Зарегистрироваться</NavLink>
                <span>/</span>
                <NavLink to='signin'>Войти</NavLink>
            </div>


        )
    }


    return (
        <div className={classes.wrapper}>

            <div className={classes.name}>
                {localStorage.getItem("lastname")} {localStorage.getItem("firstname")}
            </div>
            <div className={classes.group}>
                {localStorage.getItem("academicGroup")}

            </div>

            <div onClick={logout} className={classes.out}>

                <img src="door.png" alt="out" />

            </div>

        </div>



    )
}


export default LoginHeader;