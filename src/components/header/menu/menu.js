import React, {Component} from 'react';
import './menu.css'
import {Link} from "react-router-dom";


export default class Menu extends Component {


    render () {

        return (
            <div className="menu">
            <Link to="/"><button className="btn" >Главная</button></Link>
            <button  className="btn">Фильмы</button>
            <button  className="btn">Топ ожидаемых фильмов</button>
            <button  className="btn">Цифровые релизы</button>
            <button  className="btn">Акции</button>
            </div>
        )
    };
};