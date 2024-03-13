import { Component } from "react";

import './our-best-main.scss';

import ItemOne from './images/item-one.png';
import ItemTwo from './images/item-two.png';
import ItemThree from './images/item-three.png';

class OurBestMain extends Component {
    ourBestItems = [
        {
            id: 0,
            name: "Solimo Coffee Beans 2 kg",
            price: "10.73$",
            image: ItemOne,
            
        },
        {
            id: 1,
            name: "Presto Coffee Beans 1 kg",
            price: "15.99$",
            image: ItemTwo,
            
        },
        {
            id: 2,
            name: "AROMISTICO Coffee 1 kg",
            price: "6.99$",
            image: ItemThree,
            
        }
    ]

    getOurBestListItems = () => {
        return this.ourBestItems.map(item => 
            <li key={item.id} className="our-best-list-item" >
                <img src={item.image} alt={item.name} className="our-best-list-item-image" />
                <p className="our-best-list-item-name">{item.name}</p>
                <p className="our-best-list-item-price">{item.price}</p>
            </li>);
    }

    render() {
        return (
            <section className="our-best">
                <div className="container">
                    <h2 className="our-best-title">
                        Our best
                    </h2>
                    <ul className="our-best-list">
                        {this.getOurBestListItems()}
                    </ul>
                </div>
            </section>
        );
    }
}

export default OurBestMain;