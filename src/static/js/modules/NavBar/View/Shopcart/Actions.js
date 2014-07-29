define([
    'marionette',
    'hbs!templates/NavBar/shopcart/actions'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template,
        events: {
            'click #shopcartCheckoutAction': 'onCheckout',
            'click #shopcartClearAction': 'onClear'
        },
        collectionEvents: {
            'reset add remove': 'render'
        },
        onCheckout: function(e) {
            e.preventDefault();
        },
        onClear: function(e) {
            e.preventDefault();
            this.trigger('shopcartReset');
        }
    });

    return View;
});