$(function (){

  _.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
    interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
  };

  app.planes = new app.Planes();
  app.flights = new app.Flights();
  app.reservations = new app.Reservations();
  app.session = new app.Session();

  
  app.reservations.fetch().done(function() {

    app.flights.fetch().done(function() {

      app.planes.fetch().done(function() {
        
        app.session.fetch().done(function(){
        
          app.router = new app.Router();       
          Backbone.history.start({pushState: true});

          app.planes.each(function(plane){
            plane.getFlights();
          });

          app.flights.each(function(flight){
            flight.getReservations();
          });

        });
      });
    });  
    }); 

  });
















