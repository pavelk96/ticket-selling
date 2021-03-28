import React, {Component} from "react";
import {fetchFilmData, fetchFilmsDigitalReleasesData, fetchFilmsSearchData} from "../../actions";
import {connect} from "react-redux";
import MovieDetails from "../../components/movie-item-block/movie-details";
import Spinner from "../../services/spinner";

class MovieContainer extends Component{

    componentDidMount() {
        this.props.fetchFilmsDigitalReleasesData("2019");
    };



    render(){
        const {isLoading, filmsDigitalReleases} = this.props;
        return (
            <>
                { isLoading ? <Spinner /> : (filmsDigitalReleases || []).map(film => <MovieDetails key={film.filmId} film={film}/>) }
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmsDigitalReleases: state.filmsDigitalReleases,
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
