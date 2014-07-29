define([
    'marionette',
    'modules/UserProfile/View/Covers/Widget',
    'hbs!templates/BooksList/more_from_author/empty'
], function(Marionette, BookCoversWidget, emptyViewTemplate) {

    var EmptyView = Marionette.ItemView.extend({
       template: emptyViewTemplate
    });

    return {
        View: BookCoversWidget,
        EmptyView: EmptyView
    };

});
