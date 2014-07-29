define([
    'marionette',
    'modules/UserProfile/View/Order/Widget'
], function(Marionette, OrderView) {

    var View = Marionette.CollectionView.extend({
        itemView: OrderView
    });

    return View;

});
