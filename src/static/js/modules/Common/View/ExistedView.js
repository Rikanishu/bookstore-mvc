define([
    'marionette'
], function(Marionette) {

    /**
     * Usage: var Example = ExistedView.extend({
     *     'el': '#existedElement'
     * })
     * @type {ExistedView}
     */
    var ExistedView = Marionette.ItemView.extend({

        render: function() {
            this.isClosed = false;

            this.triggerMethod("before:render", this);
            this.triggerMethod("item:before:render", this);

            this.bindUIElements();

            this.triggerMethod("render", this);
            this.triggerMethod("item:rendered", this);

            return this;
        }

    });

    return ExistedView;

});