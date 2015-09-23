var app = app || {};


app.FlightView = Backbone.View.extend({
	el: '#main',

  events: {
    'click' : 'showPlane'
  },

	render: function(){
		var flightTemplate = $('#flightView').html()
		var flightHtml = _.template(flightTemplate);
		var flight = flightHtml( this.model.toJSON() )
		this.$el.html( flight )
	},

  showPlane: function(){
    app.router.navigate('planes/' + this.model.get('plane_id'), true)
  }
})
