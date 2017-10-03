'use strict';

// import packages
import React,{Component} from 'react';
import {connect} from 'react-redux';

// import component
import EventsComp from './component';
import {pickFighter} from './actions';

class Events extends Component{

    render(){
        return(
            <EventsComp data={this.props.data} actions={this.props.actions} />
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: {
            fightPicks: state.eventsReducer
        }
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        actions: {
            pickFighter: (fighterName)=>{
                dispatch(pickFighter(fighterName));
            }
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsComp);