import React from 'react'
import { Link } from 'react-router-dom';
import './SingleHome.css'


  //send to the server
  // fetch('http://localhost:5000/appointments',{
  //     method: 'POST',
  //     headers:{
  //         'content-type': 'application.json',
  //     },
  //     body: JSON.stringify(appointment)
  // })
  // .then(res => res.json())
  // .then(data => {
  //     console.log(data)
  // })

const SingleHome = ({home}) => {
    const {name, img} = home;
    return (
        <div className="single-item">
            <img src={img} alt="" />
            <h2>{name}</h2>
           <Link to="/donation"> <button className="btn">Details</button></Link>
        </div>
    )
}

export default SingleHome
