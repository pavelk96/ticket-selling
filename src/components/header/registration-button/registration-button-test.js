import AuthorizationForm from "../../auth/ authorization-form";
import {fetchFavoriteFilm, fetchFavoriteFilmsId, logoutUser} from "../../../actions";

import './registration-button.css';

import { withRouter } from "react-router-dom";
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Menu as MenuAnt} from "antd";


class RegistrationButton111 extends Component {

    menu = (
        <MenuAnt>
            <MenuAnt.Item>

            </MenuAnt.Item>
        </MenuAnt>
    );

    state = {
        showMenuProfile: false
    };

    getFavoriteFilms  = () => {
        this.props.history.push("/favorite-films");
    };

    menuProfileRedirect = () => {
        this.props.history.push("/profile");
    }

    render () {
        const {isAuthorized} = this.props;

        const handleLogoutButton = () => {
            this.setState({showMenuProfile: false});
            this.props.logoutUser();
        };


        const buttonLogout = (
            <Button type="primary" onClick={() => {showMenuProfileClick()}}>{localStorage.getItem("email")}</Button>
        );

        const showMenuProfileClick = () =>{
            this.setState({showMenuProfile: !this.state.showMenuProfile})
        }

        const content = isAuthorized ? buttonLogout : <AuthorizationForm/>;

        const menuProfile = (
            <>
                <Button type="primary" className="btn" onClick={() => this.menuProfileRedirect()}>Мой профиль</Button>
                <Button type="primary" className="btn" onClick={this.getFavoriteFilms}>Мои фильмы</Button>
                <Button type="primary" className="btn" onClick={() => {handleLogoutButton()}}>Logout</Button>
            </>
        );

        const contentMenuProfile = this.state.showMenuProfile ? menuProfile : null;


        return (
            <>
                {content}
                {contentMenuProfile}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized,
        favoriteFilmsData: state.favoriteFilmsData,
        favoriteFilmsId: state.favoriteFilmsId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        fetchFavoriteFilmsId : fetchFavoriteFilmsId(dispatch),
        fetchFavoriteFilm: fetchFavoriteFilm(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationButton111));