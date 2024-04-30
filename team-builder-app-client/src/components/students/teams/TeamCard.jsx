import { useEffect, useState } from "react";
import { securityUtils } from "../../../globals/SecurityUtils";
import { teambuilderApi } from "../../../globals/api";
import classes from './styles/TeamCard.module.css'


const TeamCard = (props)=>{

    const [team, setTeam] = useState(null);
    const normalTextStyle = {fontWeight:'normal'};
    const boldTextStyle = {fontWeight:'bold'};

    useEffect(()=>{
        if(props.teamId===null || props.teamId===undefined){
            teambuilderApi.getUsersTeam(securityUtils.getCurrentUserId()).then(data=>data.json())
                .then(data=>setTeam(data))
        }
        else{
            teambuilderApi.getTeamById(props.teamId).then(data=>data.json())
                .then(data=>setTeam(data))
        }
    },[])

    if(!securityUtils.isLogged()){
        return (
            <div>Пользователь не авторизован</div>
        )
    }

    return (
        <div>
            <div className={`${classes.card}`} >
                <p>Команда №{team?.id}. {team?.teamName}</p>

                <hr></hr>
                <div className={`${classes.membersField}`}>
                    {team?.members.map((student, index)=>{return(
                        <div key={student.id} > 
                            <p>
                                {student.profRole.rusName} | {student.lastname} {student.firstname} {student.middlename} {student.academicGroup} | {student.teamRole.rusName}
                            </p>
                        </div>
                    )})}
                </div>
                        <hr></hr>
                <p>Проект: {team?.attachedProject?.name } ({team?.attachedProject?.customer})</p>
            </div>
        </div>
    )
}


export default TeamCard;