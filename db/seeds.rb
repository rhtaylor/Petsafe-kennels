# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Customer.create([{name: 'John Taylor', number: 5207307020, email: 'jackisbusy@gmail.com', city: 'Phoenix'},
                {name: "Tom Burger", number: 5555555555, email: 'moneyman', city: 'Glendale'}]) 
Kennel.create([{kennel_type: 'Dog Run', cost_material: 30000, cost_labor: 5000, date: Date.current, customers_id: 1},   
                {kennel_type: 'Cool Kennel', cost_material: 50000, cost_labor: 3000, date: Date.current, customers_id: 2}])