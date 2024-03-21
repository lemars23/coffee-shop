import { Component } from "react";

import './filter-secondary.scss';

class FilterSecondary extends Component {

    filterButtons = [
        {
            id: 1,
            name: "Brazil"
        },
        {
            id: 2,
            name: "Kenya"
        },
        {
            id: 3,
            name: "Columbia"
        }
    ];


    getFilterButtons = this.filterButtons.map(({id, name}) => {
        const { onFilterSelect } = this.props;
        return (
                <button 
                    type="button" 
                    className='filter-coffee-btn'
                    key={id}
                    onClick={() => onFilterSelect(name)}>
                    {name}
                </button>
        );
    });

    render() {
        return (
            <div className="filter-coffee-wrapper">
                <span className="filter-coffee-name our-coffee-panel-span">
                    Or filter
                </span>
                {this.getFilterButtons}
            </div>
        );
    }

}


export default FilterSecondary;