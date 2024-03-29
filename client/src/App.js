import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authAction'
import {logoutUser} from './actions/authAction'
import {Provider} from 'react-redux';
import store from './store'
import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'



//check fro token
if(localStorage.jwtToken){
  //set auth token header auth
   setAuthToken(localStorage.jwtToken);
   //decode token and get users info
   const decoded = jwt_decode(localStorage.jwtToken);
   //set user and isAuthenticated
   store.dispatch(setCurrentUser(decoded));
   //check for expired token
   const currentTime = Date.now()/1000
   if(decoded.exp < currentTime){
     //logout user
     store.dispatch(logoutUser());
     //clear current profile
     //redirect to login
     window.location.href = '/login';

   }
  }
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar/>
     <Route exact path="/" component={Landing}/>
     <div className="container">
       <Route exact path = "/register" component={Register}/>
       <Route exact path = "/login" component={Login}/>
     </div>
      <Footer/>
       
    </div>
    </Router>
    </Provider>
  );
}

export default App;
