var app = app || {};

app.Session = Backbone.Model.extend({
  urlRoot: '/session',

  defaults:  {
    id: null
  }

});


