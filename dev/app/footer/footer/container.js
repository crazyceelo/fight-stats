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

export default connect()(FooterComp);