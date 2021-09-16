class CreatePasients < ActiveRecord::Migration[6.1]
  def change
    drop_table :pasients
    create_table :pasients do |t|
      t.string :name
      t.string :phone
      t.belongs_to :doctor

      t.timestamps
    end
  end
end
