'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';

//Import Components
import Navbar from './../header/navbar/container';
import MainSlider from './../body/home/main_slider/container';
import Footer from './../footer/main_footer/container';
import Sidebar from './../body/sidebar/container';

class Routing extends Component{
    render(){
        return(
            <Router>
                <body>
                    <header>
                        <Route path='/' component={Navbar} />
                    </header>
                    <main>
                        <Route path='/' component={MainSlider} />
                        <Route path='/events' component={Sidebar} />
                    </main>
                    <footer className="page-footer grey darken-4">
                        <Route path='/' component={Footer} />
                    </footer>
                </body>
            </Router>
        );
    }
};

function mapStateToProps(state){
    return{
        data: {

        }
    };
};

function mapDispatchToProps(dispatch){
    return {
        actions:{
            
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Routing);