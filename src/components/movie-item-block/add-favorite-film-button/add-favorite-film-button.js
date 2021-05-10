import React,{Component} from 'react';


class AddFavoriteFilmButton extends Component{

    addFilm = (filmId) => {
        console.log("Добавляю фильм" ,filmId)
    }

    render(){

        return(
            <div>
                <button onClick={() => this.addFilm(this.props.filmId)}>Add this film</button>
            </div>
        )
    }
}

export default AddFavoriteFilmButton;