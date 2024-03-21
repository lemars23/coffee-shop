import { Component } from "react";
import Navigation from '../navigation-main/navigation-main';
import Separator from '../separator/separator';

import './footer-main.scss';

class FooterMain extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <Navigation color="black"/>
                    <Separator marginTop={35}/>
                </div>
            </footer>
        );
    }
}

export default FooterMain;