import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchFilmsSearchData} from "../../../actions";
import {debounce} from "../../../services/utils";
import "./search.css";

class Search extends Component {




    handleSearchData  = debounce(e => this.props.fetchFilmsSearchData(e.target.value), 250);



    render () {
        return (
            <div className="search">
                <form>
                    <input className="form-control mr-sm-2" type="text" name="Search" placeholder="Search"  onChange={this.handleSearchData} />
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

export default connect(null, mapDispatchToProps)(Search);