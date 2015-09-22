var app = app || {};


app.FlightView = Backbone.View.extend({
	el: '#main',

	render: function(){
		var flightTemplate = $('#flightView').html()
		var flightHtml = _.template(flightTemplate);
		var flight = flightHtml( this.model.toJSON() )
		this.$el.html( flight )
		
	}
})
