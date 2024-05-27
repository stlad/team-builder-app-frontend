import { useEffect } from "react";
import { useState } from "react";
import { securityUtils } from "../../globals/SecurityUtils";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { adminApi, hardskillsApi } from "../../globals/api";
import classes from './styles/HardSkillsResult.module.css'

const HardSkillsResult = () => {

    const [role, setRole] = useState(null)
    useEffect(() => {
        hardskillsApi.getUserRole(securityUtils.getCurrentUserId()).then(resp => resp.json())
            .then(data => setRole(data.hardRole))
    }, [])

    if (role === null) {
        return (
            <div className={`${classes.hard_skills_main}`}>
                <p> Не удалось получить информацию о проф. роли</p>
            </div>
        )
    }
    return (
        <div className={`${classes.hard_skills_main}`}>
            <p>{role.industry}: {role.rusName}</p>
        </div>
    )
}

export default HardSkillsResult;



