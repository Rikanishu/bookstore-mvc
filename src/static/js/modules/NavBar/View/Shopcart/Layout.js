define([
    'marionette',
    'hbs!templates/NavBar/shopcart/layout'
], function(Marionette, template) {

    var View = Marionette.Layout.extend({
        template: template,
        regions: {
            itemsContainerRegion: '.shopcart-items-container',
            actionsRegion: '.actions'
        }
    });

    return View;
});