class Api::PasientsController < ApplicationController

  before_action :set_doctor
  before_action :set_pasient, only: [:show, :update, :destroy]

  def index
      render json: @doctor.pasients
  end

  def show
      render json: @pasient
  end

  def create
      @pasient = @doctor.pasient.new(pasients_params)
      if(@pasient.save)
          render json: @pasient
      else
          render json: @pasient.errors.full_messages, status: 422
      end
  end

  def update
      if(@pasient.update(pasient_params))
          render json: @pasient
      else
          render json: @pasient.errors.full_messages, status: 422
      end
  end

  def destroy
      render json: @pasient.destroy
  end

  private

  def movies_params
      params.require(:pasient).permit(:name, :phone)
  end

  def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
  end

  def set_pasient
      @pasient = @doctor.pasient.find(params[:id])
  end


end




