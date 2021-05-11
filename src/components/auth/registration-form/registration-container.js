import React,{Component} from "react";
import './registration-container.css';
import AuthServices from "../../../services/user-info";
import {connect} from "react-redux";
import {loginUser} from "../../../actions";
import { withRouter } from "react-router";



const authServices = new AuthServices();

class RegistrationContainer extends Component {

    form = {
        email: "",
        password: ""
    }

    handleRegistration = async () => {
        try {
            const data = await authServices.request('/api/auth/register', 'POST', {...this.state.form}, {})
            console.log(data)
        } catch (e) {}

    };


    loginHandler = async () => {
        try {
            const data = await authServices.request('/api/auth/login', 'POST', {...this.state.form}, {})
            if (data && data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", data.email);
                await this.props.loginUser();
                this.props.history.push("/");
            }
        } catch (e) {

        }
    };

    changeHandler = event => {
        const newForm = {...this.state?.form,[event.target.name]: event.target.value};
        this.setState({form: newForm});
    };

    render () {

        console.log(this.props)

        return (
            <div className="profile-menu">
                <div className="form-group">
                <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                <div className="col-lg-10">
                    <input
                           className="form-control"
                           placeholder="Введите email"
                           id="email"
                           type="text"
                           name="email"
                           onChange={this.changeHandler}/>
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                    <div className="col-lg-10">
                        <input
                               className="form-control"
                               placeholder="Введите email"
                               id="password"
                               type="text"
                               name="password"
                               onChange={this.changeHandler}/>
                        <div className="checkbox">
                        </div>
                    </div>
                    </div>
                        <button className="btn" onClick={this.handleRegistration}>Зарегистрироваться</button>
                        <button className="btn" onClick={this.loginHandler}>Войти</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => dispatch(loginUser())
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer));