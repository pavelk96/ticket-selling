import Spinner from "../../services/spinner";
import MovieDetailsSearchContainer from "../movie-container/movie-details-search-container/movie-details-search-container";
import {fetchFavoriteFilm} from "../../actions/index";

import React, { useEffect,} from 'react';
import { useDispatch, useSelector} from "react-redux";


 const FavoriteFilmsContainer = () => {
     const dispatch = useDispatch();
     const isLoading = useSelector(state => state.isLoading)
     const favoriteFilmsData = useSelector(state => state.favoriteFilmsData)

    useEffect(() => {
        fetchFavoriteFilm(dispatch)
    }, [])
        return(
            <div className="favorite-film">
                { isLoading ? <Spinner /> : (favoriteFilmsData || []).map(film => <MovieDetailsSearchContainer key={film?.filmId} film={film} />) }
            </div>
        )
    }


export default FavoriteFilmsContainer;