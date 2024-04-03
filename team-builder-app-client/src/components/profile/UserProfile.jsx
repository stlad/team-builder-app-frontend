import React, { useState, useEffect } from 'react';
import { securityUtils } from '../../globals/SecurityUtils';
import UserForm from './UserForm';


const UserProfile = () =>{
    useEffect(()=>{document.title='TBA Профиль'},[])

    if(!securityUtils.isLogged()){
        return(
            <div>
                Пользователь не авторизован
            </div>
        )
    } 
    return (

        <div>
            <UserForm />
        </div>
    )
}


export default UserProfile;