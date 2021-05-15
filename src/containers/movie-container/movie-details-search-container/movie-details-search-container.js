import React, {Component} from "react";
import {connect} from "react-redux";

import MoreDetailsButton from "../../../components/movie-item-block/more-details-button";
import BuyTicketButton from "../../../components/movie-item-block/buy-ticket-button";
import AddFavoriteFilmButton from "../../../components/movie-item-block/add-favorite-film-button";
import {Card, Image} from 'antd';
import './movie-details-search-container.css';

const { Meta } = Card;

class MovieDetailsSearchContainer extends Component{

render(){
    const {film, isAuthorized } = this.props;
    const {posterUrl, nameRu, nameEn, filmLength, rating,ratingVoteCount, year, filmId } = film;
    const description = (
        <>
            <h1>{nameRu}</h1>
            {nameEn ? (<i>{nameEn + "  "}</i>) : null}
            {year ? (<li><b>Год: </b>{year + "год"}</li>) : null}
            {this.props?.film.genres ? (<li><b>Жанр: </b>{this.props?.film.genres.map(genres => <i key={filmId + genres.genre}>{genres.genre + " "}</i>)}</li>) : null}
            {filmLength ? (<li><b>Продолжительность фильма:</b> {filmLength}</li>) : null}
            {rating ? (<li><b>Рейтинг фильма: </b>{rating}</li>) : null}
            {ratingVoteCount ? (<li><b>Количество оценок: </b>{ratingVoteCount}  </li>) : null}
        </>
    )


    return(
        <>
            <Card
                style={{ width: 333, marginTop: 16}}
                cover={
                    <Image
                        alt="example"
                        src={posterUrl}
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



