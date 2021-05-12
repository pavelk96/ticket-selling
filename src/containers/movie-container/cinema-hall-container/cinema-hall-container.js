import React, { Component } from 'react';
import OnePlace from "../../../components/seat-selection/one-place"
import "./cinema-hall-container.css";
import {connect} from "react-redux";
import UserInfo from "../../../services/user-info";
import {fetchByuTicket} from "../../../actions"
import Spinner from "../../../services/spinner";

const userInfo = new UserInfo();

class CinemaHallContainer extends Component {

    handleByuTicket = async (filmId, selectedPlaceNumber) => {
        const token = localStorage.getItem("token");
        try {
            const data = await userInfo.request('/api/byu-ticket/byu-ticket', 'POST', {filmId, selectedPlaceNumber, token}, {})
        } catch (e) {

        }
    };

    componentDidMount() {
        this.props.fetchByuTicket(this.props.id)
    }

    state = {
        selectedPlaceNumber: []
    };

    handleSelectedPlace = (place) => {

        const {selectedPlaceNumber} = this.state;

        const findedIndex = selectedPlaceNumber.findIndex(selectedPlace => selectedPlace === place );

        let arr = [];

        if (findedIndex !== -1) {
            arr = [
                ...selectedPlaceNumber.slice(0, findedIndex),
                ...selectedPlaceNumber.slice(findedIndex + 1)
            ]
        }
        if (findedIndex === -1) {
            arr = [...selectedPlaceNumber, place ];
        }

        this.setState({selectedPlaceNumber: arr});
    };

    renderHallGrid = () => {
        let gridArr = [];
        for (let i = 1; i <= 9; i++) {
            let placeArr = [];
            for (let n =1; n<=10; n++) {
                const place = `${i.toString()}.${n.toString()}`;
                placeArr = [...placeArr, <OnePlace  key={place} place={n.toString()} handleSelectedPlace={() => this.handleSelectedPlace(place)} />];
            }
            gridArr = [...gridArr,<div key={i} >Ряд: {i}{placeArr}</div> ]
        }
        return gridArr;
    };

    render() {

        const {id, buyTicketIsLoading} = this.props;

        return (
            <>
                {buyTicketIsLoading ? <Spinner/> :
                    <>
                        {id}
                        {this.props.filmData}
                    <div className="container">
                        <img src="http://www.atrium-omsk.ru/images/tpl/screen.png" alt= "img"/>
                        <div className="centered">
                            {this.renderHallGrid()}
                            <button className="btn btn-success" onClick={() => {this.handleByuTicket(id, this.state.selectedPlaceNumber)}} >Купить</button>
                        </div>
                    </div></> }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmData: state.filmData,
        buyTicketIsLoading: state.buyTicketIsLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchByuTicket: fetchByuTicket(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CinemaHallContainer);