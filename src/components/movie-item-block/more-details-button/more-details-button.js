import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchFilmData} from "../../../actions";

class MoreDetailsButton extends Component {

    render () {

        const {filmId} = this.props;


        const handleMoreDetailsButton =  (filmId) => {
            return  this.props.fetchFilmData(filmId)
        };

        return (
            <div>
                <button className="child-active btn">Трейлер</button>
                <button className="child-active btn"  onClick={() => handleMoreDetailsButton(filmId)}>Подробнее</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmData: state.filmData,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmData: fetchFilmData(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreDetailsButton);