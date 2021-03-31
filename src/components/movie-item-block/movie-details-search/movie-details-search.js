import React,{Component} from 'react';
import  "./movie-details-search.css";


class MovieDetailsSearch extends Component{

    render(){
       const {posterUrlPreview, nameRu, nameEn, filmLength, rating,ratingVoteCount, year, filmId } = this.props.film;
       const idx = 0;
       console.log(filmId)
        return(
            <div className="movie-details">
                <img src={posterUrlPreview} alt="img" width="200" height="280" className="poster-preview"/>
                <span>
                    <h1>{nameRu}</h1>
                    <i>{nameEn + "  "}</i>
                    <i>{year + "год"}</i>
                    <li>{this.props?.film.genres.map(genres => <i key={idx + 1}>{genres.genre + " "}</i>)}</li>
                    <li>Продолжительность фильма: {filmLength}</li>
                    <li>Рейтинг фильма:{rating} Количество отценок: {ratingVoteCount}  </li>
                </span>
                <button className="child-active btn">Трейлер</button>
                <button className="child-active btn">Подробнее</button>
            </div>
        )
    }
}


export default MovieDetailsSearch;