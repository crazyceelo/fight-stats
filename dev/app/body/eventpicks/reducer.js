'use strict';

export default (state = {
    picks: []
}, action) => {
    switch(action.type){
        case 'SUBMIT_PICKS': 
        state={
                ...state,
                picks: action.payload
            }
        break;
    }
    return state;
};