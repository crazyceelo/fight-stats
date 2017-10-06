'use strict';

// import packages
import React,{Component} from 'react';
import {connect} from 'react-redux';

// import component
import EventPicksComp from './component';

class EventPicks extends Component{

    render(){
        return(
            <EventPicksComp data={this.props.data} actions={this.props.actions}/>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: {
            eventsComp: state.eventsReducer
        }
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        actions: {
            handleSubmit: (event)=>{
                dispatch(handleSubmit(event));
            }
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPicksComp);