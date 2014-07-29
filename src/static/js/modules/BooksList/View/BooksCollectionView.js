define([
    'marionette',
    'modules/BooksList/View/BookItemView',
    'modules/Common/View/Loading',
    'hbs!templates/BooksList/books'
], function(Marionette, BookItemView, LoaderView, template) {

    var BooksListView = Marionette.CompositeView.extend({
        itemView: BookItemView,
        itemViewContainer: '.books-list',
        template: template,

        /* load items options */
        _isAlreadyLoadingItems: false,
        _isFinishReached: false,

        /**
         * magic :) see triggerMethod Marionette's realization
         */
        onItemviewOpenBookInfo: function(childView, selectedBookId) {
            this.trigger('openBookInfo', selectedBookId, childView);
        },

        onItemviewAddToWishList: function(childView) {
            this.trigger('addToWishList', childView);
        },

        onItemviewAddToShopcart: function(childView, bookId, bookData) {
            this.trigger('addToShopcart', bookId, bookData);
        },

        onShow: function() {
            var self = this;
            var offsetForLoadingModels = 600;
            if (this.options.window) {
                var $window = $(this.options.window);
                var $loaderContainer = this.$('.loader');
                var loaderView = new LoaderView({
                    message: 'Check more books...'
                });
                loaderView.render();
                $loaderContainer.append(loaderView.$el);
                $loaderContainer.hide();
                var checkScroll = function() {
                    if (!self._isAlreadyLoadingItems && !this._isFinishReached) {
                        var viewBottom = self.$el.height() + self.$el.offset().top - offsetForLoadingModels;
                        var windowScroll = $window.scrollTop() + $window.height();
                        if (windowScroll > viewBottom) {
                            if (_.isFunction(self.options.loadMore)) {
                                $loaderContainer.show();
                                self._isAlreadyLoadingItems = true;
                                self.options.loadMore(function(result) {
                                    $loaderContainer.hide();
                                    self._isAlreadyLoadingItems = false;
                                    if (!result || !_.size(result)) {
                                        self.onFinishReached();
                                    } else {
                                        //todo: add collection by packet
                                        _.each(result, function(model) {
                                            self.collection.add(model);
                                        });
                                    }

                                }, function() {
                                   $loaderContainer.hide();
                                    self.onFinishReached();
                                    self._isAlreadyLoadingItems = false;
                                    self._isFinishReached = true;
                                }, this);

                            }
                        }
                    }
                };

                $window.on('scroll.load-' + this.cid, checkScroll);
                if (this.options.document) {
                    var $document = $(this.options.document);
                    if ($window.height() < $document.height()) {
                        checkScroll();
                    }
                }
            }
        },

        onClose: function() {
            if (this.options.document) {
                $(this.options.document).off('scroll.load-' + this.cid);
            }
        },

        onFinishReached: function() {

        },

        addLoadingSpinner: function() {
            
        },

        removeLoadingSpinner: function() {

        }
    });

    return BooksListView;

});