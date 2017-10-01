'use strict';

// import packages
import React,{Component} from 'react';
import {connect} from 'react-redux';

// import component
import EventPicksComp from './component';

class EventPicks extends Component{

    render(){
        return(
            <EventPicksComp />
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
            // code
        }
    })
}

export default connect()(EventPicksComp);