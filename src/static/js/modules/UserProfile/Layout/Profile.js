define([
    'marionette',
    'hbs!templates/UserProfile/profile'
], function(Marionette, template) {

    var Layout = Marionette.Layout.extend({
        template: template,

        regions: {
            leftSideRegion: '#profileLeftSideRegion',
            profileMainRegion: '#profileMainRegion'
        }

    });

    return Layout;

});
