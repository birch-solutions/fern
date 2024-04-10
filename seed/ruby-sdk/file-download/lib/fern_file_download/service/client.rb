# frozen_string_literal: true

require_relative "../../requests"
require "async"

module SeedFileDownloadClient
  class ServiceClient
    attr_reader :request_client

    # @param request_client [SeedFileDownloadClient::RequestClient]
    # @return [SeedFileDownloadClient::ServiceClient]
    def initialize(request_client:)
      # @type [SeedFileDownloadClient::RequestClient]
      @request_client = request_client
    end

    # @param request_options [SeedFileDownloadClient::RequestOptions]
    # @yield on_data[chunk, overall_received_bytes, env] Leverage the Faraday on_data callback which will receive tuples of strings, the sum of characters received so far, and the response environment. The latter will allow access to the response status, headers and reason, as well as the request info.
    # @return [Void]
    def download_file(request_options: nil, &on_data)
      @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.options.on_data = on_data
        req.url "#{@request_client.get_url(request_options: request_options)}/"
      end
    end
  end

  class AsyncServiceClient
    attr_reader :request_client

    # @param request_client [SeedFileDownloadClient::AsyncRequestClient]
    # @return [SeedFileDownloadClient::AsyncServiceClient]
    def initialize(request_client:)
      # @type [SeedFileDownloadClient::AsyncRequestClient]
      @request_client = request_client
    end

    # @param request_options [SeedFileDownloadClient::RequestOptions]
    # @yield on_data[chunk, overall_received_bytes, env] Leverage the Faraday on_data callback which will receive tuples of strings, the sum of characters received so far, and the response environment. The latter will allow access to the response status, headers and reason, as well as the request info.
    # @return [Void]
    def download_file(request_options: nil, &on_data)
      Async do
        @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.options.on_data = on_data
          req.url "#{@request_client.get_url(request_options: request_options)}/"
        end
      end
    end
  end
end
