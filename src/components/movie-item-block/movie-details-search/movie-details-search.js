import React,{Component} from 'react';
import  "./movie-details-search.css";
import MoreDetailsButton from "../more-details-button";


class MovieDetailsSearch extends Component{

    render(){
       const {posterUrlPreview, nameRu, nameEn, filmLength, rating,ratingVoteCount, year, filmId } = this.props?.film;

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
                </span>
            </div>
        )
    }
}


export default MovieDetailsSearch;