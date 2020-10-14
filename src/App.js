import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Order from './components/CutomerPage/Order/Order';
import AllServices from './components/AllServicesPage/AllServices/AllServices';
import ServiceList from './components/CutomerPage/ServiceList/ServiceList';
import Review from './components/CutomerPage/Review/Review';
import AddService from './components/AdminPage/AddService/AddService';
import MakeAdmin from './components/AdminPage/MakeAdmin/MakeAdmin';
import Login from './components/LoginPage/Login/Login';
import ServiceOrderList from './components/AdminPage/ServiceOrderList/ServiceOrderList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/serviceList">
           <ServiceList></ServiceList>
          </Route>
          <Route path="/review">
           <Review></Review>
          </Route>
          <Route path="/serviceOrderList">
           <ServiceOrderList></ServiceOrderList>
          </Route>
          <Route path="/addService">
           <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/allServices">
            <AllServices></AllServices>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
