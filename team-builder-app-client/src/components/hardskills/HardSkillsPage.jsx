import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";

const HardSkillsPage = () =>{
    useEffect(()=>{document.title='Проф. Компетенции'},[])


    return (
        <div>
            <p><Link to='/' >На главную</Link></p>
            <p><Link to='/' >Назад</Link></p>
            <p><Link to='/belbin' >Тест Белбина</Link></p>
            
        </div>
    )
}


export default HardSkillsPage;