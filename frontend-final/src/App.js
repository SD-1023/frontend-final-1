import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Router } from 'express';

function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>
    <h1>Hello Welcome to our final project</h1>
    <p>Done by: Ahmad Masri, Abdullah Bahrawi, Ahmad Breeka, Cesar Zaitoun, Fadi Halteh</p>
    </BrowserRouter>
  );
}

export default App;
