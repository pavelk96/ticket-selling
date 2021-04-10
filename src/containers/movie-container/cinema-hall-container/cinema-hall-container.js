import React, { Component } from 'react';
import OnePlace from "../../../components/seat-selection/one-place"


class CinemaHallContainer extends Component {

    hallGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        for (let i = 1; i <= 3; i++) {
            let placeArr = [];
            for (let n =1; n<=10; n++) {
                const place = `${i.toString()}.${n.toString()}`;
                placeArr = [...placeArr, <OnePlace key={place} place={n.toString()} handleSelectedPlace={() => this.handleSelectedPlace(place)} />];
            }
            gridArr = [...gridArr,<div key={i} >{placeArr}</div> ]
        }
        console.log(gridArr)
        return gridArr;
    }

    render() {


        console.log(this.state.selectedPlaceNumber)
        return (
            <div>
                {this.renderHallGrid()}
            </div>
        )
    }
}

export default CinemaHallContainer;