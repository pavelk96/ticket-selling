import React,{Component} from "react";

import Poster from "../movie-item-block/poster";
import ErrorBoundry from "../error/error-boundry/error-boundry";
import RegistrationButton from "../header/registration-button";
import Search from "../header/search";
import MovieTrailer from "../movie-item-block/movie-trailer";
import Menu from "../header/menu";
import MovieDetails from "../movie-item-block/movie-details";
import MovieSpecification from "../movie-item-block/movie-specification";

import './app.css';

export default class App extends Component {



  render() {
    return(
          <div>
              <ErrorBoundry>
                  <div className="header">
                      <Search/>
                      <RegistrationButton/>
               </div>
                  <div>
                      <Menu/>
                  </div>
                  <div className="movies">
                      <Poster/>
                      <MovieSpecification/>
                      <MovieTrailer/>
                      <MovieDetails/>
                  </div>
              </ErrorBoundry>
          </div>
    )
  }
}


