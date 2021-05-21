import Spinner from "../../services/spinner";
import MovieDetailsSearchContainer from "../movie-container/movie-details-search-container/movie-details-search-container";
import {fetchFavoriteFilm, fetchFavoriteFilmsId} from "../../actions/index";

import React,{Component} from 'react';
import {connect} from "react-redux";

class FavoriteFilmsContainer extends Component{


    componentDidMount() {
        this.props.fetchFavoriteFilm()

    };

    render(){
        const {isLoading, favoriteFilmsData} = this.props;
        return(
            <div className="favorite-film">

                { isLoading ? <Spinner /> : (favoriteFilmsData || []).map(film => <MovieDetailsSearchContainer key={film?.filmId} film={film} />) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        favoriteFilmsId: state.favoriteFilmsId, // Список ид фильмов
        favoriteFilmsData: state.favoriteFilmsData // Ин-ция о фильмах
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavoriteFilm : fetchFavoriteFilm(dispatch),
        fetchFavoriteFilmsId: fetchFavoriteFilmsId(dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteFilmsContainer);