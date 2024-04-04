import { useEffect } from "react";
import { useState } from "react";
import { belbinApi } from "../../globals/api";
import { securityUtils } from "../../globals/SecurityUtils";
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import classes from './styles/BelbinResult.module.css'

const BelbinResult = ()=>{
    
    const [result, setResult] = useState(null);

    useEffect(()=>{
        belbinApi.getUserResult(securityUtils.getCurrentUserId()).then(resp => resp.json())
        .then(data => setResult(data))
    },[])

    if(!securityUtils.isLogged()){
        return (
            <div>
                <p>Пользователь не авторизован</p>
            </div>
            
            
        )
    }
    if(result === null){
        return (
            <div className={`${classes.belbin_result_main}`}>
                <p>Не удается получить данные о прохождении Теста Белбина</p>
            </div>
        )
    }
    return (
        <div className={`${classes.belbin_result_main}`}>
            <div className={`${classes.col}`}>
                <p> {result.role?.rusName}</p>
                <p  className={`${classes.role_descr}`}> {result.role?.description}</p>
                <Button variant="outlined" href="/belbin">Пройти тест Белбина заново</Button>
            </div>
        </div>
    )
}

export default BelbinResult;