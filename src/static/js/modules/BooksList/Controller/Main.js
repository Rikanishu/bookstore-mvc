define([
    'jquery',
    'backbone',
    'marionette',
    'modules/BooksList/Layout/Books',
    'modules/BooksList/Model/Book',
    'modules/BooksList/Model/BooksCollection',
    'modules/BooksList/View/BooksCollectionView',
    'modules/BooksList/View/Filter',
    'modules/BooksList/View/BookInfoView',
    'modules/Common/View/Loading',
    'modules/BooksList/View/MoreFromAuthorViews',
    'modules/BooksList/Controller/Carousel',
    'modules/app',
    'jquery.scrollToFixed'
], function($, Backbone, Marionette, Layout, BookModel,
            BooksCollection, BooksCollectionView, FilterView,
            BookInfoView, LoadingView, BookCoversViews,
            CarouselController,
            App) {

    var Controller = Marionette.Controller.extend({

        initialize: function () {

        },

        showBooksList: function() {
            this._showBooksList({
                showCarousel: true,
                booksLoadPromise: App.request('Books:getRecently')
            });
        },

        showFilteredList: function(requestString) {
            var filterParams = App.history.getParamsFromRequestString(requestString);
            this._showBooksList({
                showCarousel: false,
                filterCriteria: filterParams,
                booksLoadPromise: App.request('Books:getList', filterParams)
            });
        },

        openBookInfo: function(selectedBookId) {
            var self = this;
            var onFailed = function() {

            };
            var onSuccess = function(book) {
                if (book) {
                    var bookModel = new BookModel(book);
                    var bookView = new BookInfoView({
                        model: bookModel
                    });
                    bookView.on('navBack', function() {
                        history.back();
                    });
                    bookView.on('addToShopcart', self._addBookToShopcart);
                    var resetProductsCallback = function() {
                        bookModel.set('isInShopcart', false);
                    };

                    App.shopcart.off('resetProducts', resetProductsCallback);
                    App.shopcart.on('resetProducts', resetProductsCallback);

                    App.contentRegion.show(bookView);
                    bookView.moreFromAuthorRegion.show(new LoadingView({
                        message: 'Loading another books...'
                    }));
                    App.request('Books:getList', {
                        authorId: book.authorId
                    }).done(function(booksList) {
                        booksList = _.filter(booksList, function(currentBook) {
                            return currentBook.bookId != book.bookId;
                        });
                        if (booksList.length) {
                            bookView.moreFromAuthorRegion.show(new BookCoversViews.View({
                                collection: new Backbone.Collection(booksList)
                            }));
                        } else {
                            bookView.moreFromAuthorRegion.show(new BookCoversViews.EmptyView());
                        }

                    });

                } else {
                    onFailed();
                }
            };

            App.request('Books:getBook', parseInt(selectedBookId)).done(onSuccess).fail(onFailed);
        },

        showCarousel: function(booksList, layout) {
            //Request for starredBooks
            //Recently will contains starred books
            var starredBooks = _.filter(booksList, function(item) {
              return (item.starred && item.starred.inTop);
            });
            //var starredBooks = [];
            var controller = new CarouselController();
            starredBooks = _.shuffle(starredBooks);
            controller.showCarousel(new BooksCollection(starredBooks), layout.centralCarouselRegion);
        },

        _showBooksList: function(options) {
            var self = this;
            var booksLayout = new Layout();

            booksLayout.render();
            App.contentRegion.show(booksLayout);

            var onBooksLoad = function(booksList) {
                var booksCollection = new BooksCollection(booksList);
                var booksListView = new BooksCollectionView({
                    collection: booksCollection,
                    document: $(document),
                    window: $(window),
                    loadMore: function(callback, errback, view) {
                        App.request('Books:getRecently').done(function(booksList) {
                            var models = [];
                            _.each(booksList, function(data) {
                                models.push(new BookModel(data));
                            });
                            callback(models);
                        });
                    }
                });
                booksLayout.listRegion.show(booksListView);
                booksListView.on('openBookInfo', function(selectedBookId) {
                    App.history.navigate('/bookinfo/' + selectedBookId, true);
                });
                booksListView.on('addToShopcart', self._addBookToShopcart);

                var resetProductsCallback = function() {
                    booksCollection.each(function(model) {
                        model.set('isInShopcart', false);
                    });
                };

                App.shopcart.off('resetProducts', resetProductsCallback);
                App.shopcart.on('resetProducts', resetProductsCallback);

                if (options.showCarousel) {
                    self.showCarousel(booksList, booksLayout);
                }

            };

            var filterOpts = {};
            if (options.filterCriteria) {
                filterOpts.model = new Backbone.Model(options.filterCriteria);
            }
            var filterView = new FilterView(filterOpts);
            booksLayout.sideBlockRegion.show(filterView);

            filterView.on('submitFilters', function(filterData, senderView) {
                if (_.size(filterData)) {
                    App.history.navigate('filter/' + App.history.makeRequestStringFromParams(filterData), true);
                }
            });

            filterView.on('resetFilters', function() {
                App.history.navigate('', true);
            });

            filterView.on('globalSearch', function(searchString) {
                App.history.navigate('filter/globalSearch/' + searchString , true);
            });

            booksLayout.sideBlockRegion.$el.scrollToFixed({
                marginTop: 95,
                zIndex: 450,
                originalPosition: 'static',
                dontSetWidth: true
            });
            if (options.booksLoadPromise) {
                if (options.booksLoadPromise.state() !== 'resolved') {
                    booksLayout.listRegion.show(new LoadingView({
                        message: 'Loading books list...'
                    }));
                }
                options.booksLoadPromise.done(onBooksLoad);
            }
        },

        _addBookToShopcart: function(bookId, bookData) {
            App.shopcart.addProduct({
                picture: bookData.cover.preview,
                info: {
                    title: bookData.bookTitle,
                    additional: 'by ' + bookData.authorTitle
                },
                price: bookData.price,
                bookOptions: {
                    bookId: bookId
                }
            });
        }
    });

    Controller.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'bookinfo/:id': 'openBookInfo',
            'filter/*flt': 'showFilteredList',
            '': 'showBooksList'
        }
    });

    return Controller;
});
