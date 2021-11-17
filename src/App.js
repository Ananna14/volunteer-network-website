import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donation from './pages/Header/Donation/Donation';
import Events from './pages/Header/Donation/Events/Events';
import Blogs from './pages/Header/Donation/Blogs/Blogs';
import Register from './pages/Header/Donation/Blogs/Admin/Register/Register';
// import Admin from './pages/Header/Donation/Blogs/Admin/Admin';
import NotFound from './pages/Header/Donation/Blogs/Admin/NotFound/NotFound';
import Login from './pages/UseFirebase/Login';
import AuthProvider from './pages/UseFirebase/Context/AuthProvider';
import PrivateRoute from './pages/UseFirebase/Context/hooks/PrivateRoute/PrivateRoute';
import Admin from './Admin/Admin';
import People from './AddPeople/People/People';
import HomeAdd from './HomeAdd/HomeAdd';
import Dashbord from './Admin/Dashbord';
import MakeAdmin from './pages/Header/Donation/Blogs/Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/UseFirebase/Context/hooks/PrivateRoute/AdminRoute/AdminRoute';
import AddPeople from './AddPeople/AddPeople';
// import BookingModal from './pages/BookingModal/BookingModal';


function App() {
  
  return (
    <div className="App">
  <AuthProvider>
  <Router>
  <Header></Header>
    <Routes>
      <Route exact path="/" element={<HomeAdd/>}>
       
      </Route>
     <Route path="/home" element={<HomeAdd/>}>

     </Route>
     <Route path="/donation" element={<PrivateRoute><Donation/></PrivateRoute>}>

     </Route>
     <Route path="/events" element={<Events/>}>
    
     </Route>
     <Route path="/blogs" element={ <Blogs/>}>

     </Route>
     <Route path="/admin" element={<Admin/>}>

       </Route>

     <Route exact path="/dashbord" element={<Dashbord/>}>
 
        </Route>
        <Route path={`/dashbord/makeAdmin`} element=
        {<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
        </Route>
        <Route path={`/dashbord/events`} element={<Events/>}>
            {/* <Events></Events> */}
        </Route>
        <Route path={`/dashbord/people`} element=
        {<AdminRoute><AddPeople></AddPeople></AdminRoute>}>
            
        </Route>
     {/* </Route> */}
     <Route path="/register" element={<Register/>}>
       
     </Route>
     <Route path="/login" element={<Login/>}>
  
     </Route>
     <Route path="*" element={<NotFound/>}>
     
     </Route>
    </Routes>
  </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
