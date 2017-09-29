'use strict';

import React from 'react';

export default (props)=>{
    return(
        <div className="carousel carousel-slider">
            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"/></a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"/></a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"/></a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"/></a>
        </div>
    );
};