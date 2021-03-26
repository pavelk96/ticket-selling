import React,{Component} from "react";

import Poster from "../poster";
import ErrorBoundry from "../error/error-boundry/error-boundry";
import RegistrationButton from "../header/registration-button";
import Search from "../header/search";
import MovieTrailer from "../movie-trailer";
import Menu from "../header/menu";
import MovieDetails from "../movie-details";
import MovieDescription from "../movie-description";

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
                      <MovieDescription/>
                      <MovieTrailer/>
                      <MovieDetails/>
                  </div>
              </ErrorBoundry>
          </div>
    )
  }
}


