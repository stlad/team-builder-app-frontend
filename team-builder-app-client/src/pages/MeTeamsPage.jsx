import TeamCard from "../components/students/teams/TeamCard"
//import HardSkillsFooter from "../components/hardskills/HardSkillsFooter"
import classes from './MeTeamsPage.module.css'

const MeTeamsPage = () => {

    return (

        <div className={classes.wrapper}>
            <TeamCard teamId={null} />
        </div>

    )

}

export default MeTeamsPage