import { Component } from "react";

import Separator from '../separator/separator';

import './abour-secondary.scss';

class AboutSecondary extends Component {

    render() {
        const { srcImage, 
                widthImage, 
                heightImage, 
                marginRight, 
                title, 
                texts } = this.props;
            
        return (
            <section className="about_secondary">
                <div className="container">
                    <div className="about_secondary-wrapper">
                        <div className="about_secondary-wrapper-image" 
                            style={{
                                backgroundImage: `url(${srcImage})`, 
                                width: widthImage, 
                                height: heightImage,
                                marginRight: marginRight}}>

                        </div>
                        <div className="about_secondary-wrapper-content">
                            <h2 className="about_secondary-wrapper-content-title">
                                {title}
                            </h2>
                            <Separator color="black" marginTop={20}/>
                            {texts}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default AboutSecondary;
