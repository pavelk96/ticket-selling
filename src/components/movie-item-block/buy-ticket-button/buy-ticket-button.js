import "./buy-ticket-button.css";

import React,{Component} from "react";
import {Link} from 'react-router-dom';


class BuyTicketButton extends Component {

    renderButton = () => {
        const oldDate = new Date();
        oldDate.setDate(oldDate.getDate()-28);
        const oldYear = oldDate.getFullYear();
        if (this.props?.year >= oldYear) {
            return true;
        } else {
           return null
        }
    };

    render () {
        const{filmId} = this.props;

        const oldDate = new Date();
        oldDate.setDate(oldDate.getDate()-28);
        const oldYear = oldDate.getFullYear();
        if (this.props?.year >= oldYear) {
            return <Link to={`/buy-ticket/${filmId}`} className="button-buy-ticket">Купить</Link>;
        }
            return null
    }
}


export default BuyTicketButton;