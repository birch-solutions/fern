# frozen_string_literal: true

require_relative "../../requests"
require_relative "types/currency"
require "async"

module SeedIdempotencyHeadersClient
  class PaymentClient
    attr_reader :request_client

    # @param request_client [SeedIdempotencyHeadersClient::RequestClient]
    # @return [SeedIdempotencyHeadersClient::PaymentClient]
    def initialize(request_client:)
      # @type [SeedIdempotencyHeadersClient::RequestClient]
      @request_client = request_client
    end

    # @param amount [Integer]
    # @param currency [SeedIdempotencyHeadersClient::Payment::Currency]
    # @param request_options [SeedIdempotencyHeadersClient::IdempotencyRequestOptions]
    # @return [String]
    def create(amount:, currency:, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers["Idempotency-Key"] = request_options.idempotency_key unless request_options&.idempotency_key.nil?
        unless request_options&.idempotency_expiration.nil?
          req.headers["Idempotency-Expiration"] = request_options.idempotency_expiration
        end
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = { **(request_options&.additional_body_parameters || {}), amount: amount, currency: currency }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/payment"
      end
      response.body
    end

    # @param payment_id [String]
    # @param request_options [SeedIdempotencyHeadersClient::RequestOptions]
    # @return [Void]
    def delete(payment_id:, request_options: nil)
      @request_client.conn.delete do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/payment/#{payment_id}"
      end
    end
  end

  class AsyncPaymentClient
    attr_reader :request_client

    # @param request_client [SeedIdempotencyHeadersClient::AsyncRequestClient]
    # @return [SeedIdempotencyHeadersClient::AsyncPaymentClient]
    def initialize(request_client:)
      # @type [SeedIdempotencyHeadersClient::AsyncRequestClient]
      @request_client = request_client
    end

    # @param amount [Integer]
    # @param currency [SeedIdempotencyHeadersClient::Payment::Currency]
    # @param request_options [SeedIdempotencyHeadersClient::IdempotencyRequestOptions]
    # @return [String]
    def create(amount:, currency:, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers["Idempotency-Key"] = request_options.idempotency_key unless request_options&.idempotency_key.nil?
          unless request_options&.idempotency_expiration.nil?
            req.headers["Idempotency-Expiration"] = request_options.idempotency_expiration
          end
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = {
            **(request_options&.additional_body_parameters || {}),
            amount: amount,
            currency: currency
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/payment"
        end
        response.body
      end
    end

    # @param payment_id [String]
    # @param request_options [SeedIdempotencyHeadersClient::RequestOptions]
    # @return [Void]
    def delete(payment_id:, request_options: nil)
      Async do
        @request_client.conn.delete do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/payment/#{payment_id}"
        end
      end
    end
  end
end
