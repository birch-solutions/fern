# frozen_string_literal: true

require_relative "environment"
require "faraday"
require "faraday/retry"
require "async/http/faraday"

module SeedTraceClient
  class RequestClient
    attr_reader :headers, :base_url, :conn

    # @param environment [Environment]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param token [String]
    # @param x_random_header [String]
    # @return [RequestClient]
    def initialize(token:, environment: Environment::PROD, max_retries: nil, timeout_in_seconds: nil,
                   x_random_header: nil)
      @default_environment = environment
      @base_url = environment
      @headers = {
        "X-Fern-Language": "Ruby",
        "X-Fern-SDK-Name": "fern_trace",
        "X-Fern-SDK-Version": "0.0.1",
        "Authorization": "Bearer #{token}"
      }
      @headers["X-Random-Header"] = x_random_header unless x_random_header.nil?
      @conn = Faraday.new(@base_url, headers: @headers) do |faraday|
        faraday.request :json
        faraday.response :raise_error, include_request: true
        faraday.request :retry, { max: max_retries } unless max_retries.nil?
        faraday.options.timeout = timeout_in_seconds unless timeout_in_seconds.nil?
      end
    end
  end

  class AsyncRequestClient
    attr_reader :headers, :base_url, :conn

    # @param environment [Environment]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param token [String]
    # @param x_random_header [String]
    # @return [AsyncRequestClient]
    def initialize(token:, environment: Environment::PROD, max_retries: nil, timeout_in_seconds: nil,
                   x_random_header: nil)
      @default_environment = environment
      @base_url = environment
      @headers = {
        "X-Fern-Language": "Ruby",
        "X-Fern-SDK-Name": "fern_trace",
        "X-Fern-SDK-Version": "0.0.1",
        "Authorization": "Bearer #{token}"
      }
      @headers["X-Random-Header"] = x_random_header unless x_random_header.nil?
      @conn = Faraday.new(@base_url, headers: @headers) do |faraday|
        faraday.request :json
        faraday.response :raise_error, include_request: true
        faraday.adapter :async_http
        faraday.request :retry, { max: max_retries } unless max_retries.nil?
        faraday.options.timeout = timeout_in_seconds unless timeout_in_seconds.nil?
      end
    end
  end

  # Additional options for request-specific configuration when calling APIs via the SDK.
  class RequestOptions
    attr_reader :token, :x_random_header, :additional_headers, :additional_query_parameters,
                :additional_body_parameters, :timeout_in_seconds

    # @param token [String]
    # @param x_random_header [String]
    # @param additional_headers [Hash{String => Object}]
    # @param additional_query_parameters [Hash{String => Object}]
    # @param additional_body_parameters [Hash{String => Object}]
    # @param timeout_in_seconds [Long]
    # @return [RequestOptions]
    def initialize(token: nil, x_random_header: nil, additional_headers: nil, additional_query_parameters: nil,
                   additional_body_parameters: nil, timeout_in_seconds: nil)
      # @type [String]
      @token = token
      # @type [String]
      @x_random_header = x_random_header
      # @type [Hash{String => Object}]
      @additional_headers = additional_headers
      # @type [Hash{String => Object}]
      @additional_query_parameters = additional_query_parameters
      # @type [Hash{String => Object}]
      @additional_body_parameters = additional_body_parameters
      # @type [Long]
      @timeout_in_seconds = timeout_in_seconds
    end
  end

  # Additional options for request-specific configuration when calling APIs via the SDK.
  class IdempotencyRequestOptions
    attr_reader :token, :x_random_header, :additional_headers, :additional_query_parameters,
                :additional_body_parameters, :timeout_in_seconds

    # @param token [String]
    # @param x_random_header [String]
    # @param additional_headers [Hash{String => Object}]
    # @param additional_query_parameters [Hash{String => Object}]
    # @param additional_body_parameters [Hash{String => Object}]
    # @param timeout_in_seconds [Long]
    # @return [IdempotencyRequestOptions]
    def initialize(token: nil, x_random_header: nil, additional_headers: nil, additional_query_parameters: nil,
                   additional_body_parameters: nil, timeout_in_seconds: nil)
      # @type [String]
      @token = token
      # @type [String]
      @x_random_header = x_random_header
      # @type [Hash{String => Object}]
      @additional_headers = additional_headers
      # @type [Hash{String => Object}]
      @additional_query_parameters = additional_query_parameters
      # @type [Hash{String => Object}]
      @additional_body_parameters = additional_body_parameters
      # @type [Long]
      @timeout_in_seconds = timeout_in_seconds
    end
  end
end
