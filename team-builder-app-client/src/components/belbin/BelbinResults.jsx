import React, { useState, useEffect } from 'react';
import { belbinApi } from '../../globals/api';
import QuestionCard from './questions/QuestionCard';
import Slider from '@mui/material/Slider';
import { useLocation } from "react-router-dom";
import BelbinResultCharts from './charts/BelbinResultChart';
import classes from './styles/BelbinResults.module.css'
import Button from '@mui/material/Button';
import { securityUtils } from '../../globals/SecurityUtils';

const BelbinResults = (props) => {
    const location = useLocation();
    const [blank, setBlank] = useState(location.state)
    const [scores, setScores] = useState(null)


    useEffect(() => {
        if (blank !== null) {
            belbinApi.postQuestionBlank(blank).then(resp => resp.json())
                .then(scores => setScores(scores.roleScores))
        }
    }, [])

    useEffect(() => { }, [scores])

    const handleSaveResult = () => {
        belbinApi.postUserResult(securityUtils.getCurrentUserId(), scores[0].role.id);
    }

    return (
        <div>
            <div>
                <BelbinResultCharts scores={scores} />
            </div>

            <div>
                <table className={classes.table}>
                    <thead>

                        <tr>
                            <th>Номер</th>
                            <th>Баллы</th>
                            <th>Роль (рус)</th>
                            <th>Роль (eng)</th>
                            <th>Описание</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scores?.map((score, index) =>
                            <tr key={score?.role.id}>
                                <td ><p>{index + 1}</p></td>
                                <td><p>{score.score}</p></td>
                                <td><p>{score.role.rusName}</p></td>
                                <td><p>{score.role.engName}</p></td>
                                <td><p className={`${classes.descr}`}>{score.role.description}</p></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <Button variant="outlined" href="/belbin" disabled={!securityUtils.isLogged()} onClick={handleSaveResult}>Сохранить результаты</Button>

        </div>
    )
}

export default BelbinResults