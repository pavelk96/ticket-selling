import {fetchFilmsSearchData} from "../../../actions";
import {debounce} from "../../../services/utils";

import React, {Component} from 'react';
import { withRouter } from "react-router";
import {connect} from "react-redux";

import "./search.css";

class Search extends Component {

    handleSearchData  = debounce(e => this.props.fetchFilmsSearchData(e.target.value), 250);

    redirectSearch = () => {
        this.props.history.push("/search");
    }


    render () {
        return (
            <div className="search">
                <form>
                    <input className="form-control mr-sm-2" type="text" name="Search" placeholder="Search" onKeyPress={this.redirectSearch}  onChange={this.handleSearchData} />
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmsSearchData: fetchFilmsSearchData(dispatch)
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Search));