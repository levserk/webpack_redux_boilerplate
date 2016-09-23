'use strict';

require('./index.css');

let App,
    app,
    message = `welcome! page loaded at ${new Date()}`;

function doRequire() {
    App = require('./app/app.js');
}

function init() {
    doRequire();
    window.app = app =  new App();
    document.body.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(app.render());
}

window.onload = function() {
    init();
};

//hmr
if (module.hot) {
    module.hot.accept('./app/app.js', () => {
        document.body.removeChild(app.element);
        init();
    });
}

