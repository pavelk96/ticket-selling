import './menu.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd';
import Search from "../search/search";
import RegistrationButton from "../registration-button/registration-button";
import {connect} from "react-redux";


class Menu extends Component {


    render () {

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
                    { this.props.isAuthorized ? <Search/> : null}
                </div>



           </div>

        )
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized
    }
}

export default connect(mapStateToProps, null)(Menu);