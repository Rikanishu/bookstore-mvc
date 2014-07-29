define([
    'marionette',
    'hbs!templates/BooksList/author/info'
], function(Marionette, template) {

    var View = Marionette.Layout.extend({
        template: template,
        regions: {
            authorBooksRegion: '.author-books-region'
        },
        ui: {
           biographyText: '.bio .text',
           showFullBio: '.show-full-bio'
        },
        events: {
            'click .show-full-bio .button': 'onShowFullBioClicked'
        },

        _collapseOptions: {
            maxHeight: 260,
            swingDuration: 400,
            collapsed: false,
            fullTextHeight: null
        },

        onShow: function() {
            //render full size by default
            var $biographyText = this.ui.biographyText;
            var biographyEl = $biographyText.get(0);
            var fullTextHeight = biographyEl.scrollHeight;
            if (fullTextHeight > this._collapseOptions.maxHeight) {
                $biographyText.css('height', this._collapseOptions.maxHeight + "px");
                this._collapseOptions.fullTextHeight = fullTextHeight;
                this._collapseOptions.collapsed = true;
            } else {
                this.ui.showFullBio.hide();
                this._collapseOptions.fullTextHeight = null;
                this._collapseOptions.collapsed = false;
            }
        },

        onShowFullBioClicked: function() {
            var self = this;
            if (this._collapseOptions.fullTextHeight !== null) {
                if (this._collapseOptions.collapsed) {
                    this.ui.biographyText.animate({
                        height: this._collapseOptions.fullTextHeight + "px"
                    }, this._collapseOptions.swingDuration, function() {
                        self._collapseOptions.collapsed = false;
                        //hide button: works only for expand
                        self.ui.showFullBio.hide();
                    });
                } else {
                    this.ui.biographyText.animate({
                        height: this._collapseOptions.maxHeight + "px"
                    }, this._collapseOptions.swingDuration, function() {
                        self._collapseOptions.collapsed = true;
                    });
                }
            }
        }
    });

    return View;

});
