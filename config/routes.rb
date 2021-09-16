Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  #made url for axios calls
  namespace :api do
    resources :doctors do
      resources :pasients do
    end
  end
end


end
