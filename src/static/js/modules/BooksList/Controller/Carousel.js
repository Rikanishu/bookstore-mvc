define([
    'marionette',
    'modules/BooksList/View/Carousel',
    'modules/app',
    'bootstrap'
], function(Marionette, View) {

    var Controller = Marionette.Controller.extend({

        showCarousel: function(booksCollection, region) {
            if (booksCollection.length) {
                var view = new View({
                    collection: booksCollection
                });
                region.show(view);
            }
        }

    });

    return Controller;
});
