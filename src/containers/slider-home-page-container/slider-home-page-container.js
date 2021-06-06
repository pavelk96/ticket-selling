import React,{Component} from 'react';
import { Carousel } from 'antd';
import { connect} from "react-redux";
import {fetchFilmsDigitalReleasesData} from "../../actions";
import "./slider-home-page-container.css"
import SpinnerSlider from "../../services/spinner-slider";


const contentStyle = {
    height: '10%',
    color: '#fff',
    lineHeight: '25px',
    background: '#364d79',
    display: "flex",
    justifyContent: "center",
};

const imgStyle = {
    display: "flex",
}

class SliderHomePageContainer extends Component{

  async componentDidMount()  {
        this.props.fetchFilmsDigitalReleasesData(2020, 3)
    };

    render(){

        const {filmsDigitalReleases, filmsDigitalReleasesIsLoading} = this.props;

        const renderFilmData =  () => {
            const arr = [];
            for (let i =0; i<=5; i++) {
                arr.push(
                    <div key={i}>
                        <div style={contentStyle}>
                            <img width={360} height={563} src={filmsDigitalReleases[i]?.posterUrlPreview} className={imgStyle} alt="film img"/>
                            <div style={{marginLeft: "50px", marginTop: "150px"}}>
                                <p>{filmsDigitalReleases[i]?.nameRu}</p>
                                <p>{filmsDigitalReleases[i]?.description}</p>
                                <p>Продолжительность: {filmsDigitalReleases[i]?.filmLength}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            return arr;
        }


        return(
                    <Carousel autoplay autoplaySpeed={2000} adaptiveHeight={true} >
                        {filmsDigitalReleasesIsLoading ? <SpinnerSlider/> : renderFilmData()}
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