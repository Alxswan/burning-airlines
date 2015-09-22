# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  number      :text
#  origin      :text
#  destination :text
#  date        :date
#  plane_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
end
