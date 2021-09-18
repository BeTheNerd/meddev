class Api::DoctorsController < ApplicationController

before_action :set_doctor, only: [:show, :update, :destroy]  

  def index 
    render json: Doctor.all
  end

  def show
    render json: @doctor 
  end

  def create
    @doctor = Doctor.new(doctor_perams)
    if(@doctor.save)
      render json: @doctor
    else
      render json: @doctor.errors.full_messages, status: 422
    end  
  end

  def update
    if(@doctor.update(doctor_perams))
      render json: @doctor
    else
      render json: @doctor.errors.full_messages, status: 422
    end
  end

  def destroy
    @doctor.destroy
    render json: @doctor
  end

  private

  def doctor_perams
    params.require(:doctor).permit(:name, :phone)
  end

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end

end
