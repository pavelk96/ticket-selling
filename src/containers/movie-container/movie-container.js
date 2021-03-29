import React, {Component} from "react";
import {fetchFilmData, fetchFilmsDigitalReleasesData, fetchFilmsSearchData} from "../../actions";
import {connect} from "react-redux";
import MovieDetails from "../../components/movie-item-block/movie-details";
import Spinner from "../../services/spinner";

class MovieContainer extends Component{

    componentDidMount() {
        this.props.fetchFilmsSearchData("Властелин");
    };


    render(){
        const {isLoading, filmsSearch} = this.props;
        return (
            <>
                { isLoading ? <Spinner /> : (filmsSearch || []).map(film => <MovieDetails key={film.filmId} film={film}/>) }

            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmsSearch: state.filmsSearch,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmData: fetchFilmData(dispatch),
        fetchFilmsSearchData: fetchFilmsSearchData(dispatch),
        fetchFilmsDigitalReleasesData: fetchFilmsDigitalReleasesData(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);
