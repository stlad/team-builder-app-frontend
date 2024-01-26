import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';

const BelbinTHeader = () =>{
    useEffect(()=>{document.title='Тест Белбина'},[])


    return (
        <div>Тест Белбина!!</div>
    )
}


export default BelbinTHeader;