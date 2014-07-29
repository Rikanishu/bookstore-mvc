define([
    'marionette',
    'modules/BooksList/Controller/Main',
    'modules/BooksList/Controller/AuthorInfo',
    'modules/app',
    'modules/BooksList/Service/Books',
    'modules/BooksList/Service/Authors'
], function(Marionette, MainController, AuthorInfoController, App) {

    var moduleControllers = [
        MainController,
        AuthorInfoController
    ];

    App.module('BooksList', function(BooksList) {
        _.each(moduleControllers, function(Controller) {
            var controller = new Controller();
            if (Controller.Router) {
                controller.routerInstance = new Controller.Router({
                    controller: controller
                });
            }
        });
    });
});
