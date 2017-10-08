'use strict';

export const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);

    /* // returns each related figher, event_id, event_name;
    var eventObject3 = event.target.querySelectorAll('[data-eventpicks-fighter]');
    for (var i = 0; i < eventObject3.length; i++){
        console.log(eventObject3[i].getAttribute('data-eventpicks-fighter'));
        console.log(eventObject3[i].getAttribute('data-eventpicks-event_id'));
        console.log(eventObject3[i].getAttribute('data-eventpicks-event_name'));
    }
    */

    /* // this gets the event name, match up, and fightername of the pick.
    var eventObject2 = event.target.querySelectorAll('[data-eventpicks-fighter]');
    console.log(eventObject2[0].getAttribute('data-eventpicks-fighter'));
    console.log(eventObject2[0].getAttribute('data-eventpicks-event_id'));
    console.log(eventObject2[0].getAttribute('data-eventpicks-event_name'));
    */


    /* // this selects just the name of the fighter
    var eventObject = event.target.querySelectorAll('[data-eventpicks-fighter]');
    console.log(eventObject[0].getAttribute('data-eventpicks-fighter'));
    */

    var eventObject = event.target.querySelectorAll('[data-eventpicks-fighter]');
    var picks = [];
    var pick = {};
    var allPicks = {};
    // grab each attribute for each li and put into array
    for (var i = 0; i < eventObject.length; i++){
        var fighter = eventObject[i].getAttribute('data-eventpicks-fighter');
        picks.push(fighter);
        var eventId = eventObject[i].getAttribute('data-eventpicks-event_id');
        picks.push(eventId);
        var eventName = eventObject[i].getAttribute('data-eventpicks-event_name');
        picks.push(eventName);
        
        // split array into groups of 3
        var a, j, temparray, chunk = 3;
        for (a=0, j=picks.length; a < j; a+=chunk){
            temparray = picks.slice(a, a+chunk);
        }
        // put array in an object
        for (var x = 0; x < temparray.length; x++){
            pick[x] = temparray[x];
        }
        // this console logs the propery array of objects.
        console.log(pick);
    }

    
    return({
        type: 'SUBMIT_PICKS',
        payload: {
            // !! this is only logging the first object !!
            pick: pick
        }
    })
    
};