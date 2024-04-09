# frozen_string_literal: true

require_relative "types_export"
require_relative "requests"
require_relative "fern_package_yml/service/client"

module SeedPackageYmlClient
  class Client
    attr_reader :service

    # @param base_url [String]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @return [SeedPackageYmlClient::Client]
    def initialize(base_url: nil, max_retries: nil, timeout_in_seconds: nil)
      @request_client = SeedPackageYmlClient::RequestClient.new(base_url: base_url, max_retries: max_retries,
                                                                timeout_in_seconds: timeout_in_seconds)
      @service = SeedPackageYmlClient::ServiceClient.new(request_client: @request_client)
    end

    # @param id [String]
    # @param request [String]
    # @param request_options [SeedPackageYmlClient::RequestOptions]
    # @return [String]
    def echo(id:, request:, request_options: nil)
      response = @request_client.conn.post("/#{id}") do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/#{id}"
      end
      response.body
    end
  end

  class AsyncClient
    attr_reader :service

    # @param base_url [String]
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @return [SeedPackageYmlClient::AsyncClient]
    def initialize(base_url: nil, max_retries: nil, timeout_in_seconds: nil)
      @async_request_client = SeedPackageYmlClient::AsyncRequestClient.new(base_url: base_url,
                                                                           max_retries: max_retries, timeout_in_seconds: timeout_in_seconds)
      @service = SeedPackageYmlClient::AsyncServiceClient.new(request_client: @async_request_client)
    end

    # @param id [String]
    # @param request [String]
    # @param request_options [SeedPackageYmlClient::RequestOptions]
    # @return [String]
    def echo(id:, request:, request_options: nil)
      response = @async_request_client.conn.post("/#{id}") do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
        req.url "#{@async_request_client.get_url(request_options: request_options)}/#{id}"
      end
      response.body
    end
  end
end
