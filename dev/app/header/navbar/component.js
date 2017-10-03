'use strict';

import React from 'react';

export default (props) =>{
    return(
        <nav>
            <div className="nav-wrapper grey darken-4">
            <a href="/#" className="brand-logo"><img className='logo' src="/assets/main/images/logo.png"/></a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sign Up</a></li>
                <li><a href="badges.html">Login</a></li>
            </ul>
            <ul className="side-nav grey darken-4 white-text darken-2" id="mobile-demo">
                <li><a className='white-text' href="sass.html">Sign Up</a></li>
                <li><a className='white-text' href="badges.html">Login</a></li>
            </ul>
            </div>
        </nav>
    );
};