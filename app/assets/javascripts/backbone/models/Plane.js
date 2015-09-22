var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot: '/planes',

  defaults:  {
    name: null,
    row: null,
    column: null
  },

});

 


