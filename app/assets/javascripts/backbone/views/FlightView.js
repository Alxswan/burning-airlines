var app = app || {};


app.FlightView = Backbone.View.extend({
	el: '#main',

  // events: {
  //   'click' : 'showPlane'
  // },

  // viewPlane: function(id) {
  // var planeView = new app.PlaneView({model: flight})
  // },

	render: function( plane ){
    // debugger;
		var flightTemplate = $('#flightView').html()
		var flightHtml = _.template(flightTemplate);
		var flight = flightHtml({ flight: this.model.toJSON(), plane: plane.toJSON() } )
    this.$el.html( flight )



  },

  // showPlane: function(){
  //   app.router.navigate('planes/' + this.model.get('plane_id'), true)
  // }

})
