define([
    'marionette',
    'hbs!templates/UserProfile/covers/item'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template,
        templateHelpers: function(data) {
            return {
                ratingClasses: this._getRatingClasses(data)
            }
        },

        _ratingOptions: {
            ratingLimit: 5
        },

        _getRatingClasses: function(data) {
            var classes = [];
            var userRating = this.model.get('userRating');
            if (userRating) {
                var value = parseFloat(userRating);
                if (value || value > 0 || value <= this._ratingOptions.ratingLimit) {
                    var rating = Math.floor(value);
                    if (rating > 0) {
                        classes.push('star-' + rating);
                    }
                    var modPart = value - rating;
                    if (modPart > 0) {
                        if (modPart < 0.33) {
                            classes.push('star-qtr');
                        } else if (modPart > 0.66) {
                            classes.push('star-3qtr');
                        } else {
                            classes.push('star-half');
                        }
                    }
                    return classes.join(' ');
                }
            }
            return '';
        }

    });

    return View;

});
