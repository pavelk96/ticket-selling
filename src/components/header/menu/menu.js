import React, {Component} from 'react';
import './menu.css'


export default class Menu extends Component {


    render () {

        return (
            <div className="menu">
            <button  className="btn">Новости</button>
            <button  className="btn">Фильмы</button>
            <button  className="btn">Топ ожидаемых фильмов</button>
            <button  className="btn">Цифровые релизы</button>
            <button  className="btn">Акции</button>
            </div>
        )
    };
};