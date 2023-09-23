class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def photography
    @images_clubbing = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Clubbing/'
    )
    @images_mariages = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Mariages/'
    )
    @images_animaux = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Mariages/'
    )
    @images_portraits = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Mariages/'
    )
    @images_street = Cloudinary::Api.resources(
      type: 'upload',
      prefix: 'Photography/Mariages/'
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
