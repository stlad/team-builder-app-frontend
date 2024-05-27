
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
            <div className={classes.row}>
                <button onClick={() => navigate("/belbin")} >Командные роли</button>
                <button onClick={() => navigate("/hardskills")} disabled={!securityUtils.isLogged()}>Профессиональные роли</button>
            </div>
            {/* <div className={`${classes.row}`}>
                <Button variant="outlined" onClick={() => navigate("/belbin")} >Командные роли</Button>
                <Button variant="outlined" onClick={() => navigate("/hardskills")} disabled={!securityUtils.isLogged()}>Профессиональные роли</Button>
            </div> */}
            <hr />
            <div className={classes.col}>
                <button onClick={() => navigate("/students/all")} disabled={!securityUtils.isLogged()}>Студенты</button>
                <button onClick={() => navigate("/teams")} disabled={!securityUtils.isLogged()}>Команды</button>
                <button onClick={() => navigate("/projects")} disabled={!securityUtils.isLogged()}>Проекты</button>

            </div>
            <hr />
            <div className={classes.col}>
                <button onClick={() => navigate("/profile")} disabled={!securityUtils.isLogged()}>Профиль</button>
                <button onClick={() => navigate("/teamsme")} disabled={!securityUtils.isLogged()}>Моя команда</button>
            </div>
        </div>
    )
}


export default MainPage;