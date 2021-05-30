import './menu.css';

import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd';
import Search from "../search/search";
import RegistrationButton from "../registration-button/registration-button";



const Menu = () => {

        return (
            <div className="menu">
                <div>
                    <Link to="/"><Button type="primary" className="btn">Главная</Button></Link>
                    <Button type="primary" className="btn">Фильмы</Button>
                    <Button type="primary" className="btn">Топ ожидаемых фильмов</Button>
                </div>
                <div className="registration">
                    <RegistrationButton/>
                </div>
                <div className="search">
                    <Search/>
                </div>
           </div>

        )
    };


export default Menu;