var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/api/flights',
  model: app.Flight,
});