Rails.application.routes.draw do
  get '/', to: 'kennels#home'
  resources :kennels
  resources :customers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end