import { Component } from "react";

import './our-best-main.scss';

import ItemOne from './images/item-one.png';
import ItemTwo from './images/item-two.png';
import ItemThree from './images/item-three.png';

class OurBestMain extends Component {
    render() {
        return (
            <section className="our-best">
                <div className="container">
                    <h2 className="our-best-title">
                        Our best
                    </h2>
                    <ul className="our-best-list">
                        <li className="our-best-list-item">
                            <img src={ItemOne} alt="Solimo Coffee Beans 2kg" className="our-best-list-item-image" />
                            <p className="our-best-list-item-name">Solimo Coffee Beans 2 kg</p>
                            <p className="our-best-list-item-price">10.73$</p>
                        </li>
                        <li className="our-best-list-item">
                            <img src={ItemTwo} alt="Presto Coffee Beans 1kg" className="our-best-list-item-image" />
                            <p className="our-best-list-item-name">Presto Coffee Beans 1 kg</p>
                            <p className="our-best-list-item-price">15.99$</p>
                        </li>
                        <li className="our-best-list-item">
                            <img src={ItemThree} alt="Aromistico Coffee 1 kg" className="our-best-list-item-image" />
                            <p className="our-best-list-item-name">AROMISTICO Coffee 1 kg</p>
                            <p className="our-best-list-item-price">6.99$</p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default OurBestMain;