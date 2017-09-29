'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';

//Import Components
import Navbar from './../header/navbar/container';
import MainSlider from './../body/home/main_slider/container';
import Footer from './../footer/footer/container';
import Sidebar from './../body/sidebar/container';

class Routing extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path='/' component={Navbar} />
                    <Route path='/' component={MainSlider} />
                    <Route path='/events' component={Sidebar} />
                    <Route path='/' component={Footer} />
                    
                </div>
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