import React, { useState, useEffect } from 'react';
import { belbinApi } from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import Slider from '@mui/material/Slider';
import MyInputRange from '../Slider/myInputRange';
import classes from './styles/BelbinTestBlock.module.css'



const MAX_POINTS = 10


const BelbinTestBlock = (props) => {

    const [currentBlank, setCurrentBlank] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [blockInfo, setBlockInfo] = useState(null)
    // const [maxPoints, setMaxPoint] = useState(10)
    const [pointsLeft, setPointsLeft] = useState(10)

    useEffect(() => {
        belbinApi.getQuestionBlank().then(r => r.json())
            .then(blank => setCurrentBlank(blank.blank));

        if (props.page === 8) return
        belbinApi.getQuestionBlock(props.page).then(resp => resp.json())
            .then(resp => {
                setBlockInfo(resp.blockQuestion);
                setQuestions(resp.questions)
            })
    }, [props.page])

    useEffect(() => {
        let sum = 0;
        if (currentBlank === null) return;
        for (let key of Object.keys(currentBlank)) {
            // console.log('key', key, '---', currentBlank[key])
            sum += currentBlank[key];
        }
        console.log('sum', sum)
        setPointsLeft(MAX_POINTS - sum)

    }, [currentBlank])

    useEffect(() => {
        props.allowNext(pointsLeft === 0)
    }, [pointsLeft])


    useEffect(() => {
        props.getBlank(currentBlank)
    }, [props.commitFlag])


    const updateBlank = (key, valueToAdd) => {

        setCurrentBlank({
            ...currentBlank,
            [key]: valueToAdd
        })
    }

    const handleSliderChange = (event, newValue) => {

        updateBlank(event, newValue)


    }


    return (
        <div className={classes.wrapper}>

            <h1>Тест Белбина!!</h1>
            <h2>{blockInfo?.blockContent}</h2>
            <div className={classes.info}>
                <p style={{
                    color: `${(pointsLeft > 0) ? 'red' : 'green'}`
                }}


                >Осталось распределить: {pointsLeft} баллов</p>
                <p>Страница  {blockInfo?.number} / 7</p>
            </div>




            {questions?.map(qst =>
                <div key={qst?.id}>
                    <QuestionCard getBlank={() => currentBlank}
                        addToBlank={(k, v) => updateBlank(k, v)}
                        question={qst} />

                    <MyInputRange setValue={handleSliderChange} name={qst.attachedRole.engName} sumScore={MAX_POINTS - pointsLeft} />

                </div>
            )}


        </div>
    )
}

export default BelbinTestBlock;