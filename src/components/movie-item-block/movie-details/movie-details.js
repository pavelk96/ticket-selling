import React,{Component} from 'react';
import KinopoiskService from "../../../services/kinopoisk-service";
import  "./movie-details.css";
import {connect} from "react-redux";
import {fetchFilmData,fetchFilmsSearchData} from "../../../actions";


class MovieDetails extends Component{

    KinopoiskService = new KinopoiskService();

    searchFilmByKeyWord = async (keyWord) => {
        const res = await this.KinopoiskService.getFilmsByKeyWord(keyWord);
        console.log(res);
    };

    componentDidMount() {
        this.props.fetchFilmData("48028")
        this.props.fetchFilmsSearchData("Ну")
    };


    render(){

        return(


            <div className="movie-details">
                <img src={this.props.filmData?.posterUrlPreview} alt="img" width="200" height="280" className="poster-preview"/>
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
        fetchFilmsSearchData: fetchFilmsSearchData(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
