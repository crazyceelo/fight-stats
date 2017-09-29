'use strict';

import React from 'react';

export default (props) => {
    return(
        <div className='container'>

            <ul className="collapsible popout" data-collapsible="accordion">
                <li>
                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>




             {/* <ul id="slide-out" className="side-nav">
                <li><div className="user-view">
                <div className="background">
                    <img src="images/office.jpg" />
                </div>
                <a href="#!user"><img className="circle" src="images/yuna.jpg" /></a>
                <a href="#!name"><span className="white-text name">John Doe</span></a>
                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
             </ul>
                <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a> */}




            {/* <ul id="tabs-swipe-demo" className="tabs">
                <li className="tab col s3"><a href="#test-swipe-1">Jim vs jon</a></li>
                <li className="tab col s3"><a className="active" href="#test-swipe-2">jimasdf vs asdfsad</a></li>
                <li className="tab col s3"><a href="#test-swipe-3">wefasdfsdf vs asdfwefs</a></li>
                <li className="tab col s3"><a href="#test-swipe-4">asdfadfsasdf vs sdfwdfasdfewwfesdf</a></li>
            </ul>
            <div id="test-swipe-1" className="col s12 blue">Test 1 asdf</div>
            <div id="test-swipe-2" className="col s12 red">Test 2</div>
            <div id="test-swipe-3" className="col s12 green">Test 3</div>
            <div id="test-swipe-4" className="col s12 black">Test 4</div> */}



            {/* <a href="#/events" className="btn" onClick={() => Materialize.showStaggeredList('#card1')}>Click Me</a>
            <a href="#/events" className="btn" onClick={() => Materialize.showStaggeredList('#card2')}>Click Me</a>
            <ul id="card1">
                <li className="fadein" >
                    <h4><a href="#">List Item</a></h4>
                    <p>This is a description</p>
                </li>
            </ul>
            <ul id="card2">
                <li className="fadein" >
                    <h4><a href="#">List Item</a></h4>
                    <p>This is a description</p>
                </li>
            </ul> */}
        </div>
    );
};