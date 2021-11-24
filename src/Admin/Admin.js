import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
// import Home from '../../../../Home'
// import MakeAdmin from '../Blogs/Admin/MakeAdmin/MakeAdmin'

import {
  BrowserRouter as Router,
  Outlet,
  Link
 
} from "react-router-dom";
// import AddPeople from '../AddPeople/AddPeople';
// import MakeAdmin from '../pages/Header/Donation/Blogs/Admin/MakeAdmin/MakeAdmin';
// import Events from '../pages/Header/Donation/Events/Events';
// import AdminRoute from '../pages/UseFirebase/Context/hooks/PrivateRoute/AdminRoute/AdminRoute';
import useAuth from '../pages/UseFirebase/Context/hooks/UseAuth';
// import Dashbord from './Dashbord';

const Admin = () => {
    const {admin} = useAuth();
    return (
        <div>
            <Link to="/dashbord"><Button>Volunteer register list</Button></Link>
           {admin && <Box>
            <Link to={`/dashbord/makeAdmin`}><Button>Make Admin</Button></Link>
               </Box>}
            <Link to={`/dashbord/events`}><Button>Add Events</Button></Link>
            <Link to={`/dashbord/people`}><Button>Add People</Button></Link>
            {/* <Routes> */}
        <Outlet></Outlet>
      {/* </Routes> */}
        </div>
    )
}

export default Admin
