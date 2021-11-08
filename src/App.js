import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
// import BookingModal from './pages/BookingModal/BookingModal';


function App() {
  
  return (
    <div className="App">
  <AuthProvider>
  <Router>
  <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
     <Route path="/home">
<Home></Home>
     </Route>
     <PrivateRoute path="/donation">
       <Donation></Donation>
     </PrivateRoute>
     <Route path="/events">
       <Events></Events>
     </Route>
     <Route path="/blogs">
       <Blogs></Blogs>
     </Route>
     <Route path="/admin">
      <Admin></Admin>
     </Route>
     <Route path="/register">
       <Register></Register>
     </Route>
     <Route path="/login">
       <Login></Login>
     </Route>
     <Route path="*">
      <NotFound></NotFound>
     </Route>
    </Switch>
  </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
