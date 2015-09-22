$(function (){
  app.planes = new app.Planes();
  app.flights = new app.Flights();
  app.reservations = new app.Reservations();

  // YOU NEED TO FIGURE OUT TO WAIT UNTIL ALL OF THESE ARE LOADED
  app.reservations.fetch(); //
  app.flig     lanes.fetch();       //

})