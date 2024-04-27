
import classes from './styles/MainPage.module.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';

const MainPage = () =>{
    useEffect(()=>{document.title='TBA Главная'},[])

    
    let navigate = useNavigate(); 
    
    return (
        <div className={`${classes.col} ${classes.menu} `}>
            <Button variant="outlined" onClick={()=>navigate("/belbin")}>Командные роли</Button>
            <Button variant="outlined" onClick={()=>navigate("/hardskills")}>Профессиональные роли</Button>
            <Button variant="outlined" onClick={()=>navigate("/profile")}>Профиль</Button>
            <Button variant="outlined" onClick={()=>navigate("/students/all")}>Студенты</Button>

        </div>
    )
}


export default MainPage;