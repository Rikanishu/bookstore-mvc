define([
    'marionette',
    'hbs!templates/NavBar/navbar',
    'modules/vent',
    'bootstrap'
], function(Marionette, template, vent) {


    var NavbarLayout  = Marionette.Layout.extend({
        template: template,
        events: {
            'click #signInSubmit': 'onSignInSubmit',
            'click #signUpSubmit': 'onSignUpSubmit'
        },
        ui: {
            'signInLogin': '#signInForm_Login',
            'signInPassword': '#signInForm_Password',

            'signUpUsername': '#signUpForm_Username',
            'signUpPassword': '#signUpForm_Password',
            'signUpEmail': '#signUpForm_Email'
        },
        regions: {
            shopcartRegion: '.shopcart-region'
        },

        onRender: function() {
            this.initShopcart();
        },

        initShopcart: function() {
            var self = this;
            //fixme: re-render issue
            var $shopcartToggleLink = this.$('.shopcart-toggle');
            $shopcartToggleLink.click(function(e) {
                e.preventDefault()
            });
            $shopcartToggleLink.popover({
                animation: false,
                placement: 'bottom',
                html: true,
                title: 'My Shopcart',
                content: function() {
                    return self.shopcartRegion.$el.find('.shopcart');
                },
                container: this.$('#headerNavBar')
            });
            $shopcartToggleLink.on('hide.bs.popover', function() {
                var $shopcartContainer = self.shopcartRegion.$el;
                var $shopcartBody = self.$('.shopcart');
                $shopcartContainer.append($shopcartBody);
            });
        },

        closeShopcartPopover: function() {
            this.$('.shopcart-toggle').popover('hide');
        },

        onSignInSubmit: function(e) {
            e.preventDefault();
            var login = this.ui.signInLogin.val();
            var password = this.ui.signInPassword.val();
            //todo: validate
            if (login && password) {
                this.trigger('signInSubmit', {
                    login: login,
                    password: password
                });
            }
        },

        closeSignInModal: function(callback) {
            var modal = this.$('#signInModal');
            modal.on('hidden.bs.modal', callback);
            modal.modal('hide');
        },

        onSignUpSubmit: function(e) {
            e.preventDefault();
            var username = this.ui.signUpUsername.val();
            var password = this.ui.signUpPassword.val();
            var email = this.ui.signUpEmail.val();
            //todo: validate
            if (username && password && email) {
                /*this.trigger('signUpSubmit', {
                    username: username,
                    email: email,
                    password: password
                });*/
                
                this.trigger('signInSubmit', {
                    login: username,
                    password: password
                });
            }
        },

        serializeData: function() {
            return {
                user: this.options.loggedUser
            }
        }

    });

    return NavbarLayout;
});
