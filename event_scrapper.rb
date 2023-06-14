require 'nokogiri'
require 'httparty'

def web_scraper(url)
  response = HTTParty.get(url)
  parsed_response = Nokogiri::HTML(response.body)

  # Scraping logic
  cards = parsed_response.css('.Card_card__xz_vC')

  cards.each do |card|
    # Extract relevant information from the card
    # Extract card title, date and description
    title = card.css('.Card_title__b89tf').text
    date = card.css('.EventCard_eventDate__vGl2i').text

    # Extract multiple elements within description
    description_elements = card.css('.Card_info__xUQD5').children

    # Separate and extract each individual element
    description = description_elements.map { |element| element.text.strip }.join(' ')

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
(1..3).each do |number|
  url = "https://www.iamsterdam.com/en/whats-on/calendar/exhibitions/all-exhibitions?page=#{number}"
  web_scraper(url)
end

puts stars

puts "Theatre and Stage"
#call the scraper function for theatre and stageshows
(1..3).each do |number|
  url = "https://www.iamsterdam.com/en/whats-on/calendar/theatre-and-stage/stage?page=#{number}"
  web_scraper(url)
end

puts stars

puts "Festivals"
#call the scraper for festivals
(1..3).each do |number|
  url ="https://www.iamsterdam.com/en/whats-on/calendar/festivals?page=#{number}"
  web_scraper(url)
end
