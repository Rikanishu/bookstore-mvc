define([
    'marionette',
    'hbs!templates/BooksList/carousel'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template,

        templateHelpers: function() {
            var data = {};
            if (this.collection.length > 0) {
                data['activeSlide'] = Math.round(Math.random() * 10) % this.collection.length;
            }
            return data;
        },

        onRender: function() {
            var $carouselElement = this.$el.find('.carousel');
            if ($carouselElement.length) {
                $carouselElement.carousel({
                    interval: 4000
                });

                $carouselElement.carousel('cycle');
            }
        }
    });

    return View;
});
