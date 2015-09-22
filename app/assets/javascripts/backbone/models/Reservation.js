var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',

  defaults:  {
    flight_id: null,  
    user_id: null,
    seat: null
  },

});
