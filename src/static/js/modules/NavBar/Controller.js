define([
    'marionette',
    'backbone',
    'modules/NavBar/Layout/Bar',
    'modules/NavBar/View/Shopcart/Actions',
    'modules/NavBar/View/Shopcart/Collection',
    'modules/NavBar/View/Shopcart/Layout',
    'modules/Common/View/Loading',
    'modules/app'
], function(Marionette, Backbone, BarLayout,
            ShopcartActionsView, ShopcartCollectionView,
            ShopcartLayout, LoadingView, App) {

    var Controller = Marionette.Controller.extend({

        initialize: function() {

        },

        showNavBar: function() {
            this.refreshNavBar();
        },

        refreshNavBar: function() {
            var self = this;
            var view = new BarLayout({
                loggedUser: App.userSession.userData
            });
            view.on('signInSubmit', function(authData) {
                if (App.userSession) {
                    if (App.userSession.auth(authData.login, authData.password)) {
                        view.closeSignInModal(function() {
                                self.refreshNavBar();
                            });
                    }
                }
            });
            App.headerRegion.show(view);
            var $navBar = view.$('#headerNavBar');
            $navBar.scrollToFixed({
                zIndex: 500
            });

            var shopcartLayout = new ShopcartLayout();
            shopcartLayout.render();

            var shopcartCollection = new Backbone.Collection(App.shopcart.products || []);
            var shopcartItemsView = new ShopcartCollectionView({
                collection: shopcartCollection
            });
            var shopcartActionsView = new ShopcartActionsView({
                collection: shopcartCollection
            });
            view.shopcartRegion.show(shopcartLayout);
            //shopcartLayout.itemsContainerRegion.show(new LoadingView());
            shopcartLayout.itemsContainerRegion.show(shopcartItemsView);
            shopcartLayout.actionsRegion.show(shopcartActionsView);
            var addShopcartCallback = function(product) {
                shopcartCollection.add(product);
            };
            App.shopcart.off('addProduct', addShopcartCallback);
            App.shopcart.on('addProduct', addShopcartCallback);
            shopcartActionsView.on('shopcartReset', function() {
                view.closeShopcartPopover();
                shopcartCollection.reset([]);
                App.shopcart.reset();
            });
        }

    });

    return Controller;
});
