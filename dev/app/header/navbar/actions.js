'use strict';

export const changeUsername = (newName)=>{
    return({
        type:"UPDATE_USERNAME",
        payload: newName
    });
};

export const updateForm = (event) =>{
    return({
        type:"UPDATE_FORM",
        payload: event.target.value
    });
}