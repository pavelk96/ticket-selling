import React, {Component} from "react";
import {connect} from "react-redux";
import MovieDetailsSearch from "../../../components/movie-item-block/movie-details-search";
import Spinner from "../../../services/spinner";

class MovieDetailsSearchContainer extends Component{



    render(){
        const {isLoading, filmsSearch} = this.props;
        return (
            <>
                { isLoading ? <Spinner /> : (filmsSearch || []).map(film => <MovieDetailsSearch key={film.filmId} film={film} />) }
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


export default connect(mapStateToProps)(MovieDetailsSearchContainer);
