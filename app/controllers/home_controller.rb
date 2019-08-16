class HomeController < ApplicationController
  def show
    # for testing, create one in your console
    @user = User.first
  end
end
