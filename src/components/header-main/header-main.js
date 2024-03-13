import { Component } from "react";

import Navigation from "../navigation/navigation";
import Separator from "../separator/separator";

import './header-main.scss';

class HeaderMain extends Component {
    render() {
        return (
            <header className="header" id="header">
                <Navigation color="white"/>
                <div className="container">
                    <h1 className="header-title" id="header-title">
                        Everything You Love About Coffee
                    </h1>
                    <Separator color="white" marginTop={14}/>
                    <h2 className="header-subtitle" id="header-subtitle">
                        We makes every day full of energy and taste
                    </h2>
                    <p className="header-undertitle">
                        Want to try our beans?
                    </p>
                    <div className="header-more">
                        <a href="/" className="header-more-button">
                            More
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMain;