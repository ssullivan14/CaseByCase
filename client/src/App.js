import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar'
import Landing from './components/Layout/Landing/Landing'

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;