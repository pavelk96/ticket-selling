import React, { Component } from 'react';
import OnePlace from "../../../components/seat-selection/one-place"
import "./cinema-hall-container.css";
import {connect} from "react-redux";
import UserInfo from "../../../services/user-info";

const userInfo = new UserInfo();

class CinemaHallContainer extends Component {

    handleByuTicket = async (filmId, selectedPlaceNumber) => {
        const token = localStorage.getItem("token");
        try {
            const data = await userInfo.request('/api/byu-ticket/byu-ticket', 'POST', {filmId, selectedPlaceNumber, token}, {})
        } catch (e) {

        }
    };

    getByuTicket = async (filmId) => {
        try {
            const data = await userInfo.request('/api/byu-ticket/request-tickets', 'POST', {filmId}, {})
        } catch (e) {

        }
    }

    componentDidMount() {
        this.getByuTicket(this.props.id)
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

        const {id} = this.props;

        return (
            <div>
                {id}
                <div className="container">
                    <img src="http://www.atrium-omsk.ru/images/tpl/screen.png" alt= "img"/>
                    <div className="centered">
                        {this.renderHallGrid()}
                        <button className="btn btn-success" onClick={() => {this.handleByuTicket(id, this.state.selectedPlaceNumber)}} >Купить</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmData: state.filmData
    }
};


export default connect(mapStateToProps, null)(CinemaHallContainer);