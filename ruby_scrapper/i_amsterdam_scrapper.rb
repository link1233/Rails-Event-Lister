# frozen_string_literal: true

require 'nokogiri'
require 'httparty'

def web_scraper(url)
  cards = Nokogiri::HTML(HTTParty.get(url).body).css('.Card_card__xz_vC')
  cards.each do |card|
    title = card.css('.Card_title__b89tf').text
    date = card.css('.EventCard_eventDate__vGl2i').text
    link = card.css('a[href]').attribute('href').to_s
    description = card.css('.Card_info__xUQD5').children.map(&:text).join(' ').strip
    puts '----------------------', "Title: #{title}", "Description: #{description}", "Date: #{date}", "Link: #{link}"
  end
end

# make a divider to make the list easier to read
stars = '*' * 50
puts stars

puts 'Art Exhibitions'
# Call the scraper function for art exhibitons
(1..3).each do |number|
  url = "https://www.iamsterdam.com/en/whats-on/calendar/exhibitions/all-exhibitions?page=#{number}"
  web_scraper(url)
end

puts stars

puts 'Theatre and Stage'
# call the scraper function for theatre and stageshows
(1..3).each do |number|
  url = "https://www.iamsterdam.com/en/whats-on/calendar/theatre-and-stage/stage?page=#{number}"
  web_scraper(url)
end

puts stars

puts 'Festivals'
# call the scraper for festivals
(1..3).each do |number|
  url = "https://www.iamsterdam.com/en/whats-on/calendar/festivals?page=#{number}"
  web_scraper(url)
end
