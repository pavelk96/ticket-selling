import React from 'react';
import {ReactComponent as SpinnerSVG} from "./spinner.svg";
import './spinner.css'

const Spinner = () => {
    return (
        <div className='spinner'>
            <SpinnerSVG/>
        </div>
    )
};

export default Spinner;
