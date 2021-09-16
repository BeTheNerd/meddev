class Doctor < ApplicationRecord

  has_many :pasients, dependent: :destroy

end
