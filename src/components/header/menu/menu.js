import React, {Component} from 'react';



export default class Menu extends Component {


    render () {

        return (
            <div>
            <button  className="btn">Новости</button>
            <button  className="btn">Фильмы</button>
            <button  className="btn">10 лучших фильмов</button>
            <button  className="btn">Цифровые релизы</button>
            <button  className="btn">Акции</button>
            </div>
        )
    }
}