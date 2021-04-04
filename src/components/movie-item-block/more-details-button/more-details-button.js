import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class MoreDetailsButton extends Component {

    render () {

        const {filmId} = this.props;
        const {history} = this.props;

        const handleMoreDetailsButton =  (filmId) => {
            const newPath =  `/film/${filmId}`
            history.push(newPath)
        };

        return (
            <div>
                <button className="btn btn-primary">Трейлер</button>
                <button className="btn btn-primary"  onClick={() => handleMoreDetailsButton(filmId)}>Подробнее</button>
            </div>
        )
    }
}

export default withRouter(MoreDetailsButton);