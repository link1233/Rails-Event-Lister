Rails.application.routes.draw do
  root 'home#index'
  # Path: config/routes.rb
  namespace :api do
    namespace :v1 do
      resources :events, only: [:index]
    end
  end
end
