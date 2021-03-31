import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchFilmData} from "../../../actions";
import './movie-details-by-id-container.css';




class MovieDetailsByIdContainer extends Component{



    componentDidMount() {
        this.props.fetchFilmData(this.props.id)
    };


    render(){

        const {id} = this.props;

        console.log(this.props.filmData?.data?.filmLength);

        return(
            <div className="movie-details-by-id-container">
                <img src={this.props.filmData?.data?.posterUrlPreview} alt="img" width="200" height="280" className="poster-preview"/>
                <span>
                    <div><h1>{this.props.filmData?.data?.nameRu}<i>{this.props.filmData?.data?.nameEn + "  "}</i></h1></div>
                    <li>{this.props.filmData?.data?.year + "год"}</li>
                    <li>{this.props.filmData?.data?.description}</li>
                    <li>Продолжительность фильма: {this.props.filmData?.data?.filmLength}</li>
                    <li>Примьера в россии:  {this.props.filmData?.data?.premiereWorld}</li>
                    <li>Слоган:  {this.props.filmData?.data?.slogan}</li>
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