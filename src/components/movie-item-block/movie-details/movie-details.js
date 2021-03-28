import React,{Component} from 'react';
import  "./movie-details.css";


class MovieDetails extends Component{

    render(){

        return(

            <div className="movie-details">
                <img src={this.props.film?.posterUrlPreview} alt="img" width="200" height="280" className="poster-preview"/>
                <span>
                    <h1>{this.props.film?.nameRu}</h1>
                    <li>{this.props.film?.description}</li>
                </span>
                <button className="child-active btn">Трейлер</button>
                <button className="child-active btn">Подробнее</button>
            </div>
        )
    }
}


export default MovieDetails;
