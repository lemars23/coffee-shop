import { Component } from "react";

import ListItemSecondary from '../list-item-secondary/list-item-secondary';

import './list-secondary.scss';

class ListSecondary extends Component {

    getListCardItems = (list) => {
        return list.map(item => {
            const {id, image, name, country, price} = item;
            return (
                <ListItemSecondary  id={id} 
                                    imageSrcItem={image} 
                                    titleItem={name} 
                                    countryItem={country} 
                                    priceItem={price} />
            );
        });
    };

    render() {
        const { list } = this.props;
        return (
            <div className="list-card">
                {this.getListCardItems(list)}
            </div>
            
        );
    }

}

export default ListSecondary;