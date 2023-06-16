class CreateExhibitions < ActiveRecord::Migration[7.0]
  def change
    create_table :exhibitions do |t|
      t.string :title
      t.text :description
      t.string :date
      t.string :link

      t.timestamps
    end
  end
end
