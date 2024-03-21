import React from "react";
import { Component } from "react";

import HeaderMain from '../../components/header-main/header-main';
import AboutUsMain from '../../components/about-us-main/about-us-main';
import OurBestMain from '../../components/our-best-main/our-best-main';
import FooterMain from '../../components/footer-main/footer-main';


class HomePage extends Component {
    render() {
        return (
            <React.StrictMode>
                <HeaderMain/>
                <AboutUsMain/>
                <OurBestMain/>
                <FooterMain/>
            </React.StrictMode>
        );
    }
}

export default HomePage;