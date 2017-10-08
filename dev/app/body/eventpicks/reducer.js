'use strict';

export default (state = {
    pick: []
}, action) => {
    switch(action.type){
        case 'SUBMIT_PICKS':
            state={
                ...state,
                pick: action.payload
            }
        break;
    }
    return state;
};