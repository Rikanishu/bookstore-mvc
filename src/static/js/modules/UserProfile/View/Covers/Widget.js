define([
    'marionette',
    'backbone',
    'modules/UserProfile/View/Covers/Item',
    'hbs!templates/UserProfile/covers/widget'
], function(Marionette, Backbone, CoverItem, template) {

    var View = Marionette.CompositeView.extend({
        itemView: CoverItem,
        itemViewContainer: '.order-items .items',
        template: template,
        options: {
            itemsCount: 6
        },
        events: {
            'click .back': 'onBackClick',
            'click .forward': 'onForwardClick'
        },
        ui: {
            backButton: '.back',
            forwardButton: '.forward',
            itemsContainer: '.items'
        },

        _currentActiveIndex: 0,

        onBackClick: function() {
            if (this._currentActiveIndex > 0) {
                --this._currentActiveIndex;
                this.showActiveItems();
            }
        },

        onForwardClick: function() {
            if (this._currentActiveIndex < this.children.length - 1) {
                ++this._currentActiveIndex;
                this.showActiveItems();
            }
        },

        showActiveItems: function() {
            var numberOfItems = this.options.itemsCount;
            var startIndex = this._currentActiveIndex;
            var endIndex = startIndex + numberOfItems;
            this.children.each(function(view, index) {
                if (index >= startIndex && index < endIndex) {
                    view.$el.show();
                } else {
                    view.$el.hide();
                }
            })
        },

        onShow: function() {
            this.showActiveItems();
            this.checkSinglePage();
        },

        checkSinglePage: function() {
            //todo: dynamic update when collection (children views) length is updated
            if (this.collection.length <= this.options.itemsCount) {
                this.ui.backButton.hide();
                this.ui.forwardButton.hide();
                this.ui.itemsContainer.addClass('single-page');
            } else {
                this.ui.backButton.show();
                this.ui.forwardButton.show();
                this.ui.itemsContainer.removeClass('single-page');
            }
        }
    });

    return View;

});
