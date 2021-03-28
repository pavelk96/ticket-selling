import React,{Component} from 'react';
import  "./movie-details.css";
import {connect} from "react-redux";
import {fetchFilmData,fetchFilmsSearchData, fetchFilmsDigitalReleasesData} from "../../../actions";


class MovieDetails extends Component{

    componentDidMount() {
        this.props.fetchFilmData("312")
        this.props.fetchFilmsSearchData("Властелин")
        this.props.fetchFilmsDigitalReleasesData("2020", "MAY")
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
        fetchFilmsSearchData: fetchFilmsSearchData(dispatch),
        fetchFilmsDigitalReleasesData: fetchFilmsDigitalReleasesData(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
