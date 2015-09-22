var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		'results':'index', 
		'flights/:id':'viewFlight'
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
	}

});

