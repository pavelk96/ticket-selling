import React,{Component} from 'react';
import KinopoiskService from "../../../services/kinopoisk-service";



export default class MovieDetails extends Component{

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
        this.getFilm("634786");
        this.searchFilmByKeyWord("Мстители");
    }


    render(){

        return(


            <div>
                <h1>{this.state.label}</h1>
                <img src={this.state.posterUrlPreview}/>
                <span>{this.state.description}</span>
                <span> Жанры: {this.state.countries.map((country, index) => <span key={index + country}>{country} </span>)}</span>
            </div>
        )
    }
}
