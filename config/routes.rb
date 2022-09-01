Rails.application.routes.draw do
  root 'bitcoin#index'
  post '/' => 'bitcoin#create'
  delete '/:id' => 'bitcoin#delete', as: 'delete_bitcoin'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
