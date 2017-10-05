'use strict';

export const pickFighter = (event)=> {
    console.log(event.target);
    return({
        type:'PICK_FIGHTER',
        payload: {
            fighter: event.target.value,
            event_name: event.target.getAttribute('data-event-name'),
            event_id: event.target.getAttribute('data-event-id')
        }
    });
};