import React, { useState, useEffect } from 'react';
import { belbinApi } from '../globals/api';
import QuestionCard from '../components/belbin/questions/QuestionCard';
import BelbinTestBlock from '../components/belbin/BelbinTestBlock';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import classes from './BelbinTestPage.module.css'

const BelbinTestPage = () => {

    const [finalBlank, setFinalBlank] = useState(null);
    const [allBlanks, setAllBlanks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [commitFlag, setCommitFlag] = useState(true)
    const [nextPageAvaliable, setNextAvailable] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        belbinApi.getQuestionBlank().then(r => r.json())
            .then(blank => setFinalBlank(blank.blank));
        setCurrentPage(1)
    }, [])

    useEffect(() => {
        // console.log("blank updated ")
        if (currentPage === 8) {
            console.log("ТЕСТ ПРОЙДЕН")
            navigate('/belbin/results', {
                state: { blank: finalBlank }
            })
        }
    }, [finalBlank])

    const nextPage = () => {
        if (currentPage <= 7) {
            setCurrentPage(currentPage + 1);
            setCommitFlag(!commitFlag)
            return
        }
        if (currentPage === 8) {
            setCommitFlag(!commitFlag)
        }
    }

    const getBlankFromPage = (blank) => {
        if (currentPage > 1 && currentPage <= 8) {
            allBlanks.push(blank)
            let newFinal = {}

            for (let key of Object.keys(finalBlank)) {
                newFinal[key] = finalBlank[key] + blank[key]
            }
            setFinalBlank(newFinal)

        }
    }

    return (
        <div className={classes.wrapper}>
            <BelbinTestBlock page={currentPage} commitFlag={commitFlag} getBlank={getBlankFromPage} allowNext={setNextAvailable} />
            {/* <button onClick={prevPage}>Назад</button> */}

            {nextPageAvaliable ?
                <button onClick={nextPage} > Продолжить</button>
                :
                <button onClick={nextPage} disabled> Не распределены все баллы</button>
            }



        </div>
    )
}

export default BelbinTestPage;