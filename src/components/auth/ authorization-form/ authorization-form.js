import React, {Component} from 'react';
import "./ authorization-form.css";
import {Link} from "react-router-dom";
import './ authorization-form.css';


class  AuthorizationForm extends Component {

    render () {

        return (
            <div>
                <Link to="/registration" className="btn btn-primary reg">Login</Link>
            </div>
        )
    }
}




export default AuthorizationForm;