# frozen_string_literal: true

require_relative "../../requests"
require "json"
require "async"

module SeedCustomAuthClient
  class CustomAuthClient
    # @return [SeedCustomAuthClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedCustomAuthClient::RequestClient]
    # @return [SeedCustomAuthClient::CustomAuthClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # GET request with custom auth scheme
    #
    # @param request_options [SeedCustomAuthClient::RequestOptions]
    # @return [Boolean]
    def get_with_custom_auth(request_options: nil)
      response = @request_client.conn.get do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["X-API-KEY"] = request_options.custom_auth_scheme unless request_options&.custom_auth_scheme.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/custom-auth"
      end
      JSON.parse(response.body)
    end

    # POST request with custom auth scheme
    #
    # @param request [Object]
    # @param request_options [SeedCustomAuthClient::RequestOptions]
    # @return [Boolean]
    def post_with_custom_auth(request: nil, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["X-API-KEY"] = request_options.custom_auth_scheme unless request_options&.custom_auth_scheme.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/custom-auth"
      end
      JSON.parse(response.body)
    end
  end

  class AsyncCustomAuthClient
    # @return [SeedCustomAuthClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedCustomAuthClient::AsyncRequestClient]
    # @return [SeedCustomAuthClient::AsyncCustomAuthClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # GET request with custom auth scheme
    #
    # @param request_options [SeedCustomAuthClient::RequestOptions]
    # @return [Boolean]
    def get_with_custom_auth(request_options: nil)
      Async do
        response = @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["X-API-KEY"] = request_options.custom_auth_scheme unless request_options&.custom_auth_scheme.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/custom-auth"
        end
        parsed_json = JSON.parse(response.body)
        parsed_json
      end
    end

    # POST request with custom auth scheme
    #
    # @param request [Object]
    # @param request_options [SeedCustomAuthClient::RequestOptions]
    # @return [Boolean]
    def post_with_custom_auth(request: nil, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["X-API-KEY"] = request_options.custom_auth_scheme unless request_options&.custom_auth_scheme.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/custom-auth"
        end
        parsed_json = JSON.parse(response.body)
        parsed_json
      end
    end
  end
end
