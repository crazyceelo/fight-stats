'use strict';

export default (state = {
    event_id: '',
    event_name: '',
    fighter: ''
}, action) => {
    switch(action.type){
        case 'SUBMIT_PICKS':
            state={
                ...state,
                event_id: selectedEventId,
                event_name: selectedEventName,
                fighter: selectedFighter
            }
        break;
    }
    return state;
};