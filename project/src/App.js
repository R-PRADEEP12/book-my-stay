import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Membership from './membership';
import Login from './login';
import Account from './account';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/See-Member-Prizes" element={<Membership/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/login1" element={<Login/>}/>
        <Route path="/home1" element={<Home/>}/>
        <Route path="/home2" element={<Home/>}/>
        <Route path="/home3" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
