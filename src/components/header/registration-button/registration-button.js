import {fetchFavoriteFilm, fetchFavoriteFilmsId, logoutUser} from "../../../actions";

import './registration-button.css';

import {withRouter} from "react-router-dom";
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Dropdown, Menu as MenuAnt} from "antd";


class RegistrationButton extends Component {


    getFavoriteFilms  = () => {
        this.props.history.push("/favorite-films");
    };

    pushToRegistration = () => {
        if (this.props.isAuthorized) {
            return
        }
        this.props.history.push("/registration");
    }

    menuProfileRedirect = () => {
        this.props.history.push("/profile");
    }

    handleLogoutButton = async () => {
       await this.props.logoutUser();
       localStorage.removeItem("email");
    };

    render () {

        const menu = (
            (this.props?.isAuthorized ?
                    <MenuAnt>
                        <MenuAnt.Item>
                            <Button onClick={() => this.getFavoriteFilms()}>Мои фильмы</Button>
                        </MenuAnt.Item>
                        <MenuAnt.Item>
                            <Button onClick={() => this.handleLogoutButton()}>Logout</Button>
                        </MenuAnt.Item>
                    </MenuAnt> : <></>
            )
        );


        return (
            <div>
                <Dropdown overlay={menu} placement="topRight">
                    <Button type="primary" className="btn" onClick={this.pushToRegistration}>{this.props.userEmail || "Login" }</Button>
                </Dropdown>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state?.isAuthorized,
        favoriteFilmsData: state?.favoriteFilmsData,
        favoriteFilmsId: state?.favoriteFilmsId,
        userEmail: state?.user.email
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        fetchFavoriteFilmsId : fetchFavoriteFilmsId(dispatch),
        fetchFavoriteFilm: fetchFavoriteFilm(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationButton));