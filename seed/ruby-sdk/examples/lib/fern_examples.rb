# frozen_string_literal: true

require_relative "environment"
require_relative "types_export"
require_relative "requests"
require_relative "fern_examples/file/client"
require_relative "fern_examples/health/client"
require_relative "fern_examples/service/client"

module SeedExamplesClient
  class Client
    attr_reader :file, :health, :service

    # @param base_url [String]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param token [String]
    # @return [SeedExamplesClient::Client]
    def initialize(token:, base_url: nil, max_retries: nil, timeout_in_seconds: nil)
      @request_client = SeedExamplesClient::RequestClient.new(base_url: base_url, max_retries: max_retries,
                                                              timeout_in_seconds: timeout_in_seconds, token: token)
      @file = SeedExamplesClient::File::Client.new(request_client: @request_client)
      @health = SeedExamplesClient::Health::Client.new(request_client: @request_client)
      @service = SeedExamplesClient::ServiceClient.new(request_client: @request_client)
    end

    # @param request [String]
    # @param request_options [SeedExamplesClient::RequestOptions]
    # @return [String]
    def echo(request:, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/"
      end
      response.body
    end
  end

  class AsyncClient
    attr_reader :file, :health, :service

    # @param base_url [String]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param token [String]
    # @return [SeedExamplesClient::AsyncClient]
    def initialize(token:, base_url: nil, max_retries: nil, timeout_in_seconds: nil)
      @async_request_client = SeedExamplesClient::AsyncRequestClient.new(base_url: base_url, max_retries: max_retries,
                                                                         timeout_in_seconds: timeout_in_seconds, token: token)
      @file = SeedExamplesClient::File::AsyncClient.new(request_client: @async_request_client)
      @health = SeedExamplesClient::Health::AsyncClient.new(request_client: @async_request_client)
      @service = SeedExamplesClient::AsyncServiceClient.new(request_client: @async_request_client)
    end

    # @param request [String]
    # @param request_options [SeedExamplesClient::RequestOptions]
    # @return [String]
    def echo(request:, request_options: nil)
      response = @async_request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
        req.url "#{@async_request_client.get_url(request_options: request_options)}/"
      end
      response.body
    end
  end
end
