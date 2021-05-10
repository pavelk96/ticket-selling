import React, {Component} from "react";
import {connect} from "react-redux";

import MoreDetailsButton from "../../../components/movie-item-block/more-details-button";
import BuyTicketButton from "../../../components/movie-item-block/buy-ticket-button";
import AddFavoriteFilmButton from "../../../components/movie-item-block/add-favorite-film-button";

class MovieDetailsSearchContainer extends Component{

render(){
    const {film, isAuthorized } = this.props;
    const {posterUrlPreview, nameRu, nameEn, filmLength, rating,ratingVoteCount, year, filmId } = film;

    return(
        <div className="movie-details">
            <img src={posterUrlPreview} alt="img" width="200" height="280" className="poster-preview"/>
            <span>
                    <h1>{nameRu}</h1>
                    <i>{nameEn + "  "}</i>
                    <i>{year + "год"}</i>
                    <li>{this.props?.film.genres.map(genres => <i key={filmId + genres.genre}>{genres.genre + " "}</i>)}</li>
                    <li>Продолжительность фильма: {filmLength}</li>
                    <li>Рейтинг фильма:{rating} Количество отценок: {ratingVoteCount}  </li>
                    <MoreDetailsButton filmId={filmId}/>
                {isAuthorized && <BuyTicketButton filmId={filmId} year={year}/>}
                {isAuthorized && <AddFavoriteFilmButton filmId={filmId}/>}
                </span>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        filmData: state.filmData,
        isLoading: state.isLoading,
        isAuthorized: state.isAuthorized
    };
};

export default connect(mapStateToProps)(MovieDetailsSearchContainer)



