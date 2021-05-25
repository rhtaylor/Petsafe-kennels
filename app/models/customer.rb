require 'bcrypt'
class Customer < ApplicationRecord   
    
    include ActiveModel::Validations
    include BCrypt
    has_many :kennels 
    has_secure_password   
    validates :name, :password, presence: true
    validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
    validates :number, uniqueness: true, length: { is: 10 }
end
