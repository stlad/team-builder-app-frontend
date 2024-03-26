import React, { useState, useEffect } from 'react';
import {hardskillsApi} from '../../globals/api.js'
import classes from './styles/HardSkilllsPage.module.css'
import { securityUtils } from '../../globals/SecurityUtils.js';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const HardSkillsPage = () =>{
    useEffect(()=>{document.title='Проф. Компетенции'},[])

    const [catalog, setCatalog] = useState(null)
    const [selectedRoles, setSelectedRoles] = useState([])
    const [maxSelected, setMaxSelected] = useState(3)

    const getUsersRoles = () =>{
        if(!securityUtils.isLogged()) return;

        hardskillsApi.getAllUsersRoles(securityUtils.getCurrentUserId()).then(resp=> resp.json())
            .then(resp => {
                let names = resp.map(role=> role.hardRole.rusName);
                console.log(names)
                setSelectedRoles(names);
            });
    }

    const getRolesCatalog = () =>{
        hardskillsApi.getAllRoles().then(resp => resp.json())
            .then(resp => {
                setCatalog(resp);
            });
    }

    useState(()=>{
        getRolesCatalog();
        getUsersRoles();
    },[])

    useState(()=>{
        console.log(selectedRoles)
    },[])


    const handleChange = (event) => {
        let value = event.target.value;
        if(value.length <= maxSelected)
            setSelectedRoles(value);
        console.log(value)
      };
    

    const handleSaveRoles =() =>{
        const dtos = selectedRoles.map((roleName, index) => {
            const result = catalog.find(({ rusName }) => rusName === roleName)
            return {
                userId:securityUtils.getCurrentUserId(),
                hardRoleId:result.id,
                position:index+1
                }
            }
        )
        console.log(dtos)
        hardskillsApi.postResult(dtos, securityUtils.getCurrentUserId());
    }

    const renderList = () =>{
        if(catalog===null )
            return (<div>Не загружено</div>)
        
        return (
            <div className={`${classes.center} ${classes.col}`}>
                <p>Выбор профессиональной роли. Выберите до {maxSelected}х ролей в порядке приоритетов. 
                Выбор роли основывается на профессиональных навыках студента. 
                На основе этого выбора будет производится назначенеи функциональной роли в команде</p>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedRoles}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value, index) => (
                            <Chip key={value} label={`${index+1}: ${value}`} />
                        ))}
                        </Box>
                    )}
                    >
                    {catalog.map((role) => (
                        <MenuItem
                            key={role.id}
                            value={role.rusName}
                        >
                        {role.industry}: {role.rusName} 
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="outlined" disabled={!securityUtils.isLogged()} onClick={handleSaveRoles}>Сохранить</Button>
            </div>
        )
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}


export default HardSkillsPage;