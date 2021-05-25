Rails.application.routes.draw do
  resources :kennels 
  get '/admin', to: 'customers#admin'
  get '/customers.json', to: 'customers#index'
  post '/customers/new', to: 'customers#create'
  resources :customers
  
end
