import React,{Component} from "react";
import Poster from "../poster";
import ErrorBoundry from "../error/error-boundry/error-boundry";

export default class App extends Component {


  render() {
    return(
          <div>
              <ErrorBoundry>
                  <Poster/>
              </ErrorBoundry>
          </div>

    )
  }
}


