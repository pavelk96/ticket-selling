import React,{Component} from 'react';
import {connect} from "react-redux";
import  "./movie-details-search.css";
import MoreDetailsButton from "../more-details-button";
import BuyTicketButton from "../buy-ticket-button";


class MovieDetailsSearch extends Component{

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
                    {isAuthorized && <BuyTicketButton/>}
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

export default connect(mapStateToProps)(MovieDetailsSearch);