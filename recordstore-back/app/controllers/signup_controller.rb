class SignupController < ApplicationController

  def create
    user = User.new(user_params)

    if user.save
      # logger.debug "[debug] Signup Success"
      payload = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login

      response.set_cookie(JWTSessions.access_cookie, value: tokens[:access], httponly: true, secure: Rails.env.production?)
      render json: { csrf: tokens[:csrf] }
    else
      # logger.debug "[debug] Signup Failed"
      render json: { error: user.errors.full_messages.join(' ') }, status: :unprocessable_entity
    end
  end


  private

    def user_params
      params.require(:signup).permit(:email, :password, :password_confirmation)
    end

end
