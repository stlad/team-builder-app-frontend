import React, { useState, useEffect } from 'react';

const QuestionCard = (props) =>{
    const [question, setQuestion] = useState(null);
    const [role, setRole] = useState(null);
    const [tempValue, setTempValue] = useState(0);

    //props.getBlank();
    //props.question

    useEffect(()=>{
        setQuestion(props?.question);
        setRole(props?.question?.attachedRole);

    },[props])

       const printRole = () =>{
        console.log(role.engName);
        console.log(props.getBlank()[role.engName]);
    }

    return (
        <div>

            <p>{question?.number % 10}. {question?.content}.</p>
            {/* <button onClick={printRole}>Роль</button> */}
        </div>
    )
}

export default QuestionCard;