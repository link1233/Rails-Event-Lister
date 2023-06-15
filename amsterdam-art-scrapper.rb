require 'nokogiri'
require 'httparty'

def web_scraper(url)
  response = HTTParty.get(url)
  parsed_response = Nokogiri::HTML(response.body)

  # Scraping logic
  cards = parsed_response.css('.event-tile')

  cards.each do |card|
    # Extract relevant information from the card
    # Extract card title, date and description
    title = card.css('.event-categories').text
    date = card.css('.event-date').text
    description = card.css('.event-location').text



    puts "Title: #{title}"
    puts "Description: #{description}"
    puts "Date: #{date}"
    puts "----------------------"
  end
end

#make a divider to make the list easier to read
stars = "*" * 50
puts stars

puts "Art Exhibitions"
# Call the scraper function for art exhibitons
# (1..3).each do |number|
  url = "https://amsterdamart.com/agenda/"
  web_scraper(url)
# end
