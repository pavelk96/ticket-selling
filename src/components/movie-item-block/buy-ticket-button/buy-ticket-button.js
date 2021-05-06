import React,{Component} from "react";
import {Link} from 'react-router-dom';
import "./buy-ticket-button.css";


class BuyTicketButton extends Component {

    componentDidMount() {

    };

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

        const oldDate = new Date();
        oldDate.setDate(oldDate.getDate()-28);
        const oldYear = oldDate.getFullYear();
        if (this.props?.year >= oldYear) {
            return <Link to={`/buy-ticket/${this.props.filmId}`} className="btn btn-success button-buy-ticket">Купить билет</Link>;
        }
            return null
    }
}


export default BuyTicketButton;