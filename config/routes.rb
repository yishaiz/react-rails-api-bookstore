Rails.application.routes.draw do
  namepace :api do
    namepace :v1 do
      resources :books
    end
  end
end
