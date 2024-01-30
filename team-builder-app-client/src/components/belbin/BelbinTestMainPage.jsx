import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';

const BelbinTestMainPage = () =>{
    const [questionBlank, setQuestionBlank] = useState(null);
    const [currentTestBlockNumber, setCurrentTestBlockNumber] = useState(0);
    const [blockInfo, setblockInfo] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [pointsLeftPerblock, setPointsLeftPerblock] = useState(10);


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
                setPointsLeftPerblock(10)
            })
        }
    },[currentTestBlockNumber])

    useEffect(()=>{
       // console.log(blockInfo);
    },[blockInfo]);

    useEffect(()=>{
       // console.log(questions);
    },[questions]); 

    

    useEffect(()=>{
         console.log(questionBlank);
     },[questionBlank]); 

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

    const updateBlank = (key, valueToAdd) =>{
        setQuestionBlank({
            ...questionBlank,
            [key] : questionBlank[key]+valueToAdd
        })
    }

    return (
        <div>
            <div>
                <p>{blockInfo?.blockContent}</p>
                <p>Осталось распределить: {pointsLeftPerblock} очков</p>
            </div>
            <div>
                {questions?.map(qst =>
                    <div key={qst?.id}>
                        <QuestionCard getBlank={()=>questionBlank} 
                        addToBlank={(k,v) => updateBlank(k,v)} 
                        question={qst}
                        pointsLeft={()=>pointsLeftPerblock}/>
                    </div>
                )}
            </div>
            <button onClick={prevPage}>Назад</button>
            <button onClick={nextPage}>Дальше</button>
        </div>
    )
}


export default BelbinTestMainPage;