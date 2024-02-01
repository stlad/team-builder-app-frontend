import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";

const BelbinFooter = () =>{
    useEffect(()=>{document.title='Тест Белбина'},[])


    return (
        <div>
            <p><Link to='/' >На главную</Link></p>
            <p><Link to='/' >Назад</Link></p>
            
        </div>
    )
}


export default BelbinFooter;