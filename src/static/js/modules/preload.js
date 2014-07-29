/**
 * Includes parts of common modules
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette'
], function($, _, Backbone, Marionette) {
   return {
       $: $,
       _: _,
       Backbone: Backbone,
       Marionette: Marionette
   }
});
