define([
    'marionette',
    'hbs!templates/BooksList/filter',
    'modules/vent'
], function(Marionette, template, vent) {

    var FilterView = Marionette.ItemView.extend({
        template: template,

        ui: {
            filterForm: '#filterForm',
            authorFilter: '#authorFilter',
            bookTitleFilter: '#bookTitleFilter',
            publishYearFilter: '#publishYearFilter',
            searchGlobalText: '#searchGlobalText'
        },

        events: {
            'click #submitFilterAction': 'onFilterSubmit',
            'click #clearFilterAction': 'onResetFilters',
            'click #searchGlobalButton': 'onSearchClick'
        },
        
        onFilterSubmit: function(evt) {
            evt.preventDefault();
            this.onFilterListStart();
            var filterData = {
                author: this.ui.authorFilter.val(),
                bookTitle: this.ui.bookTitleFilter.val(),
                publishYear: this.ui.publishYearFilter.val()
            };
            var validCriteria = {};
            _.each(filterData, function(val, key) {
                if (val !== '') {
                    validCriteria[key] = val;
                }
            });
            this.trigger('submitFilters', validCriteria, this);
        },

        onResetFilters: function(evt) {
            evt.preventDefault();
            this.ui.filterForm.get(0).reset();
            this.trigger('resetFilters', this);
        },

        onSearchClick: function(evt) {
            evt.preventDefault();
            var searchString = this.ui.searchGlobalText.val();
            this.trigger('globalSearch', searchString, this);
        },

        onFilterListComlete: function() {
            //lock filters block
        },

        onFilterListStart: function() {
            //unlock filters block
        }

    });

    return FilterView;

});