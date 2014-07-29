define([
    'marionette',
    'backbone',
    'underscore'
], function(Marionette, Backbone, _) {

    var Navigation = function() {

    };

    Navigation.prototype = {

        navigate: function(route, options) {
            options || (options = {});
            Backbone.history.navigate(route, options)
        },

        getCurrentRoute: function() {
            return Backbone.history.fragment;
        },

        back: function() {
            history.back()
        },

        forward: function() {
            history.forward()
        },

        getParamsFromRequestString: function(requestString, onlySplit) {
            var requestSplit = requestString.split('/');
            if (onlySplit) {
                return requestSplit;
            }
            var requestParams = {};
            for (var i = 0, count = requestSplit.length; i < count; i+=2) {
                requestParams[requestSplit[i]] = (i + 1 < count)  ? requestSplit[i+1] : undefined;
            }
            return requestParams;
        },

        makeRequestStringFromParams: function(params) {
            var result = [];
            _.each(params, function(value, key) {
                result.push(key);
                result.push(value);
            });
            return result.join('/')
        }

    };

    _.extend(Navigation.prototype, Backbone.Events);

    return Navigation;
});
