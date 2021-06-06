import React, { Component } from 'react';
import "./seat-selection.css";
import {connect} from "react-redux";


class OnePlace extends Component {

    state = {
        selectedPlace: false
    };

    componentDidMount() {
        
    }

    render() {

        const {place, occupiedPlace} = this.props;

        let className = 'place';

        const handlePlaceSelected = () => {
            this.setState({selectedPlace: !this.state.selectedPlace})
            this.props.handleSelectedPlace();
        };

        if (this.state.selectedPlace) {
            className += ' ';
        } else {
            className = ' place place-selected';
        }

        const statePlace = (this.props.buyTicketData || []).includes(occupiedPlace);
        if (statePlace) {
            className = ' place occupied-place'
        }



        const onePlace = (
                <div disabled='true' title="Описание" className={className}>
                    <span  onClick={handlePlaceSelected}>{place}</span>
                </div>
        )

        return (
            <>
                {onePlace}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buyTicketData: state.buyTicketData
    }
}

export default connect(mapStateToProps, null)(OnePlace);