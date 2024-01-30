# frozen_string_literal: true

require "faraday"
require "async/http/faraday"

module SeedBasicAuthClient
  class RequestClient
    attr_reader :headers, :base_url, :conn

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @return [RequestClient]
    def initialize(max_retries: nil, timeout_in_seconds: nil, username: nil, password: nil)
      @headers = {
        "X-Fern-Language": "Ruby",
        "X-Fern-SDK-Name": "SeedBasicAuthClient",
        "Authorization": %(Basic #{Base64.encode64("#{username}:#{password}")})
      }
      @conn = Faraday.new(headers: @headers) do |faraday|
        faraday.request :json
        faraday.request :retry, { max: max_retries }
        faraday.response :raise_error, include_request: true
        faraday.options.timeout = timeout_in_seconds
      end
    end
  end

  class AsyncRequestClient
    attr_reader :headers, :base_url, :conn

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @return [AsyncRequestClient]
    def initialize(max_retries: nil, timeout_in_seconds: nil, username: nil, password: nil)
      @headers = {
        "X-Fern-Language": "Ruby",
        "X-Fern-SDK-Name": "SeedBasicAuthClient",
        "Authorization": %(Basic #{Base64.encode64("#{username}:#{password}")})
      }
      @conn = Faraday.new(headers: @headers) do |faraday|
        faraday.request :json
        faraday.request :retry, { max: max_retries }
        faraday.response :raise_error, include_request: true
        faraday.options.timeout = timeout_in_seconds
        faraday.adapter = :async_http
      end
    end
  end

  # Additional options for request-specific configuration when calling APIs via the SDK.
  class RequestOptions
    attr_reader :max_retries, :timeout_in_seconds, :username, :password, :additional_headers,
                :additional_query_parameters, :additional_body_parameters

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @param additional_headers [Hash{String => Object}]
    # @param additional_query_parameters [Hash{String => Object}]
    # @param additional_body_parameters [Hash{String => Object}]
    # @return [RequestOptions]
    def initialize(username:, password:, max_retries: nil, timeout_in_seconds: nil, additional_headers: nil,
                   additional_query_parameters: nil, additional_body_parameters: nil)
      # @type [Long] The number of times to retry a failed request, defaults to 2.
      @max_retries = max_retries
      # @type [Long]
      @timeout_in_seconds = timeout_in_seconds
      # @type [String]
      @username = username
      # @type [String]
      @password = password
      # @type [Hash{String => Object}]
      @additional_headers = additional_headers
      # @type [Hash{String => Object}]
      @additional_query_parameters = additional_query_parameters
      # @type [Hash{String => Object}]
      @additional_body_parameters = additional_body_parameters
    end
  end
end
