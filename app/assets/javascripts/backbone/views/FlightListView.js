var app = app || {};

app.FlightListView = Backbone.View.extend({
	tagName: 'li',

	events: {
		'click' : 'showFlight'
	},

	render: function( ) {
		var flightListTemplate = $('#flightListView').html()
		var flightListHtml = _.template(flightListTemplate)
		var flightList = flightListHtml( this.model.toJSON() )
		this.$el.html(flightList)
		this.$el.appendTo('#flights');
	},
		showFlight: function(){
		app.router.navigate('flights/' + this.model.get('id'), true)
	}
})