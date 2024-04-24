# frozen_string_literal: true

require_relative "types_export"
require_relative "requests"
require_relative "seed_basic_auth_environment_variables_client/basic_auth/client"

module SeedBasicAuthEnvironmentVariablesClient
  class Client
    # @return [SeedBasicAuthEnvironmentVariablesClient::BasicAuthClient]
    attr_reader :basic_auth

    # @param base_url [String]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @return [SeedBasicAuthEnvironmentVariablesClient::Client]
    def initialize(base_url: nil, max_retries: nil, timeout_in_seconds: nil, username: nil, password: nil)
      @request_client = SeedBasicAuthEnvironmentVariablesClient::RequestClient.new(
        base_url: base_url,
        max_retries: max_retries,
        timeout_in_seconds: timeout_in_seconds,
        username: username,
        password: password
      )
      @basic_auth = SeedBasicAuthEnvironmentVariablesClient::BasicAuthClient.new(request_client: @request_client)
    end
  end

  class AsyncClient
    # @return [SeedBasicAuthEnvironmentVariablesClient::AsyncBasicAuthClient]
    attr_reader :basic_auth

    # @param base_url [String]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param username [String]
    # @param password [String]
    # @return [SeedBasicAuthEnvironmentVariablesClient::AsyncClient]
    def initialize(base_url: nil, max_retries: nil, timeout_in_seconds: nil, username: nil, password: nil)
      @async_request_client = SeedBasicAuthEnvironmentVariablesClient::AsyncRequestClient.new(
        base_url: base_url,
        max_retries: max_retries,
        timeout_in_seconds: timeout_in_seconds,
        username: username,
        password: password
      )
      @basic_auth = SeedBasicAuthEnvironmentVariablesClient::AsyncBasicAuthClient.new(request_client: @async_request_client)
    end
  end
end
