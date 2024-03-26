import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import {hardskillsApi} from '../../globals/api.js'
import classes from './styles/HardSkillsCard.module.css'

const HardSkillsCard = (props) =>{

    const [role, setRole] = useState(props.role);
    return (
        <div>
            <div className={`${classes.industry} ${classes[role.industry]}` }>
                <p>{role.industry}: {role.rusName}</p>
                <div>
                    <p>Приоритет:</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HardSkillsCard;