import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import Slider from '@mui/material/Slider';
import { useLocation } from "react-router-dom";

const BelbinResults = (props) =>{
    const location = useLocation();
    const [blank, setBlank] = useState(location.state)
    const [scores, setScores] = useState(null)


    useEffect(()=>{
        if(blank !== null){
            belbinApi.postQuestionBlank(blank).then(resp => resp.json())
            .then(scores => setScores(scores.roleScores))
        }
    }, [])

    useEffect(()=>{
    }, [scores])

    return (
        <div>
            {scores?.map(score =>
            <div key={score?.role.id}>
                <p>{score.role.rusName} ({score.role.engName}) {score.score}</p> 
            </div>)}
        </div>
    )
}

export default BelbinResults