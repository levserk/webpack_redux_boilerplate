'use strict';

const SET_BUTTON = `SET_BUTTON`;


module.exports =  {
    actionsTypes: {
        SET_BUTTON: SET_BUTTON
    },

    actions: {
        setButton(buttonId) {
            return {
                type: SET_BUTTON,
                buttonId: buttonId,
                time: Date.now()
            }
        }
    }
};