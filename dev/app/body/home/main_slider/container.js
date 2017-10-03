'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import MainSliderComp from './component';

class MainSlider extends Component{
    componentDidMount(){
        $('.slider').slider();
    }
    render(){
        return(
            <MainSliderComp />
        );
    }
};

const mapStateToProps = (state)=>{
    return({
        data:{

        }
    })
};

const mapDispatchToProps = (dispatch)=>{
    return({
        actions:{
            
        }
    });
};

export default connect(mapStateToProps,mapDispatchToProps)(MainSlider);