var app = app || {};

app.Planes = Backbone.Collection.extend({
  url: '/api/planes',
  model: app.Plane,
});