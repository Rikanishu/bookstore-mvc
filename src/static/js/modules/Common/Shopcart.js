define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    var Shopcart = function() {
        this.products = [];
    };

    Shopcart.prototype = {
        addProduct: function(product) {
            this.products.push(product);
            this.trigger('addProduct', product, this);
        },
        removeProduct: function(productId) {
            if (productId < this.products.length) {
                var prod = this.products[productId];
                delete this.products[productId];
                this.trigger('removeProduct', prod, productId, this);
            }
        },
        reset: function() {
            this.trigger('resetProducts', this.products);
            this.products = [];
        }
    };

    _.extend(Shopcart.prototype, Backbone.Events);

    return Shopcart;
});