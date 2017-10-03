'use strict';

export const pickFighter = (fighterName)=> {
    return({
        type: "PICK_FIGHTER",
        payload: fighterName
    });
}