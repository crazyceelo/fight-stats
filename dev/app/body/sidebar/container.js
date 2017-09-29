'use strict';

// import packages
import React,{Component} from 'react';
import {connect} from 'react-redux';

// import component
import SidebarComp from './component';

class Sidebar extends Component{
    componentDidMount(){
        // $('ul.tabs').tabs();
        // $('.button-collapse').sideNav('show');
    }

    render(){
        return(
            <SidebarComp />
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: {
            // code
        }
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        actions: {
            //code
        }
    })
}

export default connect()(SidebarComp);