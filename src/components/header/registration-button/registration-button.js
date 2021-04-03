import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../../../actions";

class RegistrationButton extends Component {
    render () {

        const {isIsAuthorized} = this.props;

        const handleLoginButton = () => {
            this.props.loginUser()
        };

        const handleLogoutButton = () => {
            this.props.logoutUser()
        };


        const buttonLogin = (
            <button className="btn" onClick={() => {handleLoginButton()}}>Login</button>
        );

        const buttonLogout = (
            <button className="btn" onClick={() => {handleLogoutButton()}}>Logout</button>
        );

        const content = isIsAuthorized ? buttonLogout : buttonLogin;


        console.log(isIsAuthorized)

        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isIsAuthorized: state.IsAuthorized
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => dispatch(loginUser()),
        logoutUser: () => dispatch(logoutUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationButton);