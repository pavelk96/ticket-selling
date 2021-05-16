import React,{Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Layout } from 'antd';

import ErrorBoundry from "../error/error-boundry/error-boundry";
import MovieDetailsByIdContainer from "../../containers/movie-container/movie-details-by-id-container";
import CinemaHallContainer from "../../containers/movie-container/cinema-hall-container";
import FavoriteFilms from "../../pages/favorite-films";
import SearchFilmPage from "../../pages/search-film-page";
import TopHeader from "../header/top-header";
import HomePage from "../../pages/home-page";
import {checkLoginUser} from "../../actions";

import './app.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


const { Header, Footer, Content } = Layout;

class App extends Component {

    componentDidMount() {
        this.props.checkLoginUser()
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
                        <Route
                            path="/buy-ticket/:id"
                            render={({match: {params}}) => <CinemaHallContainer id={params?.id}/>}/>
                        {
                            isAuthorized && <div>
                                <Route path="/" component={HomePage} exact/>
                                <Route path="/favorite-films" component={FavoriteFilms} exact />
                                <Route path="/search" component={SearchFilmPage} exact />
                            </div>
                        }
                    </Content>
                    <Footer>
                        Footer
                    </Footer>
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
        checkLoginUser: () => dispatch(checkLoginUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
