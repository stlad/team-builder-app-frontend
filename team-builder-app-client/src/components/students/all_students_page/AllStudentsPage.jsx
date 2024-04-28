import { useEffect, useState } from "react";
import { adminApi, hardskillsApi, teambuilderApi } from "../../../globals/api";



const AllStudentsPage = ()=>{
    const [studs, setStuds] = useState(null)

    useEffect(()=>{
        teambuilderApi.getAllUsersWithRoles().then(data =>  data.json()).then(data=> setStuds(data));
    }, [])

    if(studs === null || studs === undefined){
        return(
            <div>
                <p>Не удалось получить данные о студентах</p>
            </div>
        )
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Группа</th>
                        <th>Проф. роль</th>
                        <th>Роль по Белбину</th>
                        <th>Команда</th>
                    </tr>
                    </thead>

                    <tbody>
                        {studs?.map((student, index) =>
                        <tr key={student?.id}>
                            <td ><p>{student.lastname}</p></td>
                            <td ><p>{student.firstname}</p></td>
                            <td ><p>{student.middlename}</p></td>
                            <td ><p>{student.academicGroup}</p></td>
                            <td ><p>{student.profRole?.rusName}</p></td>
                            <td ><p>{student.teamRole?.rusName}</p></td>
                            <td ><p>{student.teamId}</p></td>
                        </tr>)}
                    </tbody>
            </table>
        </div>
    )
}

export default AllStudentsPage;