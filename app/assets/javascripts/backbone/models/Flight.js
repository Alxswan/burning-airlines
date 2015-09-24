var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/api/flights',

  defaults:  {
    number: null,
    origin: null,
    destination: null,
    date: null,
    plane_id: null
  },

  getReservations: function() {
    this.reservations = app.reservations.where({flight_id: this.id})
  }

});

 