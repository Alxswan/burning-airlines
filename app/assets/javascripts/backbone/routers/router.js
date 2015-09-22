var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		'results':'index'
	},

	index: function () {
		var appView = new app.AppView({collection: app.flights});
		appView.render();
	}

});

