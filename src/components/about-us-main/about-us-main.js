import { Component } from "react";
import Separator from '../separator/separator';

import './about-us-main.scss';

class AboutUsMain extends Component {
    contentTextes = [
        {
            content: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
            key: 1
        },
        {
            content: `Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.`,
            key: 2
        }
    ]
    getContextTextes = () => {
        return this.contentTextes.map(item => <p className="about-us-content-text" key={item.key}>{item.content}</p>)
    }
    render() {
        return (
            <section className="about-us">
                <div className="container">
                    <h2 className="about-us-title">
                        About Us
                    </h2>
                    <Separator color="black" marginTop={20} />
                    <div className="about-us-content">
                        {this.getContextTextes()}
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsMain;