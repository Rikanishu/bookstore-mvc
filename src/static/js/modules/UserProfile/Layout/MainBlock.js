define([
    'marionette',
    'hbs!templates/UserProfile/main_block'
], function(Marionette, template) {

    var Layout = Marionette.Layout.extend({
        template: template,

        regions: {
            ordersRegion: '.orders-region',
            wishListRegion: '.wishlist-region'
        }

    });

    return Layout;

});
