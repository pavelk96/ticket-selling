import React, { Component } from 'react';
import OnePlace from "../../../components/seat-selection/one-place"
import "./cinema-hall-container.css";

import {connect} from "react-redux";


class CinemaHallContainer extends Component {

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
                    { this.renderHallGrid()}
                    <button className="btn btn-success" >Купить</button>
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