import React,{Component} from 'react';
import { message } from 'antd';
import {connect} from "react-redux";
import {fetchAddFavoriteFilm} from "../../../actions";
import SpinnerAddFavoriteFilm from "../../../services/spinner-add-favorite-film";
import notLike from "./notLike.png";
import Like from "./Like.png"



class AddFavoriteFilmButton extends Component{

    handleAddFavoriteFilm =  (filmId, method) => {
            this.props.fetchAddFavoriteFilm(filmId, method)
            if (method === "add") {
                message.success("Фильм добавлен в избранное")
            } else if (method === "delete") {
                message.info("Фильм удален из избранного")
            }

    };

    renderButtuon = () => {
        const findArr = this.props.favoriteFilmsId.includes(this.props.filmId)
        if (findArr) {
            return (
                <img src={Like} onClick={() => this.handleAddFavoriteFilm(this.props.filmId, "delete")} />
            )
        } else {
            return (
                <img src={notLike} onClick={() => this.handleAddFavoriteFilm(this.props.filmId, "add")} />
            )
        }
    }

    render(){
        const {addFavoriteFilmIsLoading} = this.props;
        return(
            <>
                {addFavoriteFilmIsLoading ? <SpinnerAddFavoriteFilm/> : this.renderButtuon()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addFavoriteFilmIsLoading: state.addFavoriteFilmIsLoading,
        favoriteFilmsId: state.favoriteFilmsId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddFavoriteFilm: fetchAddFavoriteFilm(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavoriteFilmButton);