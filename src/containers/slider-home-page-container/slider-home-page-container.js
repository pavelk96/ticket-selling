import React,{Component} from 'react';
import { Carousel } from 'antd';
import { connect} from "react-redux";
import {fetchFilmsDigitalReleasesData} from "../../actions";
import "./slider-home-page-container.css"


const contentStyle = {
    height: '10%',
    color: '#fff',
    lineHeight: '25px',
    background: '#364d79',
    display: "flex",
    flexDirection: "column",
    fleWrap: "wrap"
};

const imgStyle = {
    position: "center"
}


class SliderHomePageContainer extends Component{

  async componentDidMount()  {
        this.props.fetchFilmsDigitalReleasesData(2021, 3)
    };

    render(){

        const {filmsDigitalReleases} = this.props;

        const oneFilmData =  (idx) => {
            return (
                <>
                    <p>{filmsDigitalReleases.[idx]?.nameRu}</p>
                    <p>{filmsDigitalReleases.[idx]?.description}</p>
                    <img width={360} height={563} src={filmsDigitalReleases.[idx]?.posterUrlPreview} className={imgStyle} alt="film img"/>
                    <p>Продолжительность: {filmsDigitalReleases.[idx]?.filmLength}</p>
                </>
            )
        }

        return(
                <Carousel autoplay autoplaySpeed={2000} adaptiveHeight={true}>
                    <>
                        <div style={contentStyle}>
                            {oneFilmData(1)}
                        </div>
                    </>
                    <>
                        <div style={contentStyle}>
                            {oneFilmData(1)}
                        </div>
                    </>
                </Carousel>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filmsDigitalReleasesIsLoading: state.filmsDigitalReleasesIsLoading,
        filmsDigitalReleases: state.filmsDigitalReleases
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmsDigitalReleasesData: fetchFilmsDigitalReleasesData(dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SliderHomePageContainer);