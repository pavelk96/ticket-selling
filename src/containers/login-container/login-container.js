import React,{Component} from "react";
import {Button, Input, message} from "antd";
import {loginUser} from "../../actions";
import {UserOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import AuthServices from "../../services/user-info";

const authServices = new AuthServices();
class LoginContainer extends Component {

    form = {
        email: "",
        password: ""
    }

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
            message.error(e.message)
        }
    };

    changeHandler = event => {
        const newForm = {...this.state?.form,[event.target.name]: event.target.value};
        this.setState({form: newForm});
    };

    render () {

        return (
            <div className="profile-menu">
                <div>
                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                        <Input
                            prefix={<UserOutlined />}
                            className="form-control"
                            placeholder="Введите email"
                            id="email"
                            type="text"
                            name="email"
                            onChange={this.changeHandler}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                    <div className="col-lg-10">
                        <Input.Password
                            className="form-control"
                            placeholder="Введите пароль"
                            id="password"
                            type="text"
                            name="password"
                            onChange={this.changeHandler}/>
                    </div>
                </div>
                <Button onClick={this.loginHandler}>Войти</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state?.isAuthorized,
        isLoading: state?.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => dispatch(loginUser())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);