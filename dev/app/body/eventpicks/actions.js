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