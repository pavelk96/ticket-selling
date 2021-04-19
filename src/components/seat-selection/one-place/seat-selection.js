import React, { Component } from 'react';
import "./seat-selection.css";


 class OnePlace extends Component {

    state = {
        selectedPlace: false
    };




    render() {

        const {place} = this.props;

        let className = 'place';

        const handlePlaceSelected = () => {
            this.setState({selectedPlace: !this.state.selectedPlace})
            this.props.handleSelectedPlace();
        };

        if (this.state.selectedPlace) {
            className += ' place-selected';
        } else {
            className = ' place';
        }

        const onePlace = (
                <div title="Описание" className={className}>
                    <span onClick={handlePlaceSelected}>{place}</span>
                </div>
        )

        return (
            <>
                {onePlace}
            </>
        )
    }
}

export default OnePlace;