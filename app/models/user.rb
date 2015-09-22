# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :text
#  email      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  
  has_many :reservations
  has_many :flights, :through => :reservations

  validates :email, :presence => true, :uniqueness => true, :on => :create
  validates :name, :presence => true
end
