define([
    'marionette',
    'modules/UserProfile/Controller',
    'modules/app'
], function(Marionette, Controller, App) {
    App.module('UserProfile', function(UserProfile) {
        var controller = new Controller();
        controller.routerInstance = new Controller.Router({
            controller: controller
        });
    });
});
