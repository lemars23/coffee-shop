import { Component } from "react";

import NavigationMain from '../navigation-main/navigation-main';

import './header-secondary.scss';

class HeaderSecondary extends Component {



    render() {
        const {title} = this.props;
        return (
            <header className="header_secondary" id="header_secondary">
                <NavigationMain color="white"/>
                <div className="container">
                    <h1 className="header_secondary-title">{title}</h1>
                </div>
            </header>
        );
    }
}


export default HeaderSecondary;