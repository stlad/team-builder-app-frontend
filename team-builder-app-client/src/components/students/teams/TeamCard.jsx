import { useEffect, useState } from "react";
import { securityUtils } from "../../../globals/SecurityUtils";
import { teambuilderApi } from "../../../globals/api";
import classes from './styles/TeamCard.module.css'


const TeamCard = (props) => {

    const [team, setTeam] = useState(null);
    const normalTextStyle = { fontWeight: 'normal' };
    const boldTextStyle = { fontWeight: 'bold' };

    useEffect(() => {
        if (props.teamId === null || props.teamId === undefined) {
            teambuilderApi.getUsersTeam(securityUtils.getCurrentUserId()).then(data => data.json())
                .then(data => setTeam(data))
        }
        else {
            teambuilderApi.getTeamById(props.teamId).then(data => data.json())
                .then(data => setTeam(data))
        }
    }, [])

    if (!securityUtils.isLogged()) {
        return (
            <div>Пользователь не авторизован</div>
        )
    }

    return (

        <div className={`${classes.card}`} >

            <div className={classes.up}>
                Команда №{team?.id}. {team?.teamName}
            </div>


            <table className={classes.membersField}>

                <thead>
                    <tr>
                        <th>ПрофРоль</th>
                        <th>Имя</th>
                        <th>Группа</th>
                        <th>КомРоль</th>


                    </tr>
                </thead>
                <tbody>
                    {team?.members.map((student, index) => {
                        return (

                            <tr key={student?.id}>
                                <td > {student.profRole.rusName}</td>
                                <td >{student.lastname} {student.firstname} {student.middlename}</td>

                                <td> {student.academicGroup} </td>
                                <td> {student.teamRole.rusName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className={classes.down}> Проект: {team?.attachedProject?.name} ({team?.attachedProject?.customer})
            </div>
        </div>

    )
}


export default TeamCard;