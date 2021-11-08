import React, { useState } from 'react'
import { CircularProgress, Alert} from '@mui/material';
import { Link, useLocation, useHistory} from 'react-router-dom'
import useAuth from './Context/hooks/UseAuth'
import './Login.css'

const Login = () => {
    const [loginData, setLoginDtaa] = useState({});
    const {user, loginUser,signInWithGoogle, isLoading, authError} = useAuth()

     const location = useLocation();
     const history = useHistory()

    const handelOnChange= e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        // console.log(field, value, newLoginData)
        setLoginDtaa(newLoginData);
    }
    const handelLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handelGoogleSignIn = () =>{
        signInWithGoogle(location, history)
    }
    return (
        <div className="input-field">
            <h2>Please Login</h2>
           <form>
           <input onChange={handelOnChange} type="email" className="contact" name="email" id="" placeholder="Email"/><br/>
            <input onChange={handelOnChange} type="password" className="contact" name="password" id="" placeholder="password"/><br/>
           <button onClick={handelLoginSubmit} className="btn">login</button><br/><br/>
           <Link className="register" to="/register">New User? Please Register</Link>
           {isLoading && <CircularProgress />}
           {user?.email &&<Alert severity="success">User Created Successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
           </form>
            <br/>
            <div>---------------or-----------------</div>
            <button onClick={handelGoogleSignIn} className="btn">Google Sign In</button>
           
        </div>
    )
}

export default Login
