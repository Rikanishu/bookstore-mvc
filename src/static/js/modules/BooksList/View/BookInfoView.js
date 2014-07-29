define([
    'marionette',
    'hbs!templates/BooksList/bookinfo',
    'hbs!templates/BooksList/bookinfo/cover',
    'hbs!templates/BooksList/bookinfo/description'
], function(Marionette, layoutTemplate, coverTemplate, descriptionTemplate) {


    var isNeedToRenderAgain = function(view, model) {
        if (view.observableAttributes) {
            var changedAttributes = model.changedAttributes();
            var viewAttrs = view.observableAttributes;
            if (_.size(changedAttributes)) {
                var rule, whenPassed;
                if (viewAttrs.only) {
                    rule = viewAttrs.only;
                    whenPassed = true;
                } else if (viewAttrs.except) {
                    rule = viewAttrs.except;
                    whenPassed = false;
                } else {
                    return true;
                }

                for (var i = 0, count = rule.length; i < count; ++i) {
                    if (rule[i] in changedAttributes) {
                        return whenPassed;
                    }
                }

                return !whenPassed;
            }
        }
        return true;
    };


    var CoverView = Marionette.ItemView.extend({
        template: coverTemplate,
        observableAttributes: {
            only: [
                'cover'
            ]
        }
    });

    var DescriptionView = Marionette.ItemView.extend({
        template: descriptionTemplate,
        observableAttributes: {
            except: [
                'cover'
            ]
        }
    });

    var BookInfoView = Marionette.Layout.extend({
        template: layoutTemplate,
        events: {
            'click .action-back': 'onBookInfoBack',
            'click .action-add-to-shopcart': 'onAddToShopcart'
        },
        regions: {
            moreFromAuthorRegion: '.more-from-author-region',
            bookCoverRegion: '.cover-region',
            descriptionRegion: '.description-region'
        },
        modelEvents: {
            'change': 'onChangeModel'
        },

        onShow: function() {
            this.bookCoverRegion.show(new CoverView({
                model: this.model
            }));
            this.descriptionRegion.show(new DescriptionView({
                model: this.model
            }));
        },

        onBookInfoBack: function(e) {
            e.preventDefault();
            this.trigger('navBack');
        },

        onAddToShopcart: function(e) {
            e.preventDefault();
            this.trigger('addToShopcart', this.model.get('bookId'), this.model.toJSON());
            this.model.set('isInShopcart', true);
        },

        onChangeModel: function() {
            var self = this;
            var observableRegions = [
                this.bookCoverRegion,
                this.descriptionRegion
            ];
            _.each(observableRegions, function(r) {
                if (r.currentView) {
                    var view = r.currentView;
                    if (isNeedToRenderAgain(view, self.model)) {
                        view.render();
                    }
                }
            });
        }

    });

    return BookInfoView;

});