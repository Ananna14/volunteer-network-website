import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
// import Home from '../../../../Home'
// import MakeAdmin from '../Blogs/Admin/MakeAdmin/MakeAdmin'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../pages/Header/Donation/Blogs/Admin/MakeAdmin/MakeAdmin';
import Events from '../pages/Header/Donation/Events/Events';
import AdminRoute from '../pages/UseFirebase/Context/hooks/PrivateRoute/AdminRoute/AdminRoute';
import useAuth from '../pages/UseFirebase/Context/hooks/UseAuth';
import Dashbord from './Dashbord';

const Admin = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div>
            <Link to={`${url}`}><Button>Dashbord</Button></Link>
           {admin && <Box>
            <Link to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
               </Box>}
            <Link to={`${url}/events`}><Button>Add Events</Button></Link>
            <Switch>
        <Route exact path={path}>
         <Dashbord></Dashbord>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <Route path={`${path}/events`}>
            <Events></Events>
        </Route>
      </Switch>
        </div>
    )
}

export default Admin
