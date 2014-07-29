define([
    'marionette',
    'backbone',
    'jquery',
    'modules/UserProfile/Layout/Profile',
    'modules/UserProfile/Layout/MainBlock',
    'modules/UserProfile/View/SideBlock',
    'modules/UserProfile/View/OrdersList',
    'modules/UserProfile/View/Covers/Widget',
    'modules/Common/View/Loading',
    'modules/Common/MultiPromises',
    'modules/app'
], function(Marionette, Backbone, $,
            MainLayout, MainBlockLayout, SideBlockView, OrdersListView, CoversListView, LoadingView,
            MultiPromises, App) {

    var Controller = Marionette.Controller.extend({

        openUserProfile: function(userId) {

        },

        openOwnProfile: function() {
            //App.userSession.userData
            this._showProfile({
                username: 'Default User'
            });
        },

        _showProfile: function(userData) {
            var layout = new MainLayout();
            layout.render();
            App.contentRegion.show(layout);
            this._showSideBlock(layout, userData);
            this._showSummary(layout, userData);
        },

        _showSummary: function(layout, userData) {
            layout.profileMainRegion.show(new LoadingView({
                message: 'Loading profile details...'
            }));

            var multPromise = new MultiPromises({
                userOrders: {
                    promise: App.request('Orders:getUserOrders', userData.userId),
                    done: function(orders) {
                       return new OrdersListView({
                            collection: new Backbone.Collection(orders)
                        });
                    }
                },
                wishList: {
                    promise: App.request('Books:getWishList', userData.userId),
                    done: function(books) {
                        return new CoversListView({
                            collection: new Backbone.Collection(books)
                        });
                    }
                }
            });

            multPromise.onFinished(function(result) {
                var blockLayout = new MainBlockLayout();
                blockLayout.render();
                layout.profileMainRegion.show(blockLayout);
                if (result.userOrders) {
                    blockLayout.ordersRegion.show(result.userOrders);
                }
                if (result.wishList) {
                    blockLayout.wishListRegion.show(result.wishList);
                }
            });
        },

        _showSideBlock: function(layout, userData) {
            layout.leftSideRegion.show(new SideBlockView({
                model: new Backbone.Model(userData)
            }));
        }

    });

    Controller.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'profile/:id': 'openUserProfile',
            'profile': 'openOwnProfile'
        }
    });

    return Controller;

});
