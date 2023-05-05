import React from 'react';
import Dashboard from './components/Dashboard';
import { Routes,Route } from 'react-router-dom';
import View from './components/View';
import Game from './ticTokToe/Game';
import Linkedin from './linkedIn/Linkedin';
import Facebook from './facebook/Facebook';
import Profile from './facebook/Profile';

function App(props) {
  return (
    
    <Routes>
      <Route path='/facebook' element={<Facebook/>}/>
      <Route path='/facebook/profile' element={<Profile/>}/>
      <Route path='/linkedin' element={<Linkedin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/:id' element={<View/>}/>
    </Routes>
  );
}

export default App;