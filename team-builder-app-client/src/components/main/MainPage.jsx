

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';

const MainPage = () =>{
    useEffect(()=>{document.title='TBA Главная'},[])

    
    let navigate = useNavigate(); 
    
    return (
        <div>
            <Button variant="outlined" onClick={()=>navigate("/belbin")}>Командные роли</Button>
            <Button variant="outlined" onClick={()=>navigate("/hardskills")}>Профессиональные роли</Button>
            <Button variant="outlined" onClick={()=>navigate("/profile")}>Профиль</Button>

        </div>
    )
}


export default MainPage;