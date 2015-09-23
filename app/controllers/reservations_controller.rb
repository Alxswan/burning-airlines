class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
  end

  def show
    @reservation = Reservation.find params[:id]
  end

  def create
    user_reservations = Reservation.where({ flight_id: params[:flight_id], user_id: params[:user_id] })
    @new_reservation = Reservation.create reservation_params if user_reservations.empty?
  end

  def update
  end

  private
    def reservation_params
      params.require(:reservation).permit(:flight_id, :seat, :user_id)
    end
end
