class Api::ApplicationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user
  before_action :set_application, only: [:show, :update, :destroy]

  def index
    render json: Application.all_data(@user.id)
  end

  def show
    render json: Application.single_record(@application.id, @user)
  end

  def create
    application = @user.applications.new(application_params)
    if application.save
      new_application = Application.single_record(application.id, @user.id)
      render json: new_application
    else
      render json: application.errors
    end
  end

  def update
    @application.save(application_params)
    if application.save
      render json: @application
    else
      render json: {errors: application.errors}
    end
  end

  def destroy
    @application.destroy
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_application
    @application = Application.find(params[:id])
  end

  def application_params
    params.require(:application).permit(:submission_date, :notes, :title, :status, :posting_url, :user_id, :company_id)
  end
end
