var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		'results':'index', 
		'flights/:id':'viewFlight',
		'planes/:id' :'viewPlane',
	},


	index: function () {
		var appView = new app.AppView({ collection: app.flights });
		appView.render();
	},

	viewFlight: function(flight_id) {
		if ( app.session.get('id') ) {
			var flight = app.flights.get(flight_id)
			if (!flight) {
				app.router.navigate('results',true);
			} 

			var plane_id = flight.attributes.plane_id;
			var plane = app.planes.get( plane_id );

			var flightView = new app.FlightView({ model: flight });

			flightView.render( plane )
			flightView.listenForClick()
			flightView.allReservations();
			
			setInterval(function () {
				app.reservations.fetch().done(function() {
		    	flightView.allReservations();
		   	})
		    	console.log("checking now")
		  }, 2000);
		} else {
			alert('your not logged in sorry cant do that.')
			return;
		}
	},

	// viewPlane: function(id) {
	// 	var plane = app.planes.get(id);
	// 	// var planeId = flight.attributes.plane_id;
	// 	// var plane = app.planes.get(planeId);
		
	// 	if (!plane) {
	// 		app.router.navigate('results',true);
	// 	} 

	// 	var planeView = new app.PlaneView({model: plane})
	// 	planeView.render();
	// 	planeView.click();
	// }


});

