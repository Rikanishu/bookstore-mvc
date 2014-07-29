// @todo:
// use deps and callback options instead?
// add shim from example require.js/marionette application

require.config({
    baseUrl: 'static/js/',
    paths: {
        jquery: 'vendors/jquery-1.10.2/jquery',
        underscore: 'vendors/underscore/underscore',
        backbone: 'vendors/backbone/backbone',
        marionette: 'vendors/backbone.marionette/marionette',
        bootstrap: 'vendors/bootstrap/bootstrap',
        text: 'vendors/requirejs.text/require.text',
        tpl: 'vendors/requirejs.tpl/tpl',
        templates: 'templates/hb',
        hbs: 'vendors/require-handlebars-plugin/hbs',
        spin: 'vendors/spin/spin',
        'jquery.scrollToFixed': 'vendors/jquery.scrollToFixed/jquery-scrolltofixed'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: ['jquery'],
        'jquery.scrollToFixed': ['jquery'],
        backbone: {
            deps: ['underscore' , 'jquery'],
            exports: 'Backbone'
        },
        marionette : {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        }
    },
    urlArgs: "v=1"
});

require([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'hbs',
    'bootstrap',
    'spin',
    'jquery.scrollToFixed'
], function() {
    require([
        'modules/app',
        'modules/BooksList/Module',
        'modules/NavBar/Module',
        'modules/UserProfile/Module',
        'modules/Orders/Module'
    ], function(App) {
        App.start();
    });
});