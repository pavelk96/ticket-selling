import React, {Component} from 'react';



export default class Menu extends Component {

    getData = () => {
        fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/1309596', {
            headers:{
                'X-API-KEY': '312e0cda-065d-48f5-9ff8-12be8a5e44e4',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    render () {

        this.getData();
        this.getData();
        this.getData();
        this.getData();

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