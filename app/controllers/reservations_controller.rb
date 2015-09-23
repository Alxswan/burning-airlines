class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
  end

  def show
    @reservation = Reservation.find params[:id]
  end

  def create
    @new_reservation = Reservation.create reservation_params
  end

  def update
  end

  private
    def reservation_params
      params.require(:reservation).permit(:flight_id, :seat, :user_id)
    end
end
