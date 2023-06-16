class ExhibitionsController < ApplicationController
  def index
    require 'httparty'
    require 'nokogiri'

    def web_scraper(url)
      response = HTTParty.get(url)
      parsed_response = Nokogiri::HTML(response.body)

      cards = parsed_response.css('.event-tile')

      cards.each do |card|
        title = card.at_css('a h3')&.text
        date = card.at_css('.event-date')&.text&.gsub(/\s+/, ' ')&.strip
        description = card.at_css('.event-location')&.text
        link = card.at_css('a[href]')&.attr('href').to_s

        Exhibition.create(title: title, description: description, date: date, link: link)
      end

      @exhibitions = Exhibition.all
    end

    # make a divider to make the list easier to read
    stars = '*' * 50
    puts stars

    puts 'Art Exhibitions'
    # Call the scraper function for art exhibitions
    url = 'https://amsterdamart.com/agenda/'
    web_scraper(url)
  end
end
