# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'
# Thing.create(name:Faker::Company.name )
# Thing.create(name:Faker::Company.name )

Doctor.destroy_all
Pasient.destroy_all

a = Doctor.create(name: "Adam", phone: "987-786-8769")
b = Doctor.create(name: "Bob", phone: "437-786-8329")
c = Doctor.create(name: "Cally", phone: "677-786-8349")

a.pasients.create(name: "Sally", phone: "798-765-4235")
a.pasients.create(name: "Lilly", phone: "908-787-4235")

b.pasients.create(name: "John", phone: "798-765-4235")
b.pasients.create(name: "Kim", phone: "234-765-4235")
b.pasients.create(name: "Rachel", phone: "856-765-4235")

c.pasients.create(name: "Jill", phone: "128-767-4235")
c.pasients.create(name: "Amy", phone: "798-765-4235")
c.pasients.create(name: "Pam", phone: "558-765-4235")
