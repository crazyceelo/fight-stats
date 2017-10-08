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
    for (var i = 0; i < eventObject.length; i++){
        var fighter = eventObject[i].getAttribute('data-eventpicks-fighter');
        picks.push(fighter);
        var eventId = eventObject[i].getAttribute('data-eventpicks-event_id');
        picks.push(eventId);
        var eventName = eventObject[i].getAttribute('data-eventpicks-event_name');
        picks.push(eventName);
        
        var a, j, temparray, chunk = 3;
        for (a=0, j=picks.length; a < j; a+=chunk){
            temparray = picks.slice(a, a+chunk);
        }
        // console.log(temparray);
        for (var x = 0; x < temparray.length; x++){
            pick[x] = temparray[x];
        }
        console.log(pick);
    }

    /* // need to replace with array instead of index 0
    return({
        type: 'SUBMIT_PICKS',
        payload: {
            fighter: eventObject[0].getAttribute('data-eventpicks-fighter'),
            event_name: eventObject[0].getAttribute('data-eventpicks-event_id'),
            event_id: eventObject[0].getAttribute('data-eventpicks-event_name')
        }
    })
    */
};