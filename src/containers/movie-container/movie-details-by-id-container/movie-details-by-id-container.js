import React,{Component} from 'react';
import {connect} from "react-redux";


class MovieDetailsByIdContainer extends Component{

    render(){


        return(
            <div>
                <h1>Продолжительность фильма: {(this.props.filmData?.data?.filmLength)}</h1>
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


export default connect(mapStateToProps,null)(MovieDetailsByIdContainer);