import { CircularProgress, Alert} from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../../../UseFirebase/Context/hooks/UseAuth';

const Register = () => {
    const [loginData, setLoginDtaa] = useState({});
    const navigate = useNavigate();

    const {user, registerUser, isLoading, authError} = useAuth();

    const handelOnBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        // console.log(newLoginData)
        // console.log(field, value, newLoginData)
        setLoginDtaa(newLoginData);
    }
    const handelLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match ');
            return
        }
        // alert('helo')
        registerUser(loginData.email, loginData.password,loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <div className="input-field">
             <h2>Please Register</h2>
          { !isLoading && <form>
           <input onBlur={handelOnBlur} className="contact" name="name" id="" placeholder="Your Name"/><br/>
           <input onBlur={handelOnBlur} type="email" className="contact" name="email" id="" placeholder="Email"/><br/>
            <input onBlur={handelOnBlur} type="password" className="contact" name="password" id="" placeholder="password"/><br/>
            <input onBlur={handelOnBlur} type="password" className="contact" name="password2" id="" placeholder="password"/><br/>
           <button onClick={handelLoginSubmit} className="btn">Register</button><br/><br/>
           <Link className="register" to="/login">Already Registred? Please login</Link>
           </form>}
           {isLoading && <CircularProgress />}
           {user?.email &&<Alert severity="success">User Created Successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
    )
}

export default Register
