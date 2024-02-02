import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Navbar,Header,About,Services,ContactMe} from './Components/imports';

function App() {
  return (
    <div className='App'>
      <div className='nav__header'>
      <Navbar />
      <Header/>
      </div>
    </div>
  );
}

export default App;
