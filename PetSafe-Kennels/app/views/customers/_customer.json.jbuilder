json.extract! customer, :id, :name, :city, :email, :phone, :password_digest, :created_at, :updated_at
json.url customer_url(customer, format: :json)
