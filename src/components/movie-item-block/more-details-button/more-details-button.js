import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class MoreDetailsButton extends Component {

    handleMoreDetailsButton =  (filmId) => {
        const newPath =  `/film/${filmId}`
        this.props.history.push(newPath)
    };

    render () {

        const {filmId} = this.props;

        return (
            <>
                <button className="btn btn-primary"  onClick={() => this.handleMoreDetailsButton(filmId)}>Подробнее</button>
            </>
        )
    }
}

export default withRouter(MoreDetailsButton);