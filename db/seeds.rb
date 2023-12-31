# This file should contain all the record creation needed to seed the database with its default values.
require 'faker'

puts 'Cleaning database...'
Event.destroy_all

puts 'Creating 10 fake events...'
events = 10.times do
  Event.create(
    title: Faker::Lorem.sentence(word_count: 3),
    tag: Faker::Lorem.word
  )
end

puts 'Finished!'
