import React, { useState, useEffect } from 'react';
import { hardskillsApi } from '../../globals/api.js'
import classes from './HardSkillls.module.css'
import { securityUtils } from '../../globals/SecurityUtils.js';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate, useLocation, useParams, NavLink } from "react-router-dom";

const HardSkills = () => {
    useEffect(() => { document.title = 'Проф. Компетенции' }, [])

    const [catalog, setCatalog] = useState([])
    const [selectedRole, setSelectedRole] = useState(-1)

    useEffect(() => {
        const getUsersRoles = () => {
            if (!securityUtils.isLogged()) return;
            hardskillsApi.getUserRole(securityUtils.getCurrentUserId()).then(resp => resp.json())
                .then(resp => {
                    console.log(resp)
                    setSelectedRole(resp.hardRole === null ? -1 : resp.hardRole.id);
                });
        }

        const getRolesCatalog = () => {
            hardskillsApi.getAllRoles().then(resp => resp.json())
                .then(resp => {
                    setCatalog(resp);
                });
        }

        getRolesCatalog();
        getUsersRoles();
    }, [])


    const handleSaveRoles = () => {
        const roleToSave = {
            id: null,
            userId: securityUtils.getCurrentUserId(),
            hardRoleId: selectedRole
        }
        hardskillsApi.postResult(roleToSave).then(resp =>
            window.location.reload());
    }

    const handleChange = (event) => {
        setSelectedRole(event.target.value)
    }

    const renderList = () => {
        if (catalog === null || catalog.length === 0)
            return (<div>Не загружено</div>)

        return (
            <div className={`${classes.center} ${classes.col}`}>
                <Box >
                    <InputLabel id="demo-simple-select-label">Компетенции</InputLabel>
                    <Select
                        className={classes.select}
                        // style={{ border: "2px solid bjue" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedRole}
                        onChange={handleChange}
                        renderValue={(selected) => {
                            if (selected === -1) return "Нет"
                            let roleWithQuota = catalog.find((el) => el.role.id === selected)
                            return `${roleWithQuota.role.rusName} ${roleWithQuota.currentCount}/${roleWithQuota.quota}`
                        }}>
                        <MenuItem value={-1}>Нет</MenuItem>

                        {catalog.map(role => {
                            return (<MenuItem
                                key={role.role.id}
                                value={role.role.id}
                                disabled={(role.quota - role.currentCount) <= 0}>
                                {role.role.rusName} ({role.currentCount}/{role.quota})
                            </MenuItem>)
                        })}
                    </Select>
                </Box>
                <button variant="outlined" disabled={!securityUtils.isLogged()} onClick={handleSaveRoles}>Сохранить</button>
            </div>
        )
    }

    return (
        <div className={classes.wrapper}>
            {renderList()}

            {/* 
            <p><NavLink to='/' >На главную</NavLink></p>
            <p><NavLink to='/' >Назад</NavLink></p> */}
            {/* <p><NavLink to='/belbin' >Тест Белбина</NavLink></p> */}

        </div>
    )
}


export default HardSkills;