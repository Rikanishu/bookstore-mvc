define([
    'backbone',
    'modules/BooksList/Model/Book'
], function(Backbone, BookModel) {

    var BooksCollection = Backbone.Collection.extend({
        model: BookModel,

        filterBooks: function(originalData, filterCriteria) {
            /*var filteredData = _.filter(originalData, function(book) {
                if (filterCriteria.author && book.authorId != filterCriteria.author) {
                    return false;
                }
                return true;
            });*/

            /*var whereCriteria = {};
            if (filterCriteria.author) {
                whereCriteria.authorTitle = filterCriteria.author;
            }
            if (filterCriteria.bookTitle) {
                whereCriteria.bookTitle = filterCriteria.bookTitle;
            }
            if (filterCriteria.publishYear) {
                whereCriteria.publishYear = filterCriteria.publishYear;
            }
            var filteredData = originalData;
            if (_.size(whereCriteria)) {
                filteredData = _.where(filteredData, whereCriteria);
            }*/

            this.reset(filteredData);
        }
    });
    return BooksCollection;

});