'use strict';

export default (state={
    username: 'Not Logged In',
    newUsername : ''
},action)=>{
    switch(action.type){
        case 'UPDATE_USERNAME':
            state = {
                ...state,
                username: action.payload
            };
        break;
        case 'UPDATE_FORM':
            state={
                ...state,
                newUsername: action.payload
            }
        break;
    }
    return state;
};