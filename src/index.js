import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './index.scss';

import HomePage from './pages/home-page/home-page';
import OurCoffeePage from './pages/our-coffee-page/our-coffee-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/our-coffee" element={<OurCoffeePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
