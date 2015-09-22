User.destroy_all
u1 = User.create :name => 'Zac', :email => 'zac@zam.com', :password => 'chicken'
u2 = User.create :name => 'Miles', :email => 'miles@zam.com', :password => 'chicken'
u3 = User.create :name => 'Alex', :email => 'alex@zam.com', :password => 'chicken'

Flight.destroy_all
f1 = Flight.create :number => 'ZAM1', :origin => 'SYD', :destination => 'Paradise'
f2 = Flight.create :number => 'ZAM2', :origin => 'MEL', :destination => 'DAR'
f3 = Flight.create :number => 'ZAM3', :origin => 'PER', :destination => 'GEE'

Plane.destroy_all
p1 = Plane.create :name => '747', :rows => 6, :columns => 3
p2 = Plane.create :name => '737', :rows => 8, :columns => 4
p3 = Plane.create :name => '767', :rows => 4, :columns => 2

Reservation.destroy_all
r1 = Reservation.create
r2 = Reservation.create
r3 = Reservation.create

p1.flights << f1
p2.flights << f2
p3.flights << f3

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3

f1.reservations << r1
f2.reservations << r2
f3.reservations << r3



