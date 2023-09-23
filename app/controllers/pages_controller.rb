class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def photography

    # clubbing
    @images_clubbing = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Clubbing/',
      max_results: 1000
    )
    @images_clubbing['resources'].shuffle!


    # mariages
    @images_mariages = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Mariages/',
      max_results: 1000
    )
    @images_mariages['resources'].shuffle!

    # animaux
    @images_animaux = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Animaux/',
      max_results: 1000
    )
    @images_animaux['resources'].shuffle!

    # portraits
    @images_portraits = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Portraits/',
      max_results: 1000
    )
    @images_portraits['resources'].shuffle!

    # street
    @images_street = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Street/',
      max_results: 1000
    )
    @images_street['resources'].shuffle!
  end

  def webdesign
  end

  def preloader
    unless session[:preloader_played]
      session[:preloader_played] = true
    end
  end
end
