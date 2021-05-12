import React,{Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";

import ErrorBoundry from "../error/error-boundry/error-boundry";
import RegistrationButton from "../header/registration-button";
import Search from "../header/search";
import Menu from "../header/menu";
import MovieDetailsByIdContainer from "../../containers/movie-container/movie-details-by-id-container";
import CinemaHallContainer from "../../containers/movie-container/cinema-hall-container";
import FavoriteFilms from "../../pages/favorite-films";
import RegistrationPage from "../../pages/registration-page";
import {checkLoginUser} from "../../actions";

import './app.css';
import SearchFilmPage from "../../pages/search-film-page";

class App extends Component {

    componentDidMount() {
        this.props.checkLoginUser()
    }

    render() {

        const {isAuthorized} = this.props;

        return (
                <Router>
                    <ErrorBoundry>
                        <div>
                            <RegistrationButton/>
                            <Menu/>
                        </div>

                            <Route path="/registration" component={RegistrationPage} exact/>
                        {
                            isAuthorized && <div className="header">
                                <Search/>
                                <Route path="/" exact/>
                                <Route path="/film/:id"
                                       render={({match}) => {
                                           const {id} = match.params
                                           return <MovieDetailsByIdContainer id={id}/>;
                                       }}/>
                                <Route
                                    path="/buy-ticket/:id"
                                    render={({match: {params}}) => <CinemaHallContainer id={params?.id}/>}
                                />
                                <Route path="/favorite-films" component={FavoriteFilms} exact />
                                <Route path="/search" component={SearchFilmPage} exact />
                            </div>
                        }
                    </ErrorBoundry>
                </Router>
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
        checkLoginUser: () => dispatch(checkLoginUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
