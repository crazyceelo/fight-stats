'use strict';

export const handleSubmit = (event) => {
    // prevents default button behavior
    event.preventDefault();

    // grab all attributes from each li
    var eventObject = event.target.querySelectorAll('[data-eventpicks-fighter]');
    var picks = [];

    // grab each attribute for each li and put into a variable
    for (var i = 0; i < eventObject.length; i++){
        var fighter = eventObject[i].getAttribute('data-eventpicks-fighter');
        var eventId = eventObject[i].getAttribute('data-eventpicks-event_id');
        var eventName = eventObject[i].getAttribute('data-eventpicks-event_name');

        // push each attribute into an object
        var fighters = [
            {
                fighter: fighter,
                eventId: eventId,
                eventName: eventName
            }
        ];
        
        // push objects into an array of picks
        picks.push(fighters);
    }

    
    return({
        type: 'SUBMIT_PICKS',
        payload: {
            // picks.fighters
            fighters: picks
        }
    })
};