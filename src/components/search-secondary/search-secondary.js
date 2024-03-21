import { Component } from "react";

import './search-secondary.scss';

class SearchSecondary extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <div className="search-coffee-wrapper">
                <span className="search-coffee-name our-coffee-panel-span">
                    Looking for
                </span>
                <input type="text" 
                        name="search-coffee-text" 
                        className="search-coffee-text"
                        id="search-coffee-text" 
                        placeholder="start typing here..."
                        value={this.state.term}
                        onChange={this.onUpdateSearch}
                />
            </div>
        );
    }

}

export default SearchSecondary;