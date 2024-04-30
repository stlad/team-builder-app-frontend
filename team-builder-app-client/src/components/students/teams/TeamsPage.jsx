import { useEffect, useState } from "react";
import { securityUtils } from "../../../globals/SecurityUtils";
import { teambuilderApi } from "../../../globals/api";
import TeamCard from "./TeamCard";
import Button from '@mui/material/Button';

const TeamsPage = ()=>{
    const [teamIds, setTeamIds] = useState(null);
    useEffect(()=>{
        teambuilderApi.getAllTeamsIds().then(data=>data.json())
            .then(data=>setTeamIds(data))
    },[])


    const handleBuildTeams=()=>{
        teambuilderApi.buildTeams().then(data=> window.location.reload())
    }
    if(!securityUtils.isLogged()){
        return (
            <div>Пользователь не авторизован</div>
        )
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleBuildTeams}>Сформировать</Button>
            
            <div style={{marginLeft:"auto"}}>
                {teamIds?.map((id, index)=>{return(
                    <div key={id}>
                        <TeamCard teamId={id} />
                    </div>
                )})}
            </div>
        </div>
    )
}

export default TeamsPage;