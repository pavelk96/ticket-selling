import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchFilmData} from "../../../actions";
import './movie-details-by-id-container.css';
import BuyTicketButton from "../../../components/movie-item-block/buy-ticket-button";
import Spinner from "../../../services/spinner";


class MovieDetailsByIdContainer extends Component{

    componentDidMount() {
        this.props.fetchFilmData(this.props.id)
    };


    render(){
        const {filmData, isAuthorized} = this.props;
        const {data} = filmData;

        return(
            <>
                {this.props.isLoading ? <Spinner/> :
                    <div className="movie-details-by-id-container">
                        <img src={data?.posterUrl} alt="img" width="300" height="480" className="poster-preview"/>
                        <span>
                    <div><h1>{data?.nameRu}{"  ("}<i>{data?.nameEn}{")"}</i></h1></div>
                    <li>{data?.year + "год"}</li>
                    <li>{data?.description}</li>
                    <li><b>Продолжительность фильма: </b>{data?.filmLength}</li>
                    <li><b>Примьера в россии:  </b>{data?.premiereWorld}</li>
                    <li><b>Слоган:  </b>{data?.slogan}</li>
                    <p><b>Факты:</b><br/></p>
                            {data?.facts.map(facts => <p key={data?.filmId + Math.random()*100}>{facts}<br/></p>)}
                </span>
                        {isAuthorized && <BuyTicketButton filmId={data?.filmId}/>}
                    </div>}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filmData: state.filmData,
        isLoading: state.isLoading,
        isAuthorized: state.isAuthorized
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmData: fetchFilmData(dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieDetailsByIdContainer);