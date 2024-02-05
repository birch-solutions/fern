# frozen_string_literal: true

require_relative "../../requests"
require_relative "types/create_options_response"
require_relative "types/options"
require_relative "types/undiscriminated_options"
require "async"

module SeedLiteralClient
  class LiteralClient
    attr_reader :request_client

    # @param request_client [RequestClient]
    # @return [LiteralClient]
    def initialize(request_client:)
      # @type [RequestClient]
      @request_client = request_client
    end

    # @param values [Hash{String => String}]
    # @param request_options [RequestOptions]
    # @return [Literal::CreateOptionsResponse]
    def create_options(values:, request_options: nil)
      response = @request_client.conn.post("/options") do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request_options&.additional_body_parameters || {}), values: values }.compact
      end
      Literal::CreateOptionsResponse.from_json(json_object: response.body)
    end

    # @param dry_run [Boolean]
    # @param request_options [RequestOptions]
    # @return [Literal::Options]
    def get_options(dry_run:, request_options: nil)
      response = @request_client.conn.post("/options") do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request_options&.additional_body_parameters || {}), dryRun: dry_run }.compact
      end
      Literal::Options.from_json(json_object: response.body)
    end

    # @param dry_run [Boolean]
    # @param request_options [RequestOptions]
    # @return [Literal::UndiscriminatedOptions]
    def get_undiscriminated_options(dry_run:, request_options: nil)
      response = @request_client.conn.post("/options") do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request_options&.additional_body_parameters || {}), dryRun: dry_run }.compact
      end
      Literal::UndiscriminatedOptions.from_json(json_object: response.body)
    end
  end

  class AsyncLiteralClient
    attr_reader :request_client

    # @param request_client [AsyncRequestClient]
    # @return [AsyncLiteralClient]
    def initialize(request_client:)
      # @type [AsyncRequestClient]
      @request_client = request_client
    end

    # @param values [Hash{String => String}]
    # @param request_options [RequestOptions]
    # @return [Literal::CreateOptionsResponse]
    def create_options(values:, request_options: nil)
      Async do
        response = @request_client.conn.post("/options") do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = { **(request_options&.additional_body_parameters || {}), values: values }.compact
        end
        Literal::CreateOptionsResponse.from_json(json_object: response.body)
      end
    end

    # @param dry_run [Boolean]
    # @param request_options [RequestOptions]
    # @return [Literal::Options]
    def get_options(dry_run:, request_options: nil)
      Async do
        response = @request_client.conn.post("/options") do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = { **(request_options&.additional_body_parameters || {}), dryRun: dry_run }.compact
        end
        Literal::Options.from_json(json_object: response.body)
      end
    end

    # @param dry_run [Boolean]
    # @param request_options [RequestOptions]
    # @return [Literal::UndiscriminatedOptions]
    def get_undiscriminated_options(dry_run:, request_options: nil)
      Async do
        response = @request_client.conn.post("/options") do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = { **(request_options&.additional_body_parameters || {}), dryRun: dry_run }.compact
        end
        Literal::UndiscriminatedOptions.from_json(json_object: response.body)
      end
    end
  end
end
