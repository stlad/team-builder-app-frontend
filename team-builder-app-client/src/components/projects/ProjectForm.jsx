import { useEffect, useState } from "react"
import { teambuilderApi } from "../../globals/api";


const ProjectForm = (props)=>{

    const [project, setProject] = useState(null);
    useEffect(()=>{
        teambuilderApi.getProjectById(props.projId).then(d=>d.json())
            .then(data=>setProject(data));
    },[])
    return (
        <div>
            <div style={{
                    border:"1px solid black", 
                    width:"50em",
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginTop:"1em",
                    marginBottom:"1em"}}
                    >
                <p>Проект: {project?.name}</p>
                <p>Описание: {project?.description}</p>
                <p>Заказчик: {project?.customer}</p>
                <p>Записано команд: {project?.teamsCount}</p>
            </div>
        </div>
    )
}

export default ProjectForm;