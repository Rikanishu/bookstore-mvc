define([
    'marionette',
    'backbone',
    'modules/UserProfile/View/Order/Item',
    'hbs!templates/UserProfile/order/widget'
], function(Marionette, Backbone, OrderItem, template) {

    var View = Marionette.CompositeView.extend({
        itemView: OrderItem,
        itemViewContainer: '.order-items .items',
        template: template,
        events: {
            'click .back': 'onBackClick',
            'click .forward': 'onForwardClick'
        },
        ui: {
            backButton: '.back',
            forwardButton: '.forward',
            itemsContainer: '.items'
        },
        options: {
            itemsCount: 5
        },
        templateHelpers: function() {
            return {
                order: this.orderData
            }
        },


        _currentActiveIndex: 0,

        initialize: function() {
            this.collection = new Backbone.Collection(this.model.get('items'));
            this.orderData = {
                id: this.model.get('orderId'),
                price: this.model.get('price'),
                title: this._getOrderTitle(),
                status: this._getOrderStatus()
            };
        },

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
        },

        _getOrderTitle: function() {
            return "Order #" + this.model.get('orderId');
        },

        _getOrderStatus: function() {
            var orderStatus = this.model.get('status');
            switch (orderStatus) {
                case "new":
                    return "New";
                case "inprogress":
                    return "In progress";
                case "payed":
                    return "Payed";
                case "confirmed":
                    return "Confirmed";
                default:
                    return "Unknown";
            }
        }
    });

    return View;

});
