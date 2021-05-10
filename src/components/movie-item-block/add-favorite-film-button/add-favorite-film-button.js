import React,{Component} from 'react';
import UserInfo from "../../../services/user-info";

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

        return(
            <div>
                <button onClick={() => this.handleAddFavoriteFilm(this.props.filmId)}>Add this film</button>
            </div>
        )
    }
}

export default AddFavoriteFilmButton;