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
                            <div className="center-align">
                                <form action="#">
                                    <p className="center-align">
                                        Pick the winner
                                    </p>
                                    <ul className="row">
                                        <li className="col s6">
                                            <p className="center-align">
                                                <input className="" name="group1" type="radio" id="test1" value="Jim"/>
                                                <label htmlFor="test1">Jim</label>
                                            </p>
                                        </li>
                                        <li className="col s6">
                                            <p className="center-align">
                                                <input className="" name="group1" type="radio" id="test2" value="Jon"/>
                                                <label htmlFor="test2">Jon</label>
                                            </p>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div>
                            <table className="responsive-table striped bordered table1">
                                <thead>
                                    <tr>
                                        <th>Details</th>
                                        <th>Jim</th>
                                        <th>Jon</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td>Wins/Losses/Draws</td>
                                        <td className="record">23-3-0</td>
                                        <td className="record">16-2-0</td>
                                    </tr>
                                    <tr>
                                        <td>Avg fight time</td>
                                        <td className="fightTime">9:46</td>
                                        <td className="fightTime">9:48</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>5'11</td>
                                        <td>5'9</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td>155 lbs.</td>
                                        <td>155 lbs.</td>
                                    </tr>
                                    <tr>
                                        <td>Reach</td>
                                        <td>76</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td>Stance</td>
                                        <td>Orthodox</td>
                                        <td>Orthodox</td>
                                    </tr>
                                    <tr>
                                        <td>DOB</td>
                                        <td>Feb 12, 1984</td>
                                        <td>Sep 04, 1992</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                                <br />
                            <div>
                            <table className="responsive-table striped bordered table2">
                                <thead>
                                    <tr>
                                        <th>Striking</th>
                                        <th className="table2td1">Jim</th>
                                        <th className="table2td2">Jon</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td>SLpM</td>
                                        <td className="table2td1">5.23</td>
                                        <td className="table2td2">3.60</td>
                                    </tr>
                                    <tr>
                                        <td>Accuracy</td>
                                        <td className="table2td1 strikeAccuracy">42%</td>
                                        <td className="table2td2 strikeAccuracy">41%</td>
                                    </tr>
                                    <tr>
                                        <td>SApM</td>
                                        <td className="table2td1">3.43</td>
                                        <td className="table2td2">2.99</td>
                                    </tr>
                                    <tr>
                                        <td>Defense</td>
                                        <td className="table2td1 strikeDefense">65%</td>
                                        <td className="table2td2 strikeDefense">53%</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                                <br />
                            <table className="responsive-table striped bordered table3">
                                <thead>
                                    <tr>
                                        <th>Grappling</th>
                                        <th className="table3td1">Jim</th>
                                        <th className="table3td2">Jon</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td>TD Avg/15m</td>
                                        <td className="table3td1 grapplingTDAvg">0.71</td>
                                        <td className="table3td2 grapplingTDAvg">3.48</td>
                                    </tr>
                                    <tr>
                                        <td>Accuracy</td>
                                        <td className="table3td1 grapplingAccuracy">42%</td>
                                        <td className="table3td2 grapplingAccuracy">41%</td>
                                    </tr>
                                    <tr>
                                        <td>Defense</td>
                                        <td className="table3td1 grapplingDefense">81%</td>
                                        <td className="table3td2 grapplingDefense">73%</td>
                                    </tr>
                                    <tr>
                                        <td>Sub Avg.</td>
                                        <td className="table3td1 grapplingSubAvg">1.5</td>
                                        <td className="table3td2 grapplingSubAvg">1.5</td>
                                    </tr>
                                </tbody>
                            </table>
                                <br />
                            <table className="responsive-table striped bordered table4">
                                <thead>
                                    <tr>
                                        <th>fights</th>
                                        <th className="table4th1">jim</th>
                                        <th className="table4th2">Jon</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td className="table4td1">win - Dos Anjos</td>
                                        <td className="table4td2">win - Chiesa</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="table4td1">win - vannata</td>
                                        <td className="table4td2">win - Trinaldo</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="table4td1">win - Barboza</td>
                                        <td className="table4td2">win - Mustafaev</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="table4td1">win - Thomson</td>
                                        <td className="table4td2">win - Matthews</td>
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