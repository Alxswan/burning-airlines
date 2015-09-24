var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: '/api/reservations',
  model: app.Reservation,
});