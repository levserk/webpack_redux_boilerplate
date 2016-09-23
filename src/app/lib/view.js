'use strict';

module.exports = class View {
    constructor() {
        this.createElement();
    }

    createElement() {
        this.element = null;
    }

    removeAllChildes() {
        if (this.element) {
            this.element.innerHTML = '';
        }

    }

    render() {
        this.removeAllChildes();
    }
};
