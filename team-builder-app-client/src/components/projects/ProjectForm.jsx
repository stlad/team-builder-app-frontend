import { useEffect, useState } from "react"
import { teambuilderApi } from "../../globals/api";
import classes from './ProjectForm.module.css'

const ProjectForm = (props) => {

    const [project, setProject] = useState(null);
    useEffect(() => {
        teambuilderApi.getProjectById(props.projId).then(d => d.json())
            .then(data => setProject(data));
    }, [])
    return (

        <div className={classes.card}>
            <div>
                <h3>Проект:</h3>
                <div>{project?.name}</div>
            </div>
            <div>
                <h4>Описание:</h4>
                <div>{project?.description}</div>
            </div>

            <div>
                <h4>Заказчик:</h4>
                <div>{project?.customer}</div>
            </div>
            <div>
                <h4>Записано команд:</h4>
                <div>{project?.teamsCount}</div>
            </div>



        </div>

    )
}

export default ProjectForm;