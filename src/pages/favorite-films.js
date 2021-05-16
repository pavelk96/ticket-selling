import React,{Component} from 'react';
import FavoriteFilmsContainer from "../containers/favorite-films-container";


class FavoriteFilms extends Component{

    render(){

        return(
            <div style={{marginLeft: 700}}>
                <FavoriteFilmsContainer/>
            </div>
        )
    }
}



export default FavoriteFilms;