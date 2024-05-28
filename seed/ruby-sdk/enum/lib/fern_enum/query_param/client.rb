# frozen_string_literal: true

require_relative "../../requests"
require_relative "../types/operand"
require "async"

module SeedEnumClient
  class QueryParamClient
    # @return [SeedEnumClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedEnumClient::RequestClient]
    # @return [SeedEnumClient::QueryParamClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param operand [SeedEnumClient::Operand]
    # @param maybe_operand [SeedEnumClient::Operand]
    # @param operand_or_color [String]
    # @param maybe_operand_or_color [String]
    # @param request_options [SeedEnumClient::RequestOptions]
    # @return [Void]
    # @example
    #  enum = SeedEnumClient::Client.new(base_url: "https://api.example.com")
    #  enum.query_param.send(operand: GREATER_THAN)
    def send(operand:, maybe_operand: nil, operand_or_color: nil, maybe_operand_or_color: nil, request_options: nil)
      @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.params = {
          **(request_options&.additional_query_parameters || {}),
          "operand": operand,
          "maybeOperand": maybe_operand,
          "operandOrColor": operand_or_color,
          "maybeOperandOrColor": maybe_operand_or_color
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/query"
      end
    end

    # @param operand [SeedEnumClient::Operand]
    # @param maybe_operand [SeedEnumClient::Operand]
    # @param operand_or_color [String]
    # @param maybe_operand_or_color [String]
    # @param request_options [SeedEnumClient::RequestOptions]
    # @return [Void]
    def send_list(operand:, maybe_operand: nil, operand_or_color: nil, maybe_operand_or_color: nil,
                  request_options: nil)
      @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.params = {
          **(request_options&.additional_query_parameters || {}),
          "operand": operand,
          "maybeOperand": maybe_operand,
          "operandOrColor": operand_or_color,
          "maybeOperandOrColor": maybe_operand_or_color
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/query-list"
      end
    end
  end

  class AsyncQueryParamClient
    # @return [SeedEnumClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedEnumClient::AsyncRequestClient]
    # @return [SeedEnumClient::AsyncQueryParamClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param operand [SeedEnumClient::Operand]
    # @param maybe_operand [SeedEnumClient::Operand]
    # @param operand_or_color [String]
    # @param maybe_operand_or_color [String]
    # @param request_options [SeedEnumClient::RequestOptions]
    # @return [Void]
    # @example
    #  enum = SeedEnumClient::Client.new(base_url: "https://api.example.com")
    #  enum.query_param.send(operand: GREATER_THAN)
    def send(operand:, maybe_operand: nil, operand_or_color: nil, maybe_operand_or_color: nil, request_options: nil)
      Async do
        @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.params = {
            **(request_options&.additional_query_parameters || {}),
            "operand": operand,
            "maybeOperand": maybe_operand,
            "operandOrColor": operand_or_color,
            "maybeOperandOrColor": maybe_operand_or_color
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/query"
        end
      end
    end

    # @param operand [SeedEnumClient::Operand]
    # @param maybe_operand [SeedEnumClient::Operand]
    # @param operand_or_color [String]
    # @param maybe_operand_or_color [String]
    # @param request_options [SeedEnumClient::RequestOptions]
    # @return [Void]
    def send_list(operand:, maybe_operand: nil, operand_or_color: nil, maybe_operand_or_color: nil,
                  request_options: nil)
      Async do
        @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.params = {
            **(request_options&.additional_query_parameters || {}),
            "operand": operand,
            "maybeOperand": maybe_operand,
            "operandOrColor": operand_or_color,
            "maybeOperandOrColor": maybe_operand_or_color
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/query-list"
        end
      end
    end
  end
end
