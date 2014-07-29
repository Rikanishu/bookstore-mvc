define([
    'marionette',
    'hbs!templates/UserProfile/order/item'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template
    });

    return View;

});
