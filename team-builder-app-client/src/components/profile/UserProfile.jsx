import React, { useState, useEffect } from 'react';
import { securityUtils } from '../../globals/SecurityUtils';
import UserForm from './UserForm';
import BelbinResult from './BelbinResult';
import HardSkillsResult from './HardskillsResult';
import classes from './styles/Profile.module.css'
import HardSkillsPage from '../hardskills/HardSkills';
import Button from '@mui/material/Button';
import { useNavigate, useParams, Link } from "react-router-dom";

const UserProfile = () => {
    useEffect(() => { document.title = 'TBA Профиль' }, [])
    let navigate = useNavigate();

    if (!securityUtils.isLogged()) {
        return (
            <div className={`${classes.main_profile}`}>
                Пользователь не авторизован
            </div>
        )
    }
    return (

        <div className={classes.wrapper}>


            <BelbinResult />
            <hr />
            <div className={classes.forms}>
                <UserForm />
                <HardSkillsPage />
            </div>


        </div>
    )
}


export default UserProfile;