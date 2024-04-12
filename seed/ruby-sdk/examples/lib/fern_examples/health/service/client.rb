# frozen_string_literal: true

require_relative "../../../requests"
require "async"

module SeedExamplesClient
  module Health
    class ServiceClient
      # @return [SeedExamplesClient::RequestClient]
      attr_reader :request_client

      # @param request_client [SeedExamplesClient::RequestClient]
      # @return [SeedExamplesClient::Health::ServiceClient]
      def initialize(request_client:)
        @request_client = request_client
      end

      # This endpoint checks the health of a resource.
      #
      # @param id [String] The id to check
      # @param request_options [SeedExamplesClient::RequestOptions]
      # @return [Void]
      # @example
      #  examples = SeedExamplesClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  examples.health.check
      def check(id:, request_options: nil)
        @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/check/#{id}"
        end
      end

      # This endpoint checks the health of the service.
      #
      # @param request_options [SeedExamplesClient::RequestOptions]
      # @return [Boolean]
      # @example
      #  examples = SeedExamplesClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  examples.health.ping
      def ping(request_options: nil)
        response = @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/ping"
        end
        response.body
      end
    end

    class AsyncServiceClient
      # @return [SeedExamplesClient::AsyncRequestClient]
      attr_reader :request_client

      # @param request_client [SeedExamplesClient::AsyncRequestClient]
      # @return [SeedExamplesClient::Health::AsyncServiceClient]
      def initialize(request_client:)
        @request_client = request_client
      end

      # This endpoint checks the health of a resource.
      #
      # @param id [String] The id to check
      # @param request_options [SeedExamplesClient::RequestOptions]
      # @return [Void]
      # @example
      #  examples = SeedExamplesClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  examples.health.check
      def check(id:, request_options: nil)
        Async do
          @request_client.conn.get do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/check/#{id}"
          end
        end
      end

      # This endpoint checks the health of the service.
      #
      # @param request_options [SeedExamplesClient::RequestOptions]
      # @return [Boolean]
      # @example
      #  examples = SeedExamplesClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  examples.health.ping
      def ping(request_options: nil)
        Async do
          response = @request_client.conn.get do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/ping"
          end
          response.body
        end
      end
    end
  end
end
