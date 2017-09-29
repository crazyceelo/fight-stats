'use strict';

import React from 'react';

export default (props) =>{
    return(
        <nav>
            <div className="nav-wrapper blue darken-3">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sign Up</a></li>
                <li><a href="badges.html">Login</a></li>
            </ul>
            <ul className="side-nav blue darken-3" id="mobile-demo">
                <li><a href="sass.html">Sign Up</a></li>
                <li><a href="badges.html">Login</a></li>
            </ul>
            </div>
        </nav>
    );
};