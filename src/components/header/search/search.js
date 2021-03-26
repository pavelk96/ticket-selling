import React, {Component} from 'react';


export default class Search extends Component {
    render () {
        return (
            <div>
                <input type="text" size="20"/>
                <button className="btn">Search</button>
            </div>
        )
    }
}