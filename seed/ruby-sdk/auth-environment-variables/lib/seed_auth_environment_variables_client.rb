# frozen_string_literal: true

require_relative "types_export"
require_relative "requests"
require_relative "seed_auth_environment_variables_client/service/client"

module SeedAuthEnvironmentVariablesClient
  class Client
    attr_reader :service

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param api_key [String]
    # @param x_another_header [String]
    # @return [Client]
    def initialize(api_key:, x_another_header:, max_retries: nil, timeout_in_seconds: nil)
      @request_client = RequestClient.new(max_retries: max_retries, timeout_in_seconds: timeout_in_seconds,
                                          api_key: api_key, x_another_header: x_another_header)
      @service = ServiceClient.new(request_client: @request_client)
    end
  end

  class AsyncClient
    attr_reader :service

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param api_key [String]
    # @param x_another_header [String]
    # @return [AsyncClient]
    def initialize(api_key:, x_another_header:, max_retries: nil, timeout_in_seconds: nil)
      @async_request_client = AsyncRequestClient.new(max_retries: max_retries, timeout_in_seconds: timeout_in_seconds,
                                                     api_key: api_key, x_another_header: x_another_header)
      @service = AsyncServiceClient.new(request_client: @async_request_client)
    end
  end
end
