# frozen_string_literal: true

require_relative "../../requests"
require "async"

module SeedVariablesClient
  class ServiceClient
    attr_reader :request_client

    # @param request_client [SeedVariablesClient::RequestClient]
    # @return [SeedVariablesClient::ServiceClient]
    def initialize(request_client:)
      # @type [SeedVariablesClient::RequestClient]
      @request_client = request_client
    end

    # @param endpoint_param [String]
    # @param request_options [SeedVariablesClient::RequestOptions]
    # @return [Void]
    def post(endpoint_param:, request_options: nil)
      @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/#{endpoint_param}"
      end
    end
  end

  class AsyncServiceClient
    attr_reader :request_client

    # @param request_client [SeedVariablesClient::AsyncRequestClient]
    # @return [SeedVariablesClient::AsyncServiceClient]
    def initialize(request_client:)
      # @type [SeedVariablesClient::AsyncRequestClient]
      @request_client = request_client
    end

    # @param endpoint_param [String]
    # @param request_options [SeedVariablesClient::RequestOptions]
    # @return [Void]
    def post(endpoint_param:, request_options: nil)
      Async do
        @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/#{endpoint_param}"
        end
      end
    end
  end
end
