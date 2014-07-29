define([
    'marionette',
    'modules/NavBar/Controller',
    'modules/app'
], function(Marionette, Controller, App) {
    App.module('NavBar', function(NavBar) {
        NavBar.addInitializer(function(options) {
            var controller = new Controller();
            controller.showNavBar();
        })
    });
});
