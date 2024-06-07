# frozen_string_literal: true

require_relative "../../requests"
require_relative "../types/object/types/object_with_optional_field"
require "async"

module SeedExhaustiveClient
  class InlinedRequestsClient
    # @return [SeedExhaustiveClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedExhaustiveClient::RequestClient]
    # @return [SeedExhaustiveClient::InlinedRequestsClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # POST with custom object in request body, response is an object
    #
    # @param string [String]
    # @param integer [Integer]
    # @param nested_object [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithOptionalField, as a Hash
    #   * :string (String)
    #   * :integer (Integer)
    #   * :long (Long)
    #   * :double (Float)
    #   * :bool (Boolean)
    #   * :datetime (DateTime)
    #   * :date (Date)
    #   * :uuid (String)
    #   * :base_64 (String)
    #   * :list (Array<String>)
    #   * :set (Set<String>)
    #   * :map (Hash{Integer => String})
    #   * :bigint (String)
    # @param request_options [SeedExhaustiveClient::RequestOptions]
    # @return [SeedExhaustiveClient::Types::Object::ObjectWithOptionalField]
    def post_with_object_bodyand_response(string:, integer:, nested_object:, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.body = {
          **(request_options&.additional_body_parameters || {}),
          string: string,
          integer: integer,
          NestedObject: nested_object
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/req-bodies/object"
      end
      SeedExhaustiveClient::Types::Object::ObjectWithOptionalField.from_json(json_object: response.body)
    end
  end

  class AsyncInlinedRequestsClient
    # @return [SeedExhaustiveClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedExhaustiveClient::AsyncRequestClient]
    # @return [SeedExhaustiveClient::AsyncInlinedRequestsClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # POST with custom object in request body, response is an object
    #
    # @param string [String]
    # @param integer [Integer]
    # @param nested_object [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithOptionalField, as a Hash
    #   * :string (String)
    #   * :integer (Integer)
    #   * :long (Long)
    #   * :double (Float)
    #   * :bool (Boolean)
    #   * :datetime (DateTime)
    #   * :date (Date)
    #   * :uuid (String)
    #   * :base_64 (String)
    #   * :list (Array<String>)
    #   * :set (Set<String>)
    #   * :map (Hash{Integer => String})
    #   * :bigint (String)
    # @param request_options [SeedExhaustiveClient::RequestOptions]
    # @return [SeedExhaustiveClient::Types::Object::ObjectWithOptionalField]
    def post_with_object_bodyand_response(string:, integer:, nested_object:, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.body = {
            **(request_options&.additional_body_parameters || {}),
            string: string,
            integer: integer,
            NestedObject: nested_object
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/req-bodies/object"
        end
        SeedExhaustiveClient::Types::Object::ObjectWithOptionalField.from_json(json_object: response.body)
      end
    end
  end
end
