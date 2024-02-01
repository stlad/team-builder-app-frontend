import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import BelbinTestBlock from './BelbinTestBlock';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const BelbinTestHolder = () =>{

    const [finalBlank, setFinalBlank] = useState(null);
    const [allBlanks, setAllBlanks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [commitFlag, setCommitFlag] = useState(true)
    const navigate = useNavigate()
    

    useEffect(()=>{
        belbinApi.getQuestionBlank().then(r=>r.json())
        .then(blank => setFinalBlank(blank.blank));
        setCurrentPage(1)
    },[])

    useEffect(()=>{
        // console.log("Page "+currentPage)
    },[currentPage])

    useEffect(()=>{
        // console.log("blank updated ")
        if(currentPage === 8){
            console.log("ТЕСТ ПРОЙДЕН")
            navigate('/belbin/results' ,{
                state: {blank:finalBlank}
            })
        }
    },[finalBlank])

    const nextPage = () =>{
        if(currentPage <= 7){
            setCurrentPage(currentPage + 1);
            setCommitFlag(!commitFlag)
            return
        }
        if(currentPage === 8){
            setCommitFlag(!commitFlag)
        }
    }

    const getBlankFromPage = (blank)=>{
        if(currentPage > 1 && currentPage <= 8 ){
            allBlanks.push(blank)
            let newFinal = {}

            for(let key of Object.keys(finalBlank)){
                newFinal[key] = finalBlank[key] + blank[key]
            }
            setFinalBlank(newFinal)
                      
        }
    }

    return (
        <div>
            <BelbinTestBlock page={currentPage} blankHolder={getBlankFromPage} commitFlag={commitFlag} getBlank = {getBlankFromPage}/> 
                {/* <button onClick={prevPage}>Назад</button> */}
            <Button variant="contained" onClick={nextPage}>Дальше</Button>
        </div>
    )
}

export default BelbinTestHolder;