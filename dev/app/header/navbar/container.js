'use strict';

//Import packages
import React,{Component} from 'react';
import {connect} from 'react-redux';

//Import local dependencies
import NavbarComp from './component';
import {changeUsername, updateForm} from './actions';

class Navbar extends Component{
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
            changeUsername:(newName)=>{
                dispatch(changeUsername(newName));
            },
            updateForm: (event)=>{
                dispatch(updateForm(event));
            }
        }
    });
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);


