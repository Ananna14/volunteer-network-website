import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import useAuth from '../../../../../UseFirebase/Context/hooks/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handelOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handelAdminSubmit = e =>{
        const user = {email};
        fetch('https://radiant-fjord-01668.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data)
                // setEmail('')
                setSuccess(true);
            }
           
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handelAdminSubmit}>
            <TextField sx={{width: '50%'}} type="Email" onBlur={handelOnBlur} label="Email" variant="standard" />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success &&<Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    )
}

export default MakeAdmin
