var app = app || {};

app.AppView = Backbone.View.extend({
	
	el: '#main',

	events: {
		'submit form' : 'search'
	},

	render: function() {
		var html = $('#appViewTemplate').html()
		this.$el.html(html);
		this.collection.each(function(flight){
			var flightListView = new app.FlightListView({ model: flight });
			flightListView.render();
		})
	},

	search: function ( event ) {
		event.preventDefault();
		var query = $("input").val();
		var view = this;
		app.flights.fetch({ data: { search: query } }, { reset: true }).done(function () {
			view.render();
		});
	}

})