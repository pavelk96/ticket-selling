import React,{Component} from "react";
import './registration-container.css'


class RegistrationContainer extends Component {

    handleRegistration = async () => {
        console.log("reg")
    }

    render () {

        return (
            <div className="profile-menu">
                <div className="form-group">
                <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                    <div className="col-lg-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        <div className="checkbox">
                        </div>
                    </div>
                    </div>
                <button className="btn" onClick={this.handleRegistration}>Зарегистрироваться</button>
            </div>
        )
    }
}


export default RegistrationContainer;