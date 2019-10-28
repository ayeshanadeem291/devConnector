import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
      <h1>my react app</h1>
    </div>
  );
}

export default App;
