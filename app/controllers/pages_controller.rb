class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def photography
  end

  def webdesign
  end

  def preloader
    unless session[:preloader_played]
      session[:preloader_played] = true
    end
  end
end
