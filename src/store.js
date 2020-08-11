import { createStore, combineReducers } from 'redux';

function trainingTimeMinutesReducer(state = 0, action) { 
    switch (action.type) { 
        case 'SET_TRAINING_TIME_MINUTES':
            return action.payload;
        default:
            return state;
    }
}

const reducer = combineReducers({
  trainingTimeMinutes: trainingTimeMinutesReducer
});

export const store = createStore(reducer);