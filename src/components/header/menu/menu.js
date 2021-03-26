import React, {Component} from 'react';



export default class Menu extends Component {
    render () {
        return (
            <div>
            <button  className="btn">Новости</button>
            <button  className="btn">Фильмы</button>
            <button  className="btn">Скоро в кино</button>
            <button  className="btn">Скоро</button>
            <button  className="btn">Трейлеры</button>
            <button  className="btn">Акции</button>
            </div>
        )
    }
}