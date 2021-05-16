import React,{Component} from "react";
import {Route} from "react-router-dom";
import RegistrationPage from "../../../pages/registration-page";
import Menu from "../menu";



class TopHeader extends Component {


    render () {

        return (
            <>
                <Menu/>
                <Route path="/registration" component={RegistrationPage} exact/>
            </>
        )
    }
}


export default TopHeader;