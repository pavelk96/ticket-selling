import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../../../actions";
import './registration-button.css';

class RegistrationButton extends Component {

    state = {
        showMenuProfile: false
    }

    render () {

        const {isAuthorized} = this.props;

        const handleLoginButton = () => {
            this.props.loginUser()
        };

        const handleLogoutButton = () => {
            this.setState({showMenuProfile: false})
            this.props.logoutUser()
        };


        const buttonLogin = (
            <button className="btn btn-primary" onClick={() => {handleLoginButton()}}>Login</button>
        );

        const buttonLogout = (
            <div>
                <button className="btn btn-primary dropdown-toggle" onClick={() => {showMenuProfileClick()}}>$UserName</button>
            </div>
        );

        const showMenuProfileClick = () =>{
            this.setState({showMenuProfile: !this.state.showMenuProfile})
        }

        const content = isAuthorized ? buttonLogout : buttonLogin;
        
        const menuProfile = (
            <div className="profile-menu">
                <button className="btn btn-primary">Мой профиль</button>
                <button className="btn btn-primary">Мои фильмы</button>
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
        loginUser: () => dispatch(loginUser()),
        logoutUser: () => dispatch(logoutUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationButton);