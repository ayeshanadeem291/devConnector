import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <h1>my react app</h1>
    </div>
  );
}

export default App;
