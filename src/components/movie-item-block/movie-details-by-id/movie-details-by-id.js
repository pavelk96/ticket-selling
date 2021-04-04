import React,{Component} from 'react';
import MovieDetailsByIdContainer from "../../../containers/movie-container/movie-details-by-id-container/movie-details-by-id-container";
import BuyTicketButton from "../buy-ticket-button";


class MovieDetailsById extends Component{

    render(){

        return(
            <div className="movie-details">
                <MovieDetailsByIdContainer/>

            </div>
        )
    }
}



export default MovieDetailsById;