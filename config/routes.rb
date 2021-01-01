Rails.application.routes.draw do
  resources :kennels
  get '/customers.json', to: 'customers#index.json'
  resources :customers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
