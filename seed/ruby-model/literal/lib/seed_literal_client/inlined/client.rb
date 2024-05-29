# frozen_string_literal: true

require_relative "../../requests"
require_relative "../types/send_response"
require "async"

module SeedLiteralClient
  class InlinedClient
    # @return [SeedLiteralClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedLiteralClient::RequestClient]
    # @return [SeedLiteralClient::InlinedClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param prompt [String]
    # @param query [String]
    # @param temperature [Float]
    # @param stream [Boolean]
    # @param request_options [SeedLiteralClient::RequestOptions]
    # @return [SeedLiteralClient::SendResponse]
    # @example
    #  literal = SeedLiteralClient::Client.new(
    #    base_url: "https://api.example.com",
    #    version: "Version",
    #    audit_logging: "AuditLogging"
    #  )
    #  literal.inlined.send(
    #    prompt: "You are a helpful assistant",
    #    query: "What is the weather today",
    #    temperature: 10.1,
    #    stream: false
    #  )
    def send(prompt:, query:, stream:, temperature: nil, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["X-API-Version"] = request_options.version unless request_options&.version.nil?
        unless request_options&.audit_logging.nil?
          req.headers["X-API-Enable-Audit-Logging"] =
            request_options.audit_logging
        end
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = {
          **(request_options&.additional_body_parameters || {}),
          prompt: prompt,
          query: query,
          temperature: temperature,
          stream: stream
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/inlined"
      end
      SeedLiteralClient::SendResponse.from_json(json_object: response.body)
    end
  end

  class AsyncInlinedClient
    # @return [SeedLiteralClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedLiteralClient::AsyncRequestClient]
    # @return [SeedLiteralClient::AsyncInlinedClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param prompt [String]
    # @param query [String]
    # @param temperature [Float]
    # @param stream [Boolean]
    # @param request_options [SeedLiteralClient::RequestOptions]
    # @return [SeedLiteralClient::SendResponse]
    # @example
    #  literal = SeedLiteralClient::Client.new(
    #    base_url: "https://api.example.com",
    #    version: "Version",
    #    audit_logging: "AuditLogging"
    #  )
    #  literal.inlined.send(
    #    prompt: "You are a helpful assistant",
    #    query: "What is the weather today",
    #    temperature: 10.1,
    #    stream: false
    #  )
    def send(prompt:, query:, stream:, temperature: nil, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["X-API-Version"] = request_options.version unless request_options&.version.nil?
          unless request_options&.audit_logging.nil?
            req.headers["X-API-Enable-Audit-Logging"] =
              request_options.audit_logging
          end
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = {
            **(request_options&.additional_body_parameters || {}),
            prompt: prompt,
            query: query,
            temperature: temperature,
            stream: stream
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/inlined"
        end
        SeedLiteralClient::SendResponse.from_json(json_object: response.body)
      end
    end
  end
end
