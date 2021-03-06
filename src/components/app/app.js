import React,{Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { Layout } from 'antd';

import ErrorBoundry from "../error/error-boundry/error-boundry";
import MovieDetailsByIdContainer from "../../containers/movie-container/movie-details-by-id-container";
import CinemaHallContainer from "../../containers/movie-container/cinema-hall-container";
import FavoriteFilms from "../../pages/favorite-films";
import SearchFilmPage from "../../pages/search-film-page";
import TopHeader from "../header/top-header";
import HomePage from "../../pages/home-page";
import {checkLoginUser, fetchFavoriteFilm} from "../../actions";

import './app.css';
import 'antd/dist/antd.css';
import RegistrationPage from "../../pages/registration-page"; // or 'antd/dist/antd.less'


const { Header, Content } = Layout;

class App extends Component {

    componentDidMount() {
        this.props.checkLoginUser()
        this.props.fetchFavoriteFilm()
    }

    render() {

        const {isAuthorized} = this.props;

        return (
                <Router>
                    <ErrorBoundry>
                <Layout>
                    <Header>
                        <TopHeader/>
                    </Header>
                    <Content>
                        <Route path="/film/:id"
                               render={({match}) => {
                                   const {id} = match.params
                                   return <MovieDetailsByIdContainer id={id}/>;
                               }}/>


                        <Route path="/" component={HomePage} exact />
                        <Route path="/search" component={SearchFilmPage} exact />
                        {
                            isAuthorized ? <>
                                <Route exact path="/registration" render={() => isAuthorized && (<Redirect to="/" />)} />
                                <Route path="/favorite-films" component={FavoriteFilms} exact />
                                <Route
                                    path="/buy-ticket/:id"
                                    render={({match: {params}}) => <CinemaHallContainer id={params?.id}/>}/>
                            </> : <>
                                <Route path="/registration" component={RegistrationPage} exact/>
                                <Route path="/" exact render={() => (<Redirect to="/registration" />)}/>
                                <Route exact path="/favorite-films" render={() => (<Redirect to="/registration" />)} />
                                <Route path="/buy-ticket/" render={() => (<Redirect to="/registration" />)} />
                            </>
                        }
                    </Content>
                </Layout>
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
        checkLoginUser: () => dispatch(checkLoginUser()),
        fetchFavoriteFilm: () => fetchFavoriteFilm(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
