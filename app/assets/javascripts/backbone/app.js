$(function (){
  app.planes = new app.Planes();
  app.flights = new app.Flights();
  app.reservations = new app.Reservations();


  // YOU NEED TO FIGURE OUT TO WAIT UNTIL ALL OF THESE ARE LOADED
  app.reservations.fetch().done(function() {

    app.flights.fetch().done(function() {

      app.planes.fetch().done(function() {

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