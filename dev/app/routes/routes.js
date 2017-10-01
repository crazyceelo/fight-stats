'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';

//Import Components
import Navbar from './../header/navbar/container';
import MainSlider from './../body/home/main_slider/container';
import Footer from './../footer/main_footer/container';
import Events from './../body/events/container';
import EventPicks from './../body/eventpicks/container';

class Routing extends Component{
    render(){
        return(
            <Router>
                <div >
                    <Route path='/' component={Navbar} />
                    <Route exact path='/home' component={MainSlider} />
                    <Route path='/events' component={Events} />
                    <Route path='/events' component={EventPicks} />
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