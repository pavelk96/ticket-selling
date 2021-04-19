import React,{Component} from 'react';
import {connect} from "react-redux";
import  "./movie-details-search.css";
import Spinner from "../../../services/spinner";
import MovieDetailsSearchContainer from "../../../containers/movie-container/movie-details-search-container/movie-details-search-container";


class MovieDetailsSearch extends Component{
    render(){
        const {isLoading, filmsSearch} = this.props;
        return (
            <>
                { isLoading ? <Spinner /> : (filmsSearch || []).map(film => <MovieDetailsSearchContainer key={film.filmId} film={film} />) }
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


export default connect(mapStateToProps)(MovieDetailsSearch);