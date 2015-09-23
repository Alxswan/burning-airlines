var app = app || {};


app.PlaneView = Backbone.View.extend({
  el: '#main',

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
  }

})
