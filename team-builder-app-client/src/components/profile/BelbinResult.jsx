import { useEffect } from "react";
import { useState } from "react";
import { belbinApi } from "../../globals/api";
import { securityUtils } from "../../globals/SecurityUtils";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import classes from './styles/BelbinResult.module.css'

const BelbinResult = () => {

    const navigate = useNavigate()
    const [result, setResult] = useState(null);

    useEffect(() => {
        belbinApi.getUserResult(securityUtils.getCurrentUserId()).then(resp => resp.json())
            .then(data => setResult(data))
    }, [])

    if (!securityUtils.isLogged()) {
        return (
            <div>
                <p>Пользователь не авторизован</p>
            </div>


        )
    }
    if (result === null) {
        return (
            <div className={`${classes.belbin_result_main}`}>
                <p>Не удается получить данные о прохождении Теста Белбина</p>
            </div>
        )
    }
    return (
        <div className={`${classes.belbin_result_main}`}>
            <h4>{`${result.role?.rusName}:`}</h4>
            <p className={`${classes.role_descr}`}> {result.role?.description}</p>
            <button onClick={() => navigate("/belbin")} >Пройти тест Белбина заново</button>
        </div>
    )
}

export default BelbinResult;