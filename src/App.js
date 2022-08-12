import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Join from './component/Join';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
