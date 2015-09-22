var app = app || {};

app.AppView = Backbone.View.extend({
	
	el: '#main',

	render: function() {
		var html = $('#appViewTemplate').html()
		this.$el.html(html);

		this.collection.each(function(flight){
			var flightListView = new app.FlightListView({model: flight});
			flightListView.render();
		})
	}

})