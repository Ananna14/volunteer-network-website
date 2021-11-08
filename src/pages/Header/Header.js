import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../UseFirebase/Context/hooks/UseAuth'
import './Header.css'

const Header = () => {
   const {user, logOut} = useAuth();
    return (
        <div className="nav">
            <Link className="container" to="/home">Home</Link>
            <Link className="container" to="/donation">Donation</Link>
            <Link className="container" to="/events">Events</Link>
            <Link className="container" to="/blogs">Blogs</Link>
            <Link className="container" to="/admin">Admin</Link>
            <Link className="container" to="/register">Register</Link>
            {
                user?.email? 
                <Link onClick={logOut} className="container" to="/login">logOut</Link>
                :
                <Link className="container" to="/login">login</Link>
            }
            
        </div>
    )
}

export default Header
