'use strict';

import React from 'react';

export default (props) => {
    return(
        <div className="container">
            <form onSubmit={props.actions.handleSubmit}>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Finalize your picks</h4></li>
                    {props.data.eventsComp.fighterData.map((match, index)=>{
                        return(
                            <li key={'event-' + match.event_id} className="collection-item">{match.event_name} | Your Fighter: {match.fighter} </li>
                        )
                    })}
                </ul>
                <div className="center-align">
                    <button className="waves-effect waves-light btn">Submit</button>
                </div>
                <br />
            </form>
        </div>
    )
}