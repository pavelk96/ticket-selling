import React,{Component} from "react";

import Poster from "../poster";
import ErrorBoundry from "../error/error-boundry/error-boundry";
import RegistrationButton from "../header/registration-button";
import Search from "../header/search";
import MovieTrailer from "../movie-trailer";
import Menu from "../header/menu";
import MovieDetails from "../movie-details";
import MovieDescription from "../movie-description";

export default class App extends Component {


  render() {
    return(
          <div>
              <ErrorBoundry>
                  <Menu/>
                  <RegistrationButton/>
                  <Search/>
                  <MovieTrailer/>
                  <Poster/>
                  <MovieDetails/>
                  <MovieDescription/>
              </ErrorBoundry>
          </div>
    )
  }
}


