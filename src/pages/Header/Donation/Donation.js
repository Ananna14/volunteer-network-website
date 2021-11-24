import React, { useState } from 'react'
import useAuth from '../../UseFirebase/Context/hooks/UseAuth';
import './Donation.css'

const Donation = () => {
    // const navigate = useNavigate();
    const {user, date} = useAuth()
    const initialInfo = {name: user.displayName, email: user.email, date: '', desicription:'', volunteerList:''}
    const [loginData, setLoginDtaa] = useState(initialInfo);

    const handelOnBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData)
        // console.log(field, value, newLoginData)
        setLoginDtaa(newLoginData);
    }

    const handelBookingSubmit = e =>{

        // alert('submitting')

        const appointment = {
            ...loginData,
            // date:date.toLocaleDateString()
        }
        console.log(appointment)

        //send to the server
        fetch('http://localhost:5000/appointments',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
      .then(res => res.json())
      .then(data =>{
          if(data.insertedId){
              alert('successfully added')
          }
        //   console.log(data)
      })
   
        e.preventDefault();
    }

    return (
        <div>
            <h2>Register as a Volunteer</h2>
            <input onBlur={handelOnBlur} className="contact" name="name" id="" placeholder="Your Name"/><br/>
           <input onBlur={handelOnBlur} type="email" className="contact" name="email" id="" placeholder="Email"/><br/>
            <input onBlur={handelOnBlur} type="text" className="contact" name="date" id="" placeholder="Date"/><br/>
            <input onBlur={handelOnBlur} type="text" className="contact" name="desicription" id="" placeholder="desicription"/><br/>
            <input onBlur={handelOnBlur} type="text" className="contact" name="volunteerList" id="" placeholder="volunteer-list"/><br/>
           <button onClick={handelBookingSubmit} className="btn">Registration</button><br/><br/>
        </div>
    )
}

export default Donation
