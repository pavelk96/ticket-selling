import UserInfo from "../../../services/user-info";
import React,{Component} from 'react';
import { message } from 'antd';

const userInfo = new UserInfo();

class AddFavoriteFilmButton extends Component{

    handleAddFavoriteFilm = async (filmId) => {
        try {
            const token = localStorage.getItem("token")
            const data = await userInfo.request('/api/user-info/add-favorite-film', 'POST', {filmId, token}, {})
            message.success(data.message)
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