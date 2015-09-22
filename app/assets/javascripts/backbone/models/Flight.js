var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',

  defaults:  {
    number: null,
    origin: null,
    destination: null,
    date: null,
    plane_id: null
  },

});

 