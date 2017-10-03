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
                <div className='materialize-enabled'>
<<<<<<< HEAD
                    <Route path="/">
                        <header>
                            <Navbar />
                        </header>
                    </Route>
                    <Switch>
                        <Route exact path='/'>
                            <main>
                                <Route path='/' component={MainSlider} />
                                <Route path='/events' component={Events} />
                                <Route path='/events' component={EventPicks} />
                            </main>
                        </Route>
                        <Route  exact path='/events'>
                            <main>
                                <Route path='/events' component={Events} />
                                <Route path='/events' component={EventPicks} />
                            </main>
                        </Route>
                    </Switch>
                    <Route path="/">
                        <footer className="page-footer grey darken-4">
                            <Footer />
                        </footer>
                    </Route>
=======
                <Route path="/">
                    <header>
                        <Navbar />
                    </header>
                </Route>
                <Switch>
                    <Route exact path='/'>
                        <main>
                            <Route path='/' component={MainSlider} />
                            <Route path='/events' component={Events} />
                            <Route path='/events' component={EventPicks} />
                        </main>
                    </Route>
                    <Route  exact path='/events'>
                        <main>
                            <Route path='/events' component={Events} />
                            <Route path='/events' component={EventPicks} />
                        </main>
                    </Route>
                </Switch>
                <Route path="/">
                    <footer className="page-footer grey darken-4">
                        <Footer />
                    </footer>
                </Route>
>>>>>>> 3209d1fbefb92cc700096a0ce14c915d73c6c51e
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