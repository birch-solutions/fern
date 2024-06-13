# frozen_string_literal: true

require_relative "../../requests"
require "async"

module SeedPlainTextClient
  class ServiceClient
    # @return [SeedPlainTextClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedPlainTextClient::RequestClient]
    # @return [SeedPlainTextClient::ServiceClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param request_options [SeedPlainTextClient::RequestOptions]
    # @return [String]
    # @example
    #  plain_text = SeedPlainTextClient::Client.new(base_url: "https://api.example.com")
    #  plain_text.service.get_text
    def get_text(request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = {
      **(req.headers || {}),
      **@request_client.get_headers,
      **(request_options&.additional_headers || {})
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/text"
      end
      response.body
    end
  end

  class AsyncServiceClient
    # @return [SeedPlainTextClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedPlainTextClient::AsyncRequestClient]
    # @return [SeedPlainTextClient::AsyncServiceClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param request_options [SeedPlainTextClient::RequestOptions]
    # @return [String]
    # @example
    #  plain_text = SeedPlainTextClient::Client.new(base_url: "https://api.example.com")
    #  plain_text.service.get_text
    def get_text(request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/text"
        end
        response.body
      end
    end
  end
end
