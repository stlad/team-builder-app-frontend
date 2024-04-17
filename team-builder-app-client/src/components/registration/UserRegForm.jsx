import React, { useState, useEffect } from 'react';
import { securityUtils } from '../../globals/SecurityUtils.js';
import {adminApi} from '../../globals/api.js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import classes from './styles/UserForm.module.css'
import { useNavigate, useParams,Link } from "react-router-dom";

const UserRegForm = () =>{

    const [currentUser, setCurrentUser] = useState({
        "firstname":"",
        "lastname":"",
        "middlename":"",
        "email":"",
        "username":"",
        "systemRole":"STUDENT"
    });

    let navigate = useNavigate();
    useEffect(()=>{
    },[])

    const  handleInputChange = (evt) => {
        const name = evt.target.name;
        const value =
          evt.target.type === "checkbox" ? !evt.target.checked : evt.target.value;
          setCurrentUser({
          ...currentUser,
          [name]: value ==="" ? null : value
        })
      }
    
    const handleSubmit = ()=>{
        adminApi.register(currentUser).then(data => 
            securityUtils.login(currentUser.email, currentUser.password))
            .then(data=>navigate("/"))
    }

    // if(currentUser === null){
    //     return (
    //         <div className={`${classes.col} ${classes.user_form_main}`}>
    //             <p>Не удалось получить данные о пользователе</p>
    //         </div>
    //     )
    // }

    return (
        <div>
            <div >
                <form className={`${classes.col} ${classes.user_form_main}`}>
                    <TextField id="outlined-required" label="Логин" placeholder='Логин' value={currentUser.username} name='username' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Имя"  placeholder='Имя' value={currentUser.firstname} name='firstname' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Фамилия"  placeholder='Фамилия' value={currentUser.lastname} name='lastname' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Отчество"  placeholder='Отчество' value={currentUser.middlename} name='middlename' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="email"  placeholder='email' value={currentUser.email} name='email' onChange={handleInputChange}/>
                        <TextField id="outlined-basic" label="password" name='password'variant="outlined" type="password" onChange={handleInputChange}/>
                    <Button variant="outlined" onClick={handleSubmit}>Сохранить</Button>
                </form>
            </div>
        </div>
    )
}

export default UserRegForm