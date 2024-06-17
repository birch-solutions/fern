# frozen_string_literal: true

require_relative "../../requests"
require_relative "types/create_movie_request"
require "json"
require_relative "types/movie"
require "async"

module SeedApiClient
  class ImdbClient
    # @return [SeedApiClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedApiClient::RequestClient]
    # @return [SeedApiClient::ImdbClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # Add a movie to the database
    #
    # @param request [Hash] Request of type CreateMovieRequest, as a Hash
    #   * :title (String)
    #   * :rating (Float)
    # @param request_options [SeedApiClient::RequestOptions]
    # @return [String]
    # @example
    #  api = SeedApiClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
    #  api.imdb.create_movie(request: { title: "string", rating: 1.1 })
    def create_movie(request:, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = {
      **(req.headers || {}),
      **@request_client.get_headers,
      **(request_options&.additional_headers || {})
        }.compact
        req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/movies/create-movie"
      end
      JSON.parse(response.body)
    end

    # @param movie_id [String]
    # @param request_options [SeedApiClient::RequestOptions]
    # @return [Movie]
    # @example
    #  api = SeedApiClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
    #  api.imdb.get_movie(movie_id: "string")
    def get_movie(movie_id:, request_options: nil)
      response = @request_client.conn.get do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = {
      **(req.headers || {}),
      **@request_client.get_headers,
      **(request_options&.additional_headers || {})
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/movies/#{movie_id}"
      end
      Movie.from_json(json_object: response.body)
    end
  end

  class AsyncImdbClient
    # @return [SeedApiClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedApiClient::AsyncRequestClient]
    # @return [SeedApiClient::AsyncImdbClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # Add a movie to the database
    #
    # @param request [Hash] Request of type CreateMovieRequest, as a Hash
    #   * :title (String)
    #   * :rating (Float)
    # @param request_options [SeedApiClient::RequestOptions]
    # @return [String]
    # @example
    #  api = SeedApiClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
    #  api.imdb.create_movie(request: { title: "string", rating: 1.1 })
    def create_movie(request:, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/movies/create-movie"
        end
        parsed_json = JSON.parse(response.body)
        parsed_json
      end
    end

    # @param movie_id [String]
    # @param request_options [SeedApiClient::RequestOptions]
    # @return [Movie]
    # @example
    #  api = SeedApiClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
    #  api.imdb.get_movie(movie_id: "string")
    def get_movie(movie_id:, request_options: nil)
      Async do
        response = @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/movies/#{movie_id}"
        end
        Movie.from_json(json_object: response.body)
      end
    end
  end
end
