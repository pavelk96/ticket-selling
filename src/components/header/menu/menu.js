import React, {Component} from 'react';
import './menu.css'
import {Link} from "react-router-dom";


export default class Menu extends Component {


    render () {

        return (
            <div className="menu">
            <Link to="/"><button className="btn btn-primary" >Главная</button></Link>
            <button  className="btn btn-primary ">Фильмы</button>
            <button  className="btn btn-primary">Топ ожидаемых фильмов</button>
            <button  className="btn btn-primary">Цифровые релизы</button>
            <button  className="btn btn-primary">Акции</button>
            </div>
        )
    };
};