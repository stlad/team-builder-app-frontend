import { useEffect } from "react";
import { useState } from "react";
import { belbinApi } from "../../globals/api";
import { securityUtils } from "../../globals/SecurityUtils";
import { useNavigate, useParams,Link } from "react-router-dom";
import Button from '@mui/material/Button';

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
            <div>
                <p>Не удается получить данные о прохождении Теста Белбина</p>
            </div>
        )
    }
    return (
        <div>
            <p> {result.role?.rusName}</p>
            <p> {result.role?.description}</p>
                <Button variant="outlined" href="/belbin">Пройти тест Белбина заново</Button>

        </div>
    )
}

export default BelbinResult;