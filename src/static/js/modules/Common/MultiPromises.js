define([
    'jquery',
    'underscore'
], function($, _) {

    var MultiPromises = function(promises) {

        var self = this;

        this.promises = promises || {};
        this.result = {};

        _.each(promises, function(options, promName) {
            if (!options.promise) {
                throw new Error('Promise is required parameter');
            }
            var context = options.context || this;
            var prom = options.promise;
            if (options.done) {
                prom.done(function() {
                    self.result[promName] = options.done.apply(context, arguments);
                });
            }
            if (options.fail) {
                prom.fail(function() {
                    self.result[promName] = options.fail.apply(context, arguments);
                });
            }
            if (options.always) {
                prom.always(function() {
                    self.result[promName] = options.always.apply(context, arguments);
                });
            }
        });
    };

    MultiPromises.prototype = {
        onFinished: function(callback) {
            var self = this;
            $.when.apply($, _.pluck(this.promises, 'promise')).always(function() {
                callback.apply(self, [self.result, self.promises]);
            });
        }
    };

    return MultiPromises;

});
