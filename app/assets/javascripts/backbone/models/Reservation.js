var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/api/reservations',

  defaults:  {
    flight_id: null,  
    user_id: null,
    seat: null
  }

});
