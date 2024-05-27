import { useEffect, useState } from "react";
import { teambuilderApi } from "../../globals/api";
import ProjectForm from "./ProjectForm";
import classes from './ProjectPage.module.css'


const ProjectsPage = () => {
    const [ids, setIds] = useState(null);
    useEffect(() => {
        teambuilderApi.getAllProjectIds().then(data => data.json())
            .then(data => setIds(data))
    }, [])

    if (ids === null) {
        return (<div>
            Не удалось получить данные о проектах
        </div>)
    }
    return (

        <div className={classes.wrapper}>
            {ids.map((id, index) => {
                return (
                    <div key={id}>
                        <ProjectForm projId={id} />
                    </div>
                )
            })}
        </div>

    )
}

export default ProjectsPage;