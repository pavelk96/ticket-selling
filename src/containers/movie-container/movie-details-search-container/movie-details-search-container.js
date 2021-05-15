import React, {Component} from "react";
import {connect} from "react-redux";

import MoreDetailsButton from "../../../components/movie-item-block/more-details-button";
import BuyTicketButton from "../../../components/movie-item-block/buy-ticket-button";
import AddFavoriteFilmButton from "../../../components/movie-item-block/add-favorite-film-button";
import { Card } from 'antd';
import './movie-details-search-container.css';

const { Meta } = Card;

class MovieDetailsSearchContainer extends Component{

render(){
    const {film, isAuthorized } = this.props;
    const {posterUrlPreview, nameRu, nameEn, filmLength, rating,ratingVoteCount, year, filmId } = film;
    const description = (
        <>
            <h1>{nameRu}</h1>
            <i>{nameEn + "  "}</i>
            <li><b>Год: </b>{year + "год"}</li>
            <li><b>Жанр: </b>{this.props?.film.genres.map(genres => <i key={filmId + genres.genre}>{genres.genre + " "}</i>)}</li>
            <li><b>Продолжительность фильма:</b> {filmLength}</li>
            <li><b>Рейтинг фильма: </b>{rating} </li>
            <li><b>Количество оценок: </b>{ratingVoteCount}  </li>
        </>
    )


    return(
        <>
            <Card
                style={{ width: 333, marginTop: 16}}
                cover={
                    <img
                        alt="example"
                        src={posterUrlPreview}
                        height="550px"
                        width="100px"
                    />
                }
                actions={[
                    (isAuthorized && <BuyTicketButton filmId={filmId} year={year}/>),
                    <MoreDetailsButton filmId={filmId}/>,
                    (isAuthorized && <AddFavoriteFilmButton filmId={filmId}/>)
                ]}>
                <Meta
                    description={description}
                />
            </Card>
        </>
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



