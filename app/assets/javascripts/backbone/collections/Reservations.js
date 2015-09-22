var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  model: app.Reservation,
});