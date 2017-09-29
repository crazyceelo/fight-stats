'use strict';

import React from 'react';

export default (props)=>{
    return(
        <div className="slider">
            <ul className="slides">
            <li>
                <img className='slide_top' src="http://www.sportshdwallpapers.com/download/ufc-undisputed-foot-strike_1920x1200_85-wide.jpg"/>
                <div className="caption center-align">
                <h3>Fight Stats | The all in one UFC fighter metrics.</h3>
                <h5 className="light grey-text text-lighten-3">UFC fighter statistics and events,<strong> anywhere.</strong></h5>
                </div>
            </li>
            <li>
                <img className='slide_top' src="http://media1.santabanta.com/full1/Sports/UFC/ufc-4a.jpg"/>
                <div className="caption left-align">
                <h3>See how your friends <strong>rank</strong> fighters.</h3>
                <h5 className="light grey-text text-lighten-3"><strong>Compare</strong> and <strong>create</strong> your own shareble fighter statistics with others.</h5>
                </div>
            </li>
            <li>
                <img className='slide_top' src="https://i1.wp.com/www.mmalatestnews.com/wp-content/uploads/2016/03/Mon_Mar_14_20-02-56_EDT_2016.png"/>
                <div className="caption right-align">
                <h3>Keep up with events and fighter statistic updates. </h3>
                <h5 className="light grey-text text-lighten-3">Follow your favorite fighters ranks, events, and much more.</h5>
                </div>
            </li>
            </ul>
        </div>
    );
};