import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import BelbinTestBlock from './BelbinTestBlock';

const BelbinTestHolder = () =>{

    const [finalBlank, setFinalBlank] = useState(null);
    const [allBlanks, setAllBlanks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [commitFlag, setCommitFlag] = useState(true)

    useEffect(()=>{
        belbinApi.getQuestionBlank().then(r=>r.json())
        .then(blank => setFinalBlank(blank.blank));

        setCurrentPage(1)
    },[])

    useEffect(()=>{

    }, [currentPage])


    const nextPage = () =>{
        if(currentPage < 7){
            setCurrentPage(currentPage + 1);
            setCommitFlag(!commitFlag)
            return
        }
        if(currentPage == 7){
            setCommitFlag(!commitFlag)
            console.log("ТЕСТ ПРОЙДЕН")
            //calculateResult()
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

            for(let key of Object.keys(finalBlank)){
                console.log(key)
                console.log(finalBlank[key])
                console.log(blank[key])

                setFinalBlank({
                    ...finalBlank,
                    [key] : finalBlank[key]+blank[key]
                })
            }
            console.log(finalBlank)
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