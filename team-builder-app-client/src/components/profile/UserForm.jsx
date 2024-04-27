import React, { useState, useEffect } from 'react';
import { securityUtils } from '../../globals/SecurityUtils';
import {adminApi} from '../../globals/api.js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import classes from './styles/UserForm.module.css'

const UserForm = () =>{

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        
       adminApi.getUserById(securityUtils.getCurrentUserId()).then(resp=> resp.json())
       .then(data => setCurrentUser(data)) 
    },[])

    const  handleInputChange = (evt) => {
        const name = evt.target.name;
        const value =
          evt.target.type === "checkbox" ? !evt.target.checked : evt.target.value;
          setCurrentUser({
          ...currentUser,
          [name]: value ==="" ? null : value
        })
        console.log(currentUser)
      }
    
    const handleSubmit = ()=>{
        adminApi.updateUserById(currentUser.id, currentUser).then(data => 
            window.location.reload())
    }

    if(currentUser === null){
        return (
            <div className={`${classes.col} ${classes.user_form_main}`}>
                <p>Не удалось получить данные о пользователе</p>
            </div>
        )
    }

    return (
        <div>
            <div >
                <form className={`${classes.col} ${classes.user_form_main}`}>
                    <TextField id="outlined-required" label="Логин" disabled placeholder='Логин' value={currentUser.username} name='username' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Имя"  placeholder='Имя' value={currentUser.firstname} name='firstname' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Фамилия"  placeholder='Фамилия' value={currentUser.lastname} name='lastname' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Отчество"  placeholder='Отчество' value={currentUser.middlename} name='middlename' onChange={handleInputChange}/>
                    <TextField id="outlined-required" label="Группа"  placeholder='Группа' value={currentUser.academicGroup} name='academicGroup' onChange={handleInputChange}/>
                    <Button variant="outlined" onClick={handleSubmit}>Сохранить</Button>
                </form>
            </div>
        </div>
    )
}

export default UserForm