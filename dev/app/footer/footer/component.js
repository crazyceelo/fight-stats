'use strict';

import React from 'react';

export default (props) => {
    return(
        <footer className="page-footer blue darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About app name</h5>
                <p className="grey-text text-lighten-4">
                    description of why the app exists, who its for, etc.
                    You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Text
            </div>
          </div>
        </footer>
    );
};