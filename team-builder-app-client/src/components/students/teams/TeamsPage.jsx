import { useEffect, useState } from "react";
import { securityUtils } from "../../../globals/SecurityUtils";
import { teambuilderApi } from "../../../globals/api";
import TeamCard from "./TeamCard";
import Button from '@mui/material/Button';
import classes from './TeamsPage.module.css'


const TeamsPage = () => {
    const [teamIds, setTeamIds] = useState(null);
    useEffect(() => {
        teambuilderApi.getAllTeamsIds().then(data => data.json())
            .then(data => setTeamIds(data))
    }, [])


    const handleBuildTeams = () => {
        teambuilderApi.buildTeams().then(data => window.location.reload())
    }
    if (!securityUtils.isLogged()) {
        return (
            <div>Пользователь не авторизован</div>
        )
    }


    return (
        <div className={classes.wrapper}>
            <button onClick={handleBuildTeams}>Сформировать</button>

            <div>
                {teamIds?.map((id, index) => {
                    return (
                        <div key={id}>
                            <TeamCard teamId={id} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TeamsPage;