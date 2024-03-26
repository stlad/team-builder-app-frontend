import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,Link } from "react-router-dom";
import {hardskillsApi} from '../../globals/api.js'
import HardSkillsCard from './HardSkillCard.jsx';
import classes from './styles/HardSkilllsPage.module.css'

const HardSkillsPage = () =>{
    useEffect(()=>{document.title='Проф. Компетенции'},[])

    const [catalog, setCatalog] = useState(null)
    const [selectedRoles, setSelectedRoles] = useState([])
    const [maxSelected, setMaxSelected] = useState(3)

    const getUsersSkills = () =>{

    }

    const getRolesCatalog = () =>{
        hardskillsApi.getAllRoles().then(resp => resp.json())
        .then(resp => setCatalog(resp));
    }

    useState(()=>{
        getRolesCatalog()
    },[])

    useState(()=>{
        console.log(catalog)
    },[catalog])

    const renderList = () =>{
        if(catalog===null )
            return (<div>Не загружено</div>)
        
        
        //const industryRoles = Object.groupBy(catalog, ({ industry }) => industry);
        return (
            <div className={`${classes.center} ${classes.col}`}>
                <div>
                    {catalog?.map(role =>
                        <div key={role?.id}>
                            <HardSkillsCard role={role} />
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}


export default HardSkillsPage;