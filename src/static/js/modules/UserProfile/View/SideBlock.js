define([
    'marionette',
    'hbs!templates/UserProfile/side'
], function(Marionette, template) {

    var View = Marionette.ItemView.extend({
        template: template,

        regions: {
            leftSideRegion: '#profileLeftSideRegion',
            profileMainRegion: '#profileMainRegion'
        }

    });

    return View;

});