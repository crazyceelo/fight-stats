'use strict';

import React from 'react';

export default (props) =>{
    return(
        <form onSubmit={()=>{props.actions.changeUsername(props.data.nav.newUsername)}}>
            <h1> Hello, {props.data.nav.username} </h1>
            <input onChange={props.actions.updateForm} value={props.data.nav.newUsername} type="text" placeholder="please enter a user name"/>
            <button type="submit">Submit Username</button>
        </form>
    );
};