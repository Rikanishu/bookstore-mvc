define([
    'marionette',
    'hbs!templates/NavBar/shopcart/item'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template
    });

    return View;
});