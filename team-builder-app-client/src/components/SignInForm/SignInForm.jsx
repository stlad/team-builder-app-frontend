import classes from './SignInForm.module.css'
import { useState } from 'react'
import { securityUtils } from '../../globals/SecurityUtils'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }


    const login = () => {
 
        securityUtils.login(email, password);
        navigate('/')


    }


    return (

        <form className={classes.col}>
            <input type='text' onChange={(e) => onChangeEmail(e)} value={email} />
            <input type='password' onChange={(e) => onChangePassword(e)} value={password} />

  



            <button disabled={email ? false : true} onClick={login}> Войти </button>
      

        </form>
        // <Button variant="outlined" onClick={() => navigate("/register")}>Регистрация</Button>

    )
}

export default SignInForm