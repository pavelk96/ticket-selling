import {fetchFilmsSearchData} from "../../../actions";
import {debounce} from "../../../services/utils";

import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";

import "./search.css";

import {Input} from 'antd';


class Search extends Component {

    handleSearchData  = debounce(e => this.props.fetchFilmsSearchData(e.target.value), 250);

    redirectSearch = () => {
        this.props.history.push("/search");
    }


    render () {
        return (
                <form>
                <Input.Search
                    type="text"
                    name="Search"
                    placeholder="Search"
                    allowClear
                    enterButton="Search"
                    size="middle"
                    onKeyPress={this.redirectSearch}
                    onChange={this.handleSearchData}
                    style={{width: 200}}
                />
            </form>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmsSearchData: fetchFilmsSearchData(dispatch)
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Search));