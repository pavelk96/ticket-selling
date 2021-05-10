import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchFavoriteFilmsData, logoutUser} from "../../../actions";
import './registration-button.css';
import AuthorizationForm from "../../auth/ authorization-form";
import AuthServices from "../../../services/auth";
import { withRouter } from "react-router";




class RegistrationButton extends Component {

    state = {
        showMenuProfile: false
    };

    getFavoriteFilms  = async () => {
        this.props.history.push("/favorite-films");
        await this.props.fetchFavoriteFilmsData()
    };

    render () {

        const {isAuthorized} = this.props;

        const handleLogoutButton = () => {
            this.setState({showMenuProfile: false});
            this.props.logoutUser();
        };

        const buttonLogout = (
            <div>
                <button className="btn btn-primary dropdown-toggle user-name"  onClick={() => {showMenuProfileClick()}}>{localStorage.getItem("email")}</button>
            </div>
        );

        const showMenuProfileClick = () =>{
            this.setState({showMenuProfile: !this.state.showMenuProfile})
        }

        const content = isAuthorized ? buttonLogout : <AuthorizationForm/>;

        const menuProfile = (
            <div className="profile-menu">
                <button className="btn btn-primary">Мой профиль</button>
                <button className="btn btn-primary" onClick={this.getFavoriteFilms}>Мои фильмы</button>
                <button className="btn btn-primary" onClick={() => {handleLogoutButton()}}>Logout</button>
            </div>
        );

        const contentMenuProfile = this.state.showMenuProfile ? menuProfile : null;


        return (
            <div>
                {content}
                {contentMenuProfile}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        fetchFavoriteFilmsData : fetchFavoriteFilmsData(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationButton));