import UserInfo from "../../../services/user-info";

import React,{Component} from 'react';

const userInfo = new UserInfo();

class AddFavoriteFilmButton extends Component{

    handleAddFavoriteFilm = async (filmId) => {
        try {
            const token = localStorage.getItem("token")
            const data = await userInfo.request('/api/user-info/add-favorite-film', 'POST', {filmId, token}, {})
            console.log(data)
        } catch (e) {

        }
    };


    render(){
        const {filmId} = this.props;
        return(
            <>
                <button className="btn btn-info" onClick={() => this.handleAddFavoriteFilm(filmId)}>Add this film</button>
            </>
        )
    }
}

export default AddFavoriteFilmButton;