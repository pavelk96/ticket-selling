import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchFilmsSearchData} from "../../../actions";
import {debounce} from "../../../services/utils";

class Search extends Component {




    handleSearchData  = debounce(e => this.props.fetchFilmsSearchData(e.target.value), 300);



    render () {
        return (
            <div>
                <form>
                    <input type="text" name="Search" placeholder="Search"  onChange={this.handleSearchData} />
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