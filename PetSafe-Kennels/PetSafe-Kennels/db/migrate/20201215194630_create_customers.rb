class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :city
      t.string :email
      t.string :phone
      t.string :password_digest

      t.timestamps
    end
  end
end
