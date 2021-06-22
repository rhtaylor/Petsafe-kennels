class CreateKennels < ActiveRecord::Migration[6.0]
  def change
    create_table :kennels do |t|
      t.string :kennel_type
      t.text :materials
      t.bigint :cost
      t.bigint :labor
      t.bigint :charge
      t.datetime :date
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
