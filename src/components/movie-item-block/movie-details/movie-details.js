import React,{Component} from 'react';
import KinopoiskService from "../../../services/kinopoisk-service";
import  "./movie-details.css";
import {connect} from "react-redux";
import {fetchFilmData} from "../../../actions";


class MovieDetails extends Component{


    searchFilmByKeyWord = async (keyWord) => {
        const res = await this.KinopoiskService.getFilmsByLabel(keyWord);
        console.log(res);
    };

    componentDidMount() {
       // this.getFilm("26561");
       // this.searchFilmByKeyWord("Пя");
        this.props.fetchFilmData("2656")
    };


    render(){

        return(


            <div className="movie-details">
                <img src={this.props.filmData?.posterUrlPreview} width="200" height="280" className="poster-preview"/>
                <span>
                    <h1>{this.props.filmData?.label}</h1>
                    <li>{this.props.filmData?.description}</li>
                    <li><b>Страна: </b>{this.props.filmData?.countries.map((country, index) => <span key={index + country}>{country} </span>)}</li>
                </span>
                <button className="child-active btn">Трейлер</button>
                <button className="child-active btn">Подробнее</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmData: state.filmData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmData: fetchFilmData(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
