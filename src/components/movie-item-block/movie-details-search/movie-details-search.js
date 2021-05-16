import React,{Component} from 'react';
import {connect} from "react-redux";
import Spinner from "../../../services/spinner";
import MovieDetailsSearchContainer from "../../../containers/movie-container/movie-details-search-container/movie-details-search-container";


import  "./movie-details-search.css";


class MovieDetailsSearch extends Component{
    render(){
        const {isLoading, filmsSearch} = this.props;
        return (
            <div className="movie-details-search">
                { isLoading ? <Spinner /> : (filmsSearch || []).map(film => <MovieDetailsSearchContainer key={film.filmId} film={film} />) }
            </div>
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