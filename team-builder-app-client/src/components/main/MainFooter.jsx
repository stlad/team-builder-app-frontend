

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';

const MainFooter = () =>{
    useEffect(()=>{document.title='TBA Главная'},[])

    
    let navigate = useNavigate(); 
    
    return (
        <div>
            <Button variant="outlined" onClick={()=>navigate("/")}>На главную</Button>

        </div>
    )
}


export default MainFooter;