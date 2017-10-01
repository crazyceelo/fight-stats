'use strict';

//Import packages
import React,{Component} from 'react';
import {connect} from 'react-redux';

//Import local dependencies
import NavbarComp from './component';

//Connect to live server
const socket = (window.location.hostname == 'localhost' ? io.connect("localhost:3000") : io.connect(window.location.hostname));

class Navbar extends Component{
    componentDidMount(){
        $(".button-collapse").sideNav();        
    }
    render(){
        return(
            <NavbarComp data={this.props.data} actions={this.props.actions}/>
        );
    }
};

const mapStateToProps = (state)=>{
    return({
        data:{
            nav: state.navbarReducer
        }
    });
};

const mapDispatchToProps = (dispatch)=>{
    return({
        actions:{

        }
    });
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);


