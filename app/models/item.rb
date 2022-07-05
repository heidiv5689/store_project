class Item < ApplicationRecord
  validates :name, :image, presence: true
  
end
