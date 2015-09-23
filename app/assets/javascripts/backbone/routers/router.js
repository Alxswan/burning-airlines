var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		'results':'index', 
		'flights/:id':'viewFlight',
		'planes/:id' :'viewPlane'
	},

	index: function () {
		var appView = new app.AppView({collection: app.flights});
		appView.render();
	},

	viewFlight: function(id) {
		var flight = app.flights.get(id)
		if (!flight) {
			app.router.navigate('results',true);
		} 
		var flightView = new app.FlightView({model: flight})
		flightView.render()
	},

	viewPlane: function(id) {
		var flight = app.flights.get(id);
		var planeId = flight.attributes.plane_id;
		var plane = app.planes.get(planeId);
		
		if (!plane) {
			app.router.navigate('results',true);
		} 

		var planeView = new app.PlaneView({model: plane})
		planeView.render();
		planeView.click();
	}

});

