import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';

const BelbinTestBlock = (props)=>{

    const [currentBlank, setCurrentBlank] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [blockInfo, setBlockInfo] = useState(null)

    useEffect(()=>{
        belbinApi.getQuestionBlank().then(r=>r.json())
        .then(blank=> setCurrentBlank(blank.blank));

        belbinApi.getQuestionBlock(props.page).then(resp=>resp.json())
            .then(resp => {
                setBlockInfo(resp.blockQuestion);
                setQuestions(resp.questions)
            })


    }, [props])

    useEffect(()=>{
        //console.log(currentBlank)
    },[currentBlank])

    useEffect(()=>{
        props.getBlank(currentBlank)
    }, [props.commitFlag])


    const updateBlank = (key, valueToAdd) =>{
        console.log(key, valueToAdd)
        setCurrentBlank({
            ...currentBlank,
            [key] : valueToAdd
        })
    }


    return (
        <div>
            <div>
                <p>{blockInfo?.blockContent}</p>
                {/* <p>Осталось распределить: {pointsLeftPerblock} очков</p> */}
            </div>

            <div>
                {questions?.map(qst =>
                    <div key={qst?.id}>
                        <QuestionCard getBlank={()=>currentBlank} 
                        addToBlank={(k,v) => updateBlank(k,v)} 
                        question={qst}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BelbinTestBlock;