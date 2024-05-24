import Button from '@mui/material/Button';
import { useNavigate, useLocation, useParams, NavLink } from "react-router-dom";
import { securityUtils } from '../../globals/SecurityUtils';
import LoginHeader from '../main/LoginHeader';
import classes from './header.module.css'

const Header = () => {
    const location = useLocation();

    return (
        <header className={classes.wrapper}>
            <div className={classes.logo}>
                <NavLink to='/'>
                    <img src="urfu.png" alt="" />
                </NavLink>
            </div>
            {location.pathname !== '/' ?
                <div className={classes.menu}>
                    <NavLink to="/belbin">Командные роли</NavLink>

                    {securityUtils.isLogged() ?
                        <>
                            <NavLink to="/hardskills">Профессиональные роли</NavLink>
                            <NavLink to="/students/all">Студенты</NavLink>
                            <NavLink to="/teams">Команды</NavLink>
                            <NavLink to="/projects">Проекты</NavLink>
                            <NavLink to="/profile">Профиль</NavLink>
                            <NavLink to="/teamsme">Моя команда</NavLink>
                        </>
                        :
                        <></>
                    }</div>
                : <div>Супер программа которая сделает всех счастливыми</div>
            }
            <div>
                <LoginHeader />
            </div>
        </header>
    )
}

export default Header


