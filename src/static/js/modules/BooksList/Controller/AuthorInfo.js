define([
    'marionette',
    'backbone',
    'modules/BooksList/View/AuthorInfoView',
    'modules/BooksList/View/MoreFromAuthorViews',
    'modules/Common/View/Loading',
    'modules/app'
], function(Marionette, Backbone, AuthorInfoView, MoreFromAuthorViews, LoadingView, App) {

    var Controller = Marionette.Controller.extend({

        showAuthorInfo: function(authorId) {
            App.contentRegion.show(new LoadingView({
                message: 'Loading author info...'
            }));
            App.request('Authors:getInfo', parseInt(authorId)).done(function(authorInfo) {
                if (authorInfo) {
                    var authorInfoView = new AuthorInfoView({
                        model: new Backbone.Model(authorInfo)
                    });
                    App.contentRegion.show(authorInfoView);
                    App.request('Books:getList', {
                        authorId: authorId
                    }).done(function(booksList) {
                        authorInfoView.authorBooksRegion.show(new MoreFromAuthorViews.View({
                            collection: new Backbone.Collection(booksList)
                        }));
                    });
                } else {
                    App.contentRegion.close();
                }
            });
        }

    });

    Controller.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'author/:id': 'showAuthorInfo'
        }
    });

    return Controller;

});
