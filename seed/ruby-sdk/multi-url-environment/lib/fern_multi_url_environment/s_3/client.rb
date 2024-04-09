# frozen_string_literal: true

require_relative "../../requests"
require "async"

module SeedMultiUrlEnvironmentClient
  class S3Client
    attr_reader :request_client

    # @param request_client [SeedMultiUrlEnvironmentClient::RequestClient]
    # @return [SeedMultiUrlEnvironmentClient::S3Client]
    def initialize(request_client:)
      # @type [SeedMultiUrlEnvironmentClient::RequestClient]
      @request_client = request_client
    end

    # @param s_3_key [String]
    # @param request_options [SeedMultiUrlEnvironmentClient::RequestOptions]
    # @return [String]
    def get_presigned_url(s_3_key:, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request_options&.additional_body_parameters || {}), s3Key: s_3_key }.compact
        req.url "#{@request_client.get_url(environment: s3, request_options: request_options)}/s3/presigned-url"
      end
      response.body
    end
  end

  class AsyncS3Client
    attr_reader :request_client

    # @param request_client [SeedMultiUrlEnvironmentClient::AsyncRequestClient]
    # @return [SeedMultiUrlEnvironmentClient::AsyncS3Client]
    def initialize(request_client:)
      # @type [SeedMultiUrlEnvironmentClient::AsyncRequestClient]
      @request_client = request_client
    end

    # @param s_3_key [String]
    # @param request_options [SeedMultiUrlEnvironmentClient::RequestOptions]
    # @return [String]
    def get_presigned_url(s_3_key:, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = { **(request_options&.additional_body_parameters || {}), s3Key: s_3_key }.compact
          req.url "#{@request_client.get_url(environment: s3, request_options: request_options)}/s3/presigned-url"
        end
        response.body
      end
    end
  end
end
