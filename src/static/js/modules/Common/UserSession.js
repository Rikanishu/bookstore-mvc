define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    var UserSession = function() {
        this.userData = null;
    };

    UserSession.prototype = {
        auth: function(login, password) {
            this.userData = {
                login: login,
                username: login
            };
            this.trigger('successAuth', this.userData, this);
            return true;
        },
        quit: function() {
            var oldUser = this.userData;
            this.userData = null;
            this.trigger('successQuit', oldUser, this);
        }
    };

    _.extend(UserSession.prototype, Backbone.Events);

    return UserSession;
});