import React from 'react';
import {ReactComponent as SpinnerSVG} from "./spinner-slider.svg";
import './spinner-slider.css'

const SpinnerSlider = () => {
    return (
        <div className='spinner' >
            <SpinnerSVG/>
        </div>
    )
};

export default SpinnerSlider;
