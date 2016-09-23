'use strict';

require('./state_view.css');

let View = require('../lib/view');

module.exports = class StateView extends View {
    constructor(store) {
        super(store);

        this.store = store;

        this.unsubscribe = this.store.subscribe(() => {
            this.render();
        })
    }

    createElement() {
        this.element = document.createElement(`div`);
        this.element.setAttribute(`id`, `stateView`);
        this.textArea = document.createElement(`textarea`);
    }

    //render element content
    render() {
        this.removeAllChildes();
        this.element.appendChild(this.textArea);
        this.textArea.innerHTML = `${JSON.stringify(this.store.getState(), null, 3)}`;
        return this.element;
    }
};