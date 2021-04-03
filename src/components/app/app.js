import React,{Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import ErrorBoundry from "../error/error-boundry/error-boundry";
import RegistrationButton from "../header/registration-button";
import Search from "../header/search";
import Menu from "../header/menu";
import MovieDetailsSearchContainer from "../../containers/movie-container/movie-details-search-container";
import MovieDetailsByIdContainer from "../../containers/movie-container/movie-details-by-id-container";
import './app.css';


export default class App extends Component {


    render() {
        return (
            <div>
                <Router>
                    <ErrorBoundry>
                        <div className="header">
                            <Search/>
                            <RegistrationButton/>
                        </div>
                        <div>
                            <Menu/>
                        </div>
                        <div>
                            <Route path="/" component={MovieDetailsSearchContainer} exact/>
                            <Route path="/film/:id"
                                   render={({match}) => {
                                       const {id} = match.params
                                       return <MovieDetailsByIdContainer id={id}/>;
                                   }}/>
                        </div>
                    </ErrorBoundry>
                </Router>
            </div>
        )
    }
}


