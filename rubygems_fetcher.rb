class RubygemsFetcher < Sinatra::Base

  options '/*' do
    headers['Access-Control-Allow-Origin'] = "*"
    headers['Access-Control-Allow-Methods'] = "*"
    headers['Access-Control-Allow-Headers'] ="accept, authorization, origin, content-type"
  end

  get "/rubygems.js" do
    File.read('rubygems.js')
  end

  get "/:gem_name" do
    headers['Access-Control-Allow-Origin'] = "*"
    headers['Access-Control-Allow-Methods'] = "*"
    headers['Access-Control-Allow-Headers'] ="accept, authorization, origin, content-type"
    begin
      HTTParty.get("https://rubygems.org/api/v1/downloads/" + params[:gem_name], format: :json).body
    rescue
      404
    end
  end
end
