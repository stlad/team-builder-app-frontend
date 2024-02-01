import React, { useState, useEffect } from 'react';
import belbinApi from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import Slider from '@mui/material/Slider'

const BelbinTestBlock = (props)=>{

    const [currentBlank, setCurrentBlank] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [blockInfo, setBlockInfo] = useState(null)
    const [maxPoints, setMaxPoint] = useState(10)
    const [pointsLeft, setPointsLeft] = useState(10)

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
        let sum=0;
        if(currentBlank === null) return;
        for(let key of Object.keys(currentBlank)){
            sum += currentBlank[key];
        }
        setPointsLeft(maxPoints - sum)

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
    const handleSliderChange = (event, newValue, activeThumb) =>{
        let val = Number(event.target.value);
        updateBlank(event.target.name, newValue)
    }


    return (
        <div>
            <div>
                <p>{blockInfo?.blockContent}</p>
                <p>Осталось распределить: {pointsLeft} очков</p>
            </div>

            <div>
                {questions?.map(qst =>
                    <div key={qst?.id}>
                        <QuestionCard getBlank={()=>currentBlank} 
                        addToBlank={(k,v) => updateBlank(k,v)} 
                        question={qst}
                        />

                        <div style={{width: "30em", margin: "auto" }}>
                            <Slider aria-label="points" defaultValue={0} valueLabelDisplay="on" 
                            step={1} marks min={0} max={10} 
                            onChange={handleSliderChange} name={qst.attachedRole.engName}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BelbinTestBlock;