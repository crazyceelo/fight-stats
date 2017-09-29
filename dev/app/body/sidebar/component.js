'use strict';

import React from 'react';

export default (props) => {
    return(
        <div className='container'>
        <a href="#/home" className="btn" onclick="Materialize.showStaggeredList('#staggered-test')">Click Me</a>
        </div>
    );
};