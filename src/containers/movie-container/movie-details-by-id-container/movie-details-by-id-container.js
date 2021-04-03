import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchFilmData} from "../../../actions";
import './movie-details-by-id-container.css';




class MovieDetailsByIdContainer extends Component{



    componentDidMount() {
        this.props.fetchFilmData(this.props.id)
    };


    render(){

        console.log(this.props.filmData?.data);

        return(
            <div className="movie-details-by-id-container">
                <img src={this.props.filmData?.data?.posterUrl} alt="img" width="300" height="480" className="poster-preview"/>
                <span>
                    <div><h1>{this.props.filmData?.data?.nameRu}<i>{this.props.filmData?.data?.nameEn + "  "}</i></h1></div>
                    <li>{this.props.filmData?.data?.year + "год"}</li>
                    <li>{this.props.filmData?.data?.description}</li>
                    <li><b>Продолжительность фильма: </b>{this.props.filmData?.data?.filmLength}</li>
                    <li><b>Примьера в россии:  </b>{this.props.filmData?.data?.premiereWorld}</li>
                    <li><b>Слоган:  </b>{this.props.filmData?.data?.slogan}</li>
                    <p><b>Факты:</b><br/></p>
                    {this.props?.filmData?.data?.facts.map(facts => <p key={this.props.filmData?.data?.filmId + Math.random()*100}>{facts}<br/></p>)}
                </span>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filmData: state.filmData,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmData: fetchFilmData(dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieDetailsByIdContainer);