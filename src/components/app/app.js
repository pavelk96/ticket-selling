import React,{Component} from "react";


import ErrorBoundry from "../error/error-boundry/error-boundry";
import RegistrationButton from "../header/registration-button";
import Search from "../header/search";
import Menu from "../header/menu";
import MovieDetails from "../movie-item-block/movie-details";


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
                      <MovieDetails/>
                  </div>
              </ErrorBoundry>
          </div>
    )
  }
}


