define([
    'marionette',
    'hbs!templates/BooksList/book',
    'modules/vent'
], function(Marionette, template, vent) {

    var BooksItemView = Marionette.ItemView.extend({
        template: template,

        events: {
            'click .action-add-to-shopcart': 'onAddToShopcart',
            'click .action-open-book-info': 'onOpenBookInfo',
            'click .action-add-to-wish-list': 'onAddToWishList'
        },

        modelEvents: {
            'change': 'onChangeModel'
        },

        onChangeModel: function() {
            this.render();
        },

        onOpenBookInfo: function(e) {
            e.preventDefault();
            var bookId = this.model.get('bookId');
            this.trigger('openBookInfo', this.model.get('bookId'));
        },

        onAddToWishList: function(e) {
            e.preventDefault();
            //this.model.set('bookTitle', 'Added to wish-list');
            //this.trigger('addToWishList', this.model.get('bookId'));
        },

        onAddToShopcart: function(e) {
            e.preventDefault();
            this.trigger('addToShopcart', this.model.get('bookId'), this.model.toJSON());
            this.model.set('isInShopcart', true);
        }

    });

    return BooksItemView;

});