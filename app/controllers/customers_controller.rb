class CustomersController < ApplicationController 
  skip_before_action :verify_authenticity_token, :only => [:create]
  before_action :set_customer, only: [:show, :edit, :update, :destroy]
  attr_accessor :customer, :kennel 
         
  
  def admin 
    @customers = Customer.all
    @associatedInfo = @customers.map{ |cus| {customer: cus, kennel: cus.kennels} } 
    respond_to do |format|
      format.json { render :json => @associatedInfo } 
    end
  end 
  # GET /customers
  # GET /customers.json
  def index
    @customers = Customer.all 
    respond_to do |format|
      format.json { render :json => @customers } 
    
  end
  end

  # GET /customers/1
  # GET /customers/1.json
  def show
  end

  # GET /customers/new
  def new 
    binding.pry
    @customer = Customer.new
  end

  # GET /customers/1/edit
  def edit
  end

  # POST /customers
  # POST /customers.json
  def create 
        params[:customer][:password] = params[:password] 
        params[:customer][:password_confirmation] = params[:password_confirmation] 
     
       @customer = Customer.new(customer_params) 
       
      if @customer.save 
          respond_to do |format|
          if @customer.save && @customer.authenticate(params[:customer][:password])
            format.html { redirect_to @customer, notice: 'Customer was successfully created.' }
            format.json { render :show, status: :created, location: @customer }
           else
            format.html { render :new }
            format.json { render json: @customer.errors, status: :unprocessable_entity }
           end 
          end
          
         elsif @customer.errors  
          
          respond_to do |format|   
           format.json { render json: @customer.errors.full_messages, message: @customer.errors.full_messages.to_json, status: :unprocessable_entity }
      end  
    end
    
  end 


  # PATCH/PUT /customers/1
  # PATCH/PUT /customers/1.json
  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.html { redirect_to @customer, notice: 'Customer was successfully updated.' }
        format.json { render :show, status: :ok, location: @customer }
      else
        format.html { render :edit }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customers/1
  # DELETE /customers/1.json
  def destroy
    @customer.destroy
    respond_to do |format|
      format.html { redirect_to customers_url, notice: 'Customer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:name, :number, :email, :city, :address, :password, :password_confirmation)
    end
end
