import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';

const BelbinTestMainPage = () =>{
    const [questionBlank, setQuestionBlank] = useState(null);
    const [currentTestBlockNumber, setCurrentTestBlockNumber] = useState(0);
    const [blockInfo, setblockInfo] = useState(null)
    const [questions, setQuestions] = useState(null)


    useEffect(()=>{
        belbinApi.getQuestionBlank().then(resp=>resp.json())
        .then(resp =>setQuestionBlank(resp.blank))
        .then(setCurrentTestBlockNumber(1));

    },[])

    useEffect(()=>{
        if(currentTestBlockNumber > 0) {
            belbinApi.getQuestionBlock(currentTestBlockNumber).then(resp=>resp.json())
            .then(resp => {
                setblockInfo(resp.blockQuestion);
                setQuestions(resp.questions)
            })
        }
    },[currentTestBlockNumber])

    useEffect(()=>{
       // console.log(blockInfo);
    },[blockInfo]);

    useEffect(()=>{
       // console.log(questions);
    },[questions]); 

    const nextPage = () =>{
        if(currentTestBlockNumber < 8){
            setCurrentTestBlockNumber(currentTestBlockNumber + 1);
        }
    }

    const prevPage = () =>{
        if(currentTestBlockNumber > 1){
            setCurrentTestBlockNumber(currentTestBlockNumber - 1);
        }
    }

    return (
        <div>
            <div>
                <p>{blockInfo?.blockContent}</p>
            </div>
            <div>
                {questions?.map(qst =>
                    <div key={qst?.id}>
                        <QuestionCard getBlank={()=>questionBlank} question={qst}/>
                    </div>
                )}
            </div>
            <button onClick={prevPage}>Назад</button>
            <button onClick={nextPage}>Дальше</button>
        </div>
    )
}


export default BelbinTestMainPage;