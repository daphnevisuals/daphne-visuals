class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def photography
    @images = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Clubbing/', # Remplacez par votre dossier Cloudinary
      max_results: 10 # Limitez le nombre d'images affichées si nécessaire
    )
  end

  def webdesign
  end

  def preloader
    unless session[:preloader_played]
      session[:preloader_played] = true
    end
  end
end
