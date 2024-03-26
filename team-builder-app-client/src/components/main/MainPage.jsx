

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";

const MainPage = () =>{
    useEffect(()=>{document.title='TBA Главная'},[])


    return (
        <div>
            <p><Link to='/belbin' >Командные роли</Link></p>
            <p><Link to='/hardskills' >Профессиональные роли</Link></p>
            
        </div>
    )
}


export default MainPage;