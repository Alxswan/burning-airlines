class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
  end

  def show
    @reservation = Reservation.find params[:id]
  end

  def create
  end

  def update
  end
end
