import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../UseFirebase/Context/hooks/UseAuth'
import './Header.css'
import logo from '../../logos/Group 1329.png'

const Header = () => {
   const {user, logOut} = useAuth();
    return (
        <div className="logo-add">
            <div>
                <img src={logo} alt="" />
            </div>
           <div className="nav">
           <Link className="container" to="/home">Home</Link>
            <Link className="container" to="/donation">Donation</Link>
            <Link className="container" to="/events">Events</Link>
            <Link className="container" to="/blogs">Blogs</Link>
            <Link className="container-reg" to="/register">Register</Link>
            <Link className="container-ad" to={`/dashbord/makeAdmin`}>Admin</Link>
            {
                user?.email? 
                <Link onClick={logOut} className="container" to="/login">logOut</Link>
                :
                <Link className="container" to="/login">login</Link>
            }
           </div>
            
        </div>
    )
}

export default Header
