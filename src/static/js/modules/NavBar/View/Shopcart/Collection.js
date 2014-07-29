define([
    'marionette',
    'modules/NavBar/View/Shopcart/Item',
    'modules/NavBar/View/Shopcart/Empty',
    'hbs!templates/NavBar/shopcart/collection'
], function(Marionette, ItemView, EmptyView, template) {

    var View = Marionette.CompositeView.extend({
        template: template,
        itemView: ItemView,
        itemViewContainer: '.active-items',
        emptyView: EmptyView,

        activeViewsCount: 5,

        initialize: function() {
            this.listenTo(this.collection, "add remove", this.checkActiveShopcartItems, this);
            this.listenTo(this.collection, "reset", this.checkActiveResetShopcart, this);
        },

        checkActiveShopcartItems: function() {
            //Todo: move to this.options
            var activeViewsCount = Marionette.getOption(this, 'activeViewsCount') - 1;

            var viewCount = this.children.length;
            this.children.each(function(view, index) {
                /*if (index < (viewCount - activeViewsCount)) {
                    view.$el.hide();
                } else {
                    view.$el.show();
                }*/
                if (index < (viewCount - activeViewsCount)) {
                    view.close();
                }
            });
            var $showMore = this.$('.show-more');
            if (viewCount > activeViewsCount) {
                $showMore.show();
            } else {
                $showMore.hide();
            }
        },

        checkActiveResetShopcart: function() {
            var $showMore = this.$('.show-more');
            $showMore.hide();
        },

        onShow: function() {
            this.checkActiveShopcartItems();
        },

        appendHtml: function(collectionView, itemView, index){
            if (collectionView.isBuffering) {
                // buffering happens on reset events and initial renders
                // in order to reduce the number of inserts into the
                // document, which are expensive.
                collectionView.elBuffer.appendChild(itemView.el);
            }
            else {
                // If we've already rendered the main collection, just
                // append the new items directly into the element.
                collectionView.$el.prepend(itemView.$el);
            }
        }
    });

    return View;
});