import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';

const BelbinTestMainPage = () =>{
    useEffect(()=>{document.title='Тест Белбина'},[])
    const [questionBlank, setQuestionBlank] = useState('');
    const [currentTestBlock, setCurrentTestBlock] = useState(1);


    return (
        <div></div>
    )
}


export default BelbinTestMainPage;