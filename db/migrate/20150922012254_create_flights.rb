class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :number
      t.text :origin
      t.text :destination
      t.date :date
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
