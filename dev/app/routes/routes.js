'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';

//Import Components
import Navbar from './../header/navbar/container';
import Footer from './../footer/footer/container';

class Routing extends Component{
    render(){
        return(
            <Router>
                    <Route path='/' component={Navbar} />
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