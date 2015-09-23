var app = app || {};


app.FlightView = Backbone.View.extend({
	el: '#main',


  events: {
      'click button': 'book',
  },

  book: function() {

      var flight = this.model
      var reservationsArr = this.model.reservations
      var booking = false

      var userReservations = app.reservations.where({
        flight_id: flight.get("id"), 
        user_id: app.session.get("id")
      });

      if ( userReservations.length === 0 ) {
        app.reservation = new app.Reservation({
          user_id: app.session.get('id'),
          flight_id: flight.get('id'),
          seat: $('.reserveUser').attr('id')
        })   
        
        app.reservation.save();
      }
      // debugger;
      // _.each(reservationsArr, function(reservation){

      //     if ( reservation.attributes.user_id === app.session.get('id') ) { 
      //       booking = true
      //       // debugger;
      //     } 
      //     if ( booking === false ) {

      //       app.reservation = new app.Reservation({
      //           user_id: app.session.get('id'),
      //           flight_id: flight.get('id'),
      //           seat: $('.reserveUser').attr('id')
      //        })   

      //       app.reservation.save()
      //       // this.reservations.add( app.reservation );

      //     }

      // })       
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
        if ( $('div').hasClass('reserveUser') ) {
          $('div').removeClass('reserveUser')
          $('div').find('p').remove()
        } 
          if ( !$(this).hasClass('booked') ) {
            var current_user = app.session.get('name')
            if ($(this).has('p').length ) {
              $(this).find('p').remove()
            } else {
              $(this).append('<p>' + current_user + '</p>')
            }

            $(this).toggleClass("reserveUser");
        }
      })
  },

  allReservations: function() {


    var reservationsArr = this.model.reservations
    _.each(reservationsArr, function(reservation){
      var seat_name = reservation.attributes.seat
      var s = $('#' + seat_name).addClass('booked')
    })
  }


})
