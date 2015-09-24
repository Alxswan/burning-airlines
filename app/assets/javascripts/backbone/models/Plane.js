var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot: '/api/planes',

  defaults:  {
    name: null,
    row: null,
    column: null
  },

  getFlights: function() {
    this.flights = app.flights.where('plane_id', this)
  }

});



