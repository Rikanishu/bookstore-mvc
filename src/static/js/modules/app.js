define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'modules/Common/UserSession',
    'modules/Common/Shopcart',
    'modules/Common/History'
], function ($, _, Backbone, Marionette, UserSession, Shopcart, History) {
    var BookStoreApp = new Marionette.Application();
    BookStoreApp.addRegions({
        headerRegion: '#header',
        footerRegion: '#footer',
        contentRegion: '#content'
    });
    BookStoreApp.on('initialize:before', function(options) {
        this.userSession = new UserSession();
        this.shopcart = new Shopcart();
        this.history = new History();
    });
    BookStoreApp.on('initialize:after', function(options) {
        if (Backbone.history) {
            Backbone.history.start(/*{pushState: true, root: "/bookstore/"}*/);
        }
    });
    return BookStoreApp;
});