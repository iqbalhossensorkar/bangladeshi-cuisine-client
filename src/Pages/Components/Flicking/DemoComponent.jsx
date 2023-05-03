import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import paratha from '../../../assets/thums/plain-paratha.jpg'
import kachi from '../../../assets/thums/kachi-biriyani.jpg'
import khichuri from '../../../assets/thums/bhuna-khichuri.jpg'
import falooda from '../../../assets/thums/falooda.jpg'
import haleem from '../../../assets/thums/haleem.jpg'
import biriyani from '../../../assets/thums/chicken-biriyani.jpg'
import grilledChicken from '../../../assets/thums/grilled-chicken-naan-roti.jpg'
import ilish from '../../../assets/thums/rice-ilish-fry.jpg'
import roshMalai from '../../../assets/thums/roshmalai.jpg'


export default class DemoComponent extends Component {
    _plugins = [new AutoPlay({ stopOnHover: true })];

    render() {
        return <div className="container mx-auto lg:px-96 px-20 ">
            <p className="text-4xl font-semibold text-center mb-6">Quick Searches</p>
            <p className="text-gray-400 text-center mb-16">Discover Meals By Local Chefs</p>
                <Flicking circular={true} horizontal={true} plugins={this._plugins}>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={paratha} alt="" className="h-10 hover:animate-bounce" />Plain Paratha</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={kachi} alt="" className="h-10 hover:animate-bounce" />Kachi Biriyani</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={khichuri} alt="" className="h-10 hover:animate-bounce" />Bhuna Khichuri</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={falooda} alt="" className="h-10 hover:animate-bounce" />Falooda</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={haleem} alt="" className="h-10 hover:animate-bounce" />Haleem</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={biriyani} alt="" className="h-10 hover:animate-bounce" />Chicken Biriyani</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={grilledChicken} alt="" className="h-10 hover:animate-bounce" />Grilled Chicken Naan</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={ilish} alt="" className="h-10 hover:animate-bounce" />Hilsa Fry</span>
                    <span className="button mr-10 is-white cursor-pointer hover:text-error"><img src={roshMalai} alt="" className="h-10 hover:animate-bounce" />Rosh Malai</span>
                </Flicking>
            </div>
    }
}