var app = app || {};


app.FlightView = Backbone.View.extend({
	el: '#main',


  events: {
      'click button': 'book',
  },

  book: function() {
        app.reservation = new app.Reservation({
          user_id: app.session.get('id'),
          flight_id: this.model.get('id'),
          seat: $('.reserve').attr('id')
       })    

        app.reservation.save()
  },

	render: function( plane ){
		var flightTemplate = $('#flightView').html()
		var flightHtml = _.template(flightTemplate);
		var flight = flightHtml({ flight: this.model.toJSON(), plane: plane.toJSON() } )
    this.$el.html( flight )


  },

  listenForClick: function() {
      $( "#plane").delegate(".seat", "click", function (e) {
        e.preventDefault();
          $(this).toggleClass("reserve");
      })
  },

  allReservations: function() {
    var flight = this.model
    var reservationsArray = flight.reservations.collection
    var reservationsArr = reservationsArray.models
    _.each(reservationsArr, function(reservation){
      
    })
  }


})
