import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchFavoriteFilmsData} from "../../actions/index";
import Spinner from "../../services/spinner";

class FavoriteFilmsContainer extends Component{

    render(){

        return(
            <div>
                {this.props.isLoading ? <Spinner/> : (this.props?.favoriteFilms || []).map(filmId => <p key={filmId}>{filmId}<br/></p>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        favoriteFilms: state.favoriteFilms
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavoriteFilmsData : fetchFavoriteFilmsData(dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteFilmsContainer);