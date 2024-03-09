import { Component } from "react";

import Navigation from "../navigation/navigation";

import './header-main.scss';

class HeaderMain extends Component {
    render() {
        return (
            <header className="header" id="header">
                <Navigation/>
            </header>
        );
    }
}

export default HeaderMain;