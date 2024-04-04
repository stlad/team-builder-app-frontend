import React, { useState, useEffect } from 'react';
import { securityUtils } from '../../globals/SecurityUtils';
import UserForm from './UserForm';
import BelbinResult from './BelbinResult';
import HardSkillsResult from './HardskillsResult';
import classes from './styles/Profile.module.css'

const UserProfile = () =>{
    useEffect(()=>{document.title='TBA Профиль'},[])

    if(!securityUtils.isLogged()){
        return(
            <div className={`${classes.main_profile}`}>
                Пользователь не авторизован
            </div>
        )
    } 
    return (

        <div className={`${classes.main_profile}`}>
            <hr />
                <div className={`${classes.row} ${classes.main_profile}`}>
                    <UserForm />
                    <BelbinResult />
                    <HardSkillsResult />
                </div>
            <hr />
        </div>
    )
}


export default UserProfile;