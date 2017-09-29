'use strict';

import React,{Component} from 'react';
import {connect} from 'react-redux';

import FooterComp from './component';
// maybe import actions to click

class Footer extends Component{
    render(){
        return(
            <FooterComp />
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
        actions:{
            // code
        }
    })
}

export default connect()(FooterComp);