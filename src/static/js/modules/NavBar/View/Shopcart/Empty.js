define([
    'marionette',
    'hbs!templates/NavBar/shopcart/empty'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template
    });

    return View;
});