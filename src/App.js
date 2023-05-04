import React from 'react';
import Dashboard from './components/Dashboard';
import { Routes,Route } from 'react-router-dom';
import View from './components/View';
import Game from './ticTokToe/Game';

function App(props) {
  return (
    
    <Routes>
      <Route path='/' element={<Game/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/:id' element={<View/>}/>
    </Routes>
  );
}

export default App;