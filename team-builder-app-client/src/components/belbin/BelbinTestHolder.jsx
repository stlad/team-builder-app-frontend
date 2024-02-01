import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import BelbinTestBlock from './BelbinTestBlock';

const BelbinTestHolder = () =>{

    const [finalBlank, setFinalBlank] = useState(null);
    const [allBlanks, setAllBlanks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [commitFlag, setCommitFlag] = useState(true)
    //const [isTestOver, setIsTestOver] = useState(false)

    useEffect(()=>{
        belbinApi.getQuestionBlank().then(r=>r.json())
        .then(blank => setFinalBlank(blank.blank));
        setCurrentPage(1)
    },[])

    useEffect(()=>{
        console.log(finalBlank)
        if(currentPage===7){
            console.log("ТЕСТ ПРОЙДЕН")
            getResults(finalBlank)
        }
    }, [finalBlank])

    const getResults = ()=>{
        belbinApi.postQuestionBlank({"blank":finalBlank}).then(resp => resp.json())
        .then(resp => console.log(resp))
    }

    const nextPage = () =>{
        if(currentPage < 7){
            setCurrentPage(currentPage + 1);
            setCommitFlag(!commitFlag)
            return
        }
        if(currentPage === 7){
            setCommitFlag(!commitFlag)
            return
        }
    }

    const prevPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const getBlankFromPage = (blank)=>{
        if(currentPage > 1 && currentPage < 8 ){
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
            <button onClick={prevPage}>Назад</button>
            <button onClick={nextPage}>Дальше</button>
        </div>
    )

}

export default BelbinTestHolder;