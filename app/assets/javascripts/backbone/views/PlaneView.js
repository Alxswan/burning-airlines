var app = app || {};


app.PlaneView = Backbone.View.extend({
  el: '#main',

  events: {
    'click button': 'book',
  },

  book: function() {
      app.reservation = new app.Reservation({
        user_id: app.session.get('id'),
        flight_id: null,
        seat: $('.reserve').attr('id')

     })    
  },

  render: function(){
      var planeTemplate = $('#planeView').html();
      var planeHtml = _.template(planeTemplate);
      var plane = planeHtml( this.model.toJSON() );
      this.$el.html( plane );
  },

  click: function() {
      $( "#plane").delegate(".seat", "click", function (e) {
        e.preventDefault();
          $(this).toggleClass("reserve");
      })
  },

  planeView: function ( plane ){ 
   var planeView = new app.PlaneView({model: plane})
   planeView.render();
  } 

});
