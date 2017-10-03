'use strict';

export default (state = { 
    noPick: '', 
    pick: ''}, 
    action) => {
    switch(action.type){
        case 'PICK_FIGHTER':
            state = {
                ...state,
                pick: action.payload
            };
        break;
    }
    return state;
}