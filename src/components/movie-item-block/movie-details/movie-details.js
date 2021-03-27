import React,{Component} from 'react';
import KinopoiskService from "../../../services/kinopoisk-service";
import  "./movie-details.css";
import {connect} from "react-redux";



class MovieDetails extends Component{

    KinopoiskService = new KinopoiskService();

    state = {
        countries: [],
        label: "",
        description: "",
        distributors: "",
        filmId: "",
        filmLength: "",
        facts: [],
        genres: [],
        posterUrl: "",
        posterUrlPreview: "",
        premiereWorld: "",
        year: ""
    }

    getFilm = async (id) => {
        const res = await this.KinopoiskService.getFilmById(id);
        this.setState(
            {countries:res?.countries,
                label: res?.label,
                description: res?.description,
                distributors: res?.distributors,
                filmId: res?.filmId,
                filmLength: res?.filmLength,
                facts: [],
                genres: [],
                posterUrl: res?.posterUrl,
                posterUrlPreview: res?.posterUrlPreview,
                premiereWorld: res?.premiereWorld,
                year: res?.year
            })
    };

    searchFilmByKeyWord = async (keyWord) => {
        const res = await this.KinopoiskService.getFilmsByLabel(keyWord);
        console.log(res);
    }
    componentDidMount() {
        this.getFilm("1311396");
        this.searchFilmByKeyWord("2021");
    }


    render(){

        return(


            <div className="movie-details">
                <img src={this.state.posterUrlPreview} width="200" height="280" className="poster-preview"/>
                <span>
                    <h1>{this.state.label}</h1>
                    <li>{this.state.description}</li>
                    <li><b>Страна: </b>{this.state.countries.map((country, index) => <span key={index + country}>{country} </span>)}</li>
                </span>
                <button className="child-active btn">Трейлер</button>
                <button className="child-active btn">Подробнее</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        label: state.label,
        description: state.description,
        distributors: state.distributors,
        filmId: state.filmId,
        filmLength: state.filmLength,
        facts: state.facts,
        genres: state.genres,
        posterUrl: state.posterUrl,
        posterUrlPreview: state.posterUrlPreview,
        premiereWorld: state.premiereWorld,
        year: state.year
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
