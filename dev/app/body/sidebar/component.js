'use strict';

import React from 'react';

export default (props) => {
    return(
        <div className='container'>
            <ul className="collapsible popout" data-collapsible="accordion">
                <li>
                    <div className="collapsible-header"><i className="material-icons">details</i>
                        <li><span className="fighterName1Spacing">Jim </span> <span className="new badge red badge1Spacing" data-badge-caption=""> 40%</span></li> <span className="versusSpacing">vs</span>
                        <li><span className="fighterName2Spacing">Jon</span> <span className="new badge green badge2Spacing" data-badge-caption=""> 60%</span></li>
                    </div>
                    <div className="collapsible-body">
                        <span>
                            <table className="responsive-table striped bordered">
                                <thead>
                                <tr>
                                    <th>Details</th>
                                    <th>Jim</th>
                                    <th>Jon</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    <td>$3.76</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    <td>$7.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">details</i>Second</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">details</i>Third</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
        </div>
    );
};