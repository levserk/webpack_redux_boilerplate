'use strict';

require('./buttons.css');
let View = require('../lib/view'),
    actions = require('../actions.js').actions;

module.exports = class Buttons extends View{
    constructor(store) {
        super();

        this.store = store;
    }

    createElement() {
        this.element = document.createElement(`div`);
        this.element.setAttribute(`id`, `buttons`);
        this.element.appendChild(this.createButton(1));
        this.element.appendChild(this.createButton(2));
        this.element.appendChild(this.createButton(3));
        this.element.appendChild(this.createButton(4));
    }

    createButton(number){
        let button = document.createElement(`button`);
        button.setAttribute(`id`, `button_${number}`);
        button.innerHTML = `button #${number}`;

        // describe onclick
        button.onclick = (e) => {
            let target = event.target || event.srcElement;
            this.store.dispatch(actions.setButton(target.id));
        };
        return button;
    }

    //render element content
    render() {
        return this.element;
    }
};