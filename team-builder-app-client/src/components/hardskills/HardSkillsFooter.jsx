import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import classes from './styles/HardSkillsFooter.module.css'

const HardSkillsFooter = () =>{


    return (
        <div className={`${classes.row} ${classes.center}`}>
            <p><Link to='/' >На главную</Link></p>
            <p><Link to='/' >Назад</Link></p>
            <p><Link to='/belbin' >Тест Белбина</Link></p>
            
        </div>
    )
}


export default HardSkillsFooter;