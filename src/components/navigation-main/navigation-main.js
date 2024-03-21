import { Component } from "react";

import LogoSvgWhite from './icon/Logo-white.svg';
import LogoSvgBlack from './icon/Logo-black.svg';

import './navigation-main.scss';

class Navigation extends Component {
    render() {
        const { color } = this.props;
        return (
                <nav className="nav" id="nav">
                    <ul className="nav-list" id="nav-list">
                        <li className="nav-list-item" key={1}>
                            <a href="/" className={"nav-list-item-link " + (color === "white" ? "nav-list-item-link-color-white" : "nav-list-item-link-color-black")}>
                                <img src={ color === "white" ? LogoSvgWhite : LogoSvgBlack } alt="Logo icon" className={ color === "white" ? "nav-list-item-link-logo-white" : "nav-list-item-link-logo-black" } />
                                Coffee house
                            </a>
                        </li>
                        <li className="nav-list-item" key={2}>
                            <a href="/our-coffee" className={"nav-list-item-link " + (color === "white" ? "nav-list-item-link-color-white" : "nav-list-item-link-color-black")}>Our coffee</a>
                        </li>
                        <li className="nav-list-item" key={3}>
                            <a href="/" className={"nav-list-item-link " + (color === "white" ? "nav-list-item-link-color-white" : "nav-list-item-link-color-black")}>For your pleasure</a>
                        </li>
                    </ul>
                </nav>

        );
    }
}

export default Navigation;