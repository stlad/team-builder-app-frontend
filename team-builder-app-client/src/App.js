import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './components/main/AppRoutes';

function App() {

  return(
    <div className='App'>
      <header></header>
      <div>
        <AppRoutes />
      </div>  

      <footer></footer>
    </div>  
    );
}

export default App;
