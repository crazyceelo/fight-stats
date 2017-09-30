'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import MainSliderComp from './component';

class MainSlider extends Component{
    componentDidMount(){
        $(function(){ $('.carousel.carousel-slider').carousel({full_width: true}); });
    }
    render(){
        return(
            <MainSliderComp />
        );
    }
};

const mapStateToProps = (state)=>{
    data:{

    }
};

const mapDispatchToProps = (dispatch)=>{
    actions:{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MainSlider);