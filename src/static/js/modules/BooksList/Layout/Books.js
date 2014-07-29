define([
    'marionette',
    'hbs!templates/BooksList/content'
], function(Marionette, booksTemplate) {
    var BooksLayout = Marionette.Layout.extend({
        template: booksTemplate,
        regions: {
            centralCarouselRegion: '.central-carousel-region',
            listRegion: '.books-container-region',
            sideBlockRegion: '.filters-region',
            bookInfoRegion: '.left-block'
        }
    });

    return BooksLayout;

});