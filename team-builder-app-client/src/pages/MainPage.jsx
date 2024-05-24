
import classes from './MainPage.module.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { securityUtils } from '../globals/SecurityUtils';

const MainPage = () => {
    useEffect(() => { document.title = 'TBA Главная' }, [])


    let navigate = useNavigate();

    return (
        <div className={`${classes.col} ${classes.menu} `}>
            <div className={`${classes.row}`}>
                <Button variant="outlined" onClick={() => navigate("/belbin")} >Командные роли</Button>
                <Button variant="outlined" onClick={() => navigate("/hardskills")} disabled={!securityUtils.isLogged()}>Профессиональные роли</Button>
            </div>

            <hr />

            <Button variant="outlined" onClick={() => navigate("/students/all")} disabled={!securityUtils.isLogged()}>Студенты</Button>
            <Button variant="outlined" onClick={() => navigate("/teams")} disabled={!securityUtils.isLogged()}>Команды</Button>
            <Button variant="outlined" onClick={() => navigate("/projects")} disabled={!securityUtils.isLogged()}>Проекты</Button>
            <hr />

            <Button variant="outlined" onClick={() => navigate("/profile")} disabled={!securityUtils.isLogged()}>Профиль</Button>
            <Button variant="outlined" onClick={() => navigate("/teamsme")} disabled={!securityUtils.isLogged()}>Моя команда</Button>

        </div>
    )
}


export default MainPage;