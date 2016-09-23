'use strict';

let initialState = require('./initial_state');
let actionsTypes = require('./actions').actionsTypes;

module.exports = function app(state, action) {
    state = state || initialState;
    switch (action.type) {
        case actionsTypes.SET_BUTTON:
            // return new state with updated current and previous buttons
            return {
                currentButton: {
                    buttonId: action.buttonId,
                    time: action.time
                },
                previousButton: state.currentButton ? Object.assign({}, state.currentButton) : null
            };

            break;
        default:
            return state;
    }
};
