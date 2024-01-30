# frozen_string_literal: true

require "async"

module SeedBearerTokenEnvironmentVariableClient
  module Service
    class ServiceClient
      attr_reader :request_client

      # @param request_client [RequestClient]
      # @return [ServiceClient]
      def initialize(request_client:)
        # @type [RequestClient]
        @request_client = request_client
      end

      # @param request_options [RequestOptions]
      # @return [String]
      def get_with_bearer_token(request_options: nil)
        @request_client.conn.get("/apiKey") do |req|
          req.headers["Authorization"] = @request_client.api_key unless @request_client.api_key.nil?
        end
      end
    end

    class AsyncServiceClient
      attr_reader :request_client

      # @param request_client [AsyncRequestClient]
      # @return [AsyncServiceClient]
      def initialize(request_client:)
        # @type [AsyncRequestClient]
        @request_client = request_client
      end

      # @param request_options [RequestOptions]
      # @return [String]
      def get_with_bearer_token(request_options: nil)
        Async.call do
          response = @request_client.conn.get("/apiKey") do |req|
            req.headers["Authorization"] = @request_client.api_key unless @request_client.api_key.nil?
          end
          response
        end
      end
    end
  end
end
