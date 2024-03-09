import React from 'react';
import ReactDOM from 'react-dom/client';

import HeaderMain from './components/header-main/header-main';
import AboutUsMain from './components/about-us-main/about-us-main';
import OurBestMain from './components/our-best-main/our-best-main';
import FooterMain from './components/footer-main/footer-main';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderMain/>
    <AboutUsMain/>
    <OurBestMain/>
    <FooterMain/>
  </React.StrictMode>
);