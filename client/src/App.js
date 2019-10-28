import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <Route exact path="/" component={Landing}/>
     <div className="container">
       <Router exact path = "/register" component={Register}/>
       <Router exact path = "/login" component={Login}/>
     </div>
      <Footer/>
       
    </div>
    </Router>
  );
}

export default App;
