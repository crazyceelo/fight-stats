'use strict';

export default (state = { 
    fighterData: [],
    picks:[],
    events:[]
}, action) => {
    switch(action.type){
        case 'PICK_FIGHTER':

            if(state.events.indexOf(action.payload.event_id) > -1){

                let dataIndex = state.events.indexOf(action.payload.event_id);

                let fightDataUpdate = state.fighterData;
                fightDataUpdate[dataIndex] = action.payload;

                let picksUpdate = state.picks;
                picksUpdate[dataIndex] = action.payload.fighter;

                state={
                    ...state,
                    fighterData: fightDataUpdate,
                    picks:picksUpdate                
                };

            } else {
                let selectedFighterData = state.fighterData;
                selectedFighterData.push(action.payload);
    
                let selectedPicks = state.picks;
                selectedPicks.push(action.payload.fighter);
    
                let selectedEvents = state.events;
                selectedEvents.push(action.payload.event_id);

                state = {
                    ...state,
                    fighterData: selectedFighterData,
                    picks: selectedPicks,
                    events: selectedEvents
                };
                
                
            }
            

        break;
    }
    return state;
}