import React, { useState, useEffect } from 'react';
import { securityUtils } from '../../globals/SecurityUtils';
import UserForm from './UserForm';
import BelbinResult from './BelbinResult';
import HardSkillsResult from './HardskillsResult';
import classes from './styles/Profile.module.css'
import HardSkillsPage from '../hardskills/HardSkillsPage';
import Button from '@mui/material/Button';
import { useNavigate, useParams,Link } from "react-router-dom";

const UserProfile = () =>{
    useEffect(()=>{document.title='TBA Профиль'},[])
    let navigate = useNavigate();

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
                    {/* <HardSkillsResult /> */}
                    <HardSkillsPage />
                    
                </div>
            <hr />
            <Button variant="outlined" onClick={()=>navigate("/")}>На главную</Button>
        </div>
    )
}


export default UserProfile;