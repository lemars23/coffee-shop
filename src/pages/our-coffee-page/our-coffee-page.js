import { Component } from "react";

import HeaderSecondary from '../../components/header-secondary/header-secondary';
import AboutSecondary from "../../components/about-secondary/about-secondary";
import UnderlineSecondary from "../../components/underline-secondary/underline-secondary";
import SearchSecondary from "../../components/search-secondary/search-secondary";
import FilterSecondary from "../../components/filter-secondary/filter-secondary";
import ListSecondary from '../../components/list-secondary/list-secondary';
import Footer from '../../components/footer-main/footer-main';

import AboutOurBeansImage from './images/about-our-beans-girl.jpg';
import CoffeeItemOneImage from './images/coffee-item-one.png';

import './our-coffee-page.scss';

class OurCoffeePage extends Component {
    state = {
        term: '',
        filter: 'all'
    }
    coffies = [
        {
            id: 1,
            image: CoffeeItemOneImage,
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: 6.99
        },
        {
            id: 2,
            image: CoffeeItemOneImage,
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            price: 6.99
        },
        {
            id: 3,
            image: CoffeeItemOneImage,
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Columbia',
            price: 6.99
        },
        {
            id: 4,
            image: CoffeeItemOneImage,
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: 6.99
        },
        {
            id: 5,
            image: CoffeeItemOneImage,
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            price: 6.99
        },
        {
            id: 6,
            image: CoffeeItemOneImage,
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Columbia',
            price: 6.99
        },
    ];
    ourCoffeContentText = 
    <div className="our-coffee-content">
        <p className="our-coffee-content-text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        </p>
        <p className="our-coffee-content-text" style={{marginTop: 30}}>
            Afraid at highly months do things on at. Situation recommend objection do intention so questions.
        </p>
        <p className="our-coffee-content-text">
            As greatly removed calling pleased improve an.
            Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        </p>
    </div>;

    searchEmp = (list, term) => {
        if(term.length === 0) return list;

        return list.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({term});
    };

    filterPost = (list, filter) => {
        switch(filter) {
            case 'Brazil':
                return list.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return list.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return list.filter(item => item.country === 'Columbia');
            default:
                return list;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({filter});
    };

    render() {
        const { term, filter } = this.state;
        const visibleData = this.filterPost(this.searchEmp(this.coffies, term), filter);
        return (
            <>
                <HeaderSecondary title="Our Coffee"/>
                <AboutSecondary srcImage={AboutOurBeansImage} 
                                widthImage={272} 
                                heightImage={355}
                                marginRight={79} title="About our beans"
                                texts={this.ourCoffeContentText}/>
                <UnderlineSecondary/>
                <div className="our-coffee">
                    <div className="container">
                        <div className="our-coffee-panel">
                            <SearchSecondary onUpdateSearch={this.onUpdateSearch} />
                            <FilterSecondary filter={filter} onFilterSelect={this.onFilterSelect}/>
                        </div>
                        <ListSecondary list={visibleData} />
                    </div>
                </div>
                <Footer/>
            </>
            
        );
    }
}

export default OurCoffeePage;