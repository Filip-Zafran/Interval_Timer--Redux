import { createStore, combineReducers } from 'redux';

// REDUCER and STORE

function trainingTimeMinutesReducer(state = 0, action) {
	switch (action.type) {
		case 'SET_TRAINING_TIME_MINUTES':
			return action.payload;
		default:
			return state;
	}
}

function trainingBreakMinutesReducer(state = 0, action) {
	switch (action.type) {
		case 'SET_BREAK_MINUTES':
			return action.payload;
		default:
			return state;
	}
}

const reducer = combineReducers({
	trainingTimeMinutes: trainingTimeMinutesReducer,
	breakTimeMinutes: trainingBreakMinutesReducer
});

export const store = createStore(reducer);
