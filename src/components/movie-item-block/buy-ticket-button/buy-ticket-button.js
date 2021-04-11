import React,{Component} from "react";
import {Link} from 'react-router-dom';
import "./buy-ticket-button.css";


class BuyTicketButton extends Component {


    render () {

        const {filmId} = this.props;


        return (
            <Link to={`/buy-ticket/${filmId}`} className="btn btn-success button-buy-ticket">Купить билет</Link>
        )
    }
}


export default BuyTicketButton;