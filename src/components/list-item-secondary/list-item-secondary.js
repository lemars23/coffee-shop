import { Component } from "react";

import './list-item-secondary.scss';

class ListItemSecondary extends Component {

    render() {
        const {id ,imageSrcItem, titleItem, countryItem, priceItem} = this.props;
        return (
            <a href="/" className="list-card-item" key={id}>
                <img src={imageSrcItem} alt="" className="list-card-item-image" />
                <p className="list-card-item-title">{titleItem}</p>
                <p className="list-card-item-country">{countryItem}</p>
                <p className="list-card-item-price">{priceItem}$</p>
            </a>
        );
    }
}

export default ListItemSecondary;