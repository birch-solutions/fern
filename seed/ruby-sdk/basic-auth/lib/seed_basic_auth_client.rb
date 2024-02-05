# frozen_string_literal: true

require_relative "types_export"
require_relative "requests"
require "faraday"
require "faraday/retry"
require_relative "seed_basic_auth_client/basic_auth/client"
require "async/http/faraday"

module SeedBasicAuthClient
  class Client
    attr_reader :basic_auth

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @return [Client]
    def initialize(max_retries: nil, timeout_in_seconds: nil, username: nil, password: nil)
      @request_client = RequestClient.new(max_retries: max_retries, timeout_in_seconds: timeout_in_seconds,
                                          username: username, password: password)
      @basic_auth = BasicAuthClient.new(request_client: @request_client)
    end
  end

  class AsyncClient
    attr_reader :basic_auth

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @return [AsyncClient]
    def initialize(max_retries: nil, timeout_in_seconds: nil, username: nil, password: nil)
      @async_request_client = AsyncRequestClient.new(max_retries: max_retries, timeout_in_seconds: timeout_in_seconds,
                                                     username: username, password: password)
      @basic_auth = AsyncBasicAuthClient.new(request_client: @async_request_client)
    end
  end
end
