'use strict';

require('./app.css');

let View = require('./lib/view'),
    StateView, Buttons,
    Redux = require('redux'),
    reducer = require('./reducers.js');

module.exports = class App extends View{
    constructor() {
        super();

        //create redux store
        this.store = Redux.createStore(Redux.combineReducers({
            app: reducer
        }), {});

        this.createStateView();
        this.createButtons();

        //hmr
        if (module.hot) {
            module.hot.accept('./state_view/state_view', () => {
                this.createStateView();
                this.render();
            });
            module.hot.accept('./buttons/buttons', () => {
                this.createButtons();
                this.render();
            });
        }
    }

    createElement() {
        this.element = document.createElement(`div`);
        this.element.setAttribute(`id`, `app`);
        return this.element;
    }

    createStateView() {
        StateView = require('./state_view/state_view');
        this.stateView = new StateView(this.store);
    }

    createButtons() {
        Buttons = require('./buttons/buttons');
        this.buttons = new Buttons(this.store);
    }

    render() {
        this.removeAllChildes();
        this.element.appendChild(this.stateView.render());
        this.element.appendChild(this.buttons.render());
        return this.element;
    }
};