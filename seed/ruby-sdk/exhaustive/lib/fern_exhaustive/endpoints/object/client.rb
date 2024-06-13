# frozen_string_literal: true

require_relative "../../../requests"
require_relative "../../types/object/types/object_with_optional_field"
require_relative "../../types/object/types/object_with_required_field"
require_relative "../../types/object/types/object_with_map_of_map"
require_relative "../../types/object/types/nested_object_with_optional_field"
require_relative "../../types/object/types/nested_object_with_required_field"
require "async"

module SeedExhaustiveClient
  module Endpoints
    class ObjectClient
      # @return [SeedExhaustiveClient::RequestClient]
      attr_reader :request_client

      # @param request_client [SeedExhaustiveClient::RequestClient]
      # @return [SeedExhaustiveClient::Endpoints::ObjectClient]
      def initialize(request_client:)
        @request_client = request_client
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithOptionalField, as a Hash
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
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::ObjectWithOptionalField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_with_optional_field(request: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } })
      def get_and_return_with_optional_field(request:, request_options: nil)
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-with-optional-field"
        end
        SeedExhaustiveClient::Types::Object::ObjectWithOptionalField.from_json(json_object: response.body)
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithRequiredField, as a Hash
      #   * :string (String)
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::ObjectWithRequiredField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_with_required_field(request: { string: "string" })
      def get_and_return_with_required_field(request:, request_options: nil)
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-with-required-field"
        end
        SeedExhaustiveClient::Types::Object::ObjectWithRequiredField.from_json(json_object: response.body)
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithMapOfMap, as a Hash
      #   * :map (Hash{String => Hash})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::ObjectWithMapOfMap]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_with_map_of_map(request: { map: { "string": { "string": "string" } } })
      def get_and_return_with_map_of_map(request:, request_options: nil)
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-with-map-of-map"
        end
        SeedExhaustiveClient::Types::Object::ObjectWithMapOfMap.from_json(json_object: response.body)
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::NestedObjectWithOptionalField, as a Hash
      #   * :string (String)
      #   * :nested_object (Hash)
      #     * :string (String)
      #     * :integer (Integer)
      #     * :long (Long)
      #     * :double (Float)
      #     * :bool (Boolean)
      #     * :datetime (DateTime)
      #     * :date (Date)
      #     * :uuid (String)
      #     * :base_64 (String)
      #     * :list (Array<String>)
      #     * :set (Set<String>)
      #     * :map (Hash{Integer => String})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::NestedObjectWithOptionalField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_nested_with_optional_field(request: { string: "string", nested_object: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } } })
      def get_and_return_nested_with_optional_field(request:, request_options: nil)
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-nested-with-optional-field"
        end
        SeedExhaustiveClient::Types::Object::NestedObjectWithOptionalField.from_json(json_object: response.body)
      end

      # @param string [String]
      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField, as a Hash
      #   * :string (String)
      #   * :nested_object (Hash)
      #     * :string (String)
      #     * :integer (Integer)
      #     * :long (Long)
      #     * :double (Float)
      #     * :bool (Boolean)
      #     * :datetime (DateTime)
      #     * :date (Date)
      #     * :uuid (String)
      #     * :base_64 (String)
      #     * :list (Array<String>)
      #     * :set (Set<String>)
      #     * :map (Hash{Integer => String})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_nested_with_required_field(string: "string", request: { string: "string", nested_object: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } } })
      def get_and_return_nested_with_required_field(string:, request:, request_options: nil)
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-nested-with-required-field/#{string}"
        end
        SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField.from_json(json_object: response.body)
      end

      # @param request [Array<Hash>] Request of type Array<SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField>, as a Hash
      #   * :string (String)
      #   * :nested_object (Hash)
      #     * :string (String)
      #     * :integer (Integer)
      #     * :long (Long)
      #     * :double (Float)
      #     * :bool (Boolean)
      #     * :datetime (DateTime)
      #     * :date (Date)
      #     * :uuid (String)
      #     * :base_64 (String)
      #     * :list (Array<String>)
      #     * :set (Set<String>)
      #     * :map (Hash{Integer => String})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_nested_with_required_field_as_list(request: [{ string: "string", nested_object: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } } }])
      def get_and_return_nested_with_required_field_as_list(request:, request_options: nil)
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-nested-with-required-field-list"
        end
        SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField.from_json(json_object: response.body)
      end
    end

    class AsyncObjectClient
      # @return [SeedExhaustiveClient::AsyncRequestClient]
      attr_reader :request_client

      # @param request_client [SeedExhaustiveClient::AsyncRequestClient]
      # @return [SeedExhaustiveClient::Endpoints::AsyncObjectClient]
      def initialize(request_client:)
        @request_client = request_client
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithOptionalField, as a Hash
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
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::ObjectWithOptionalField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_with_optional_field(request: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } })
      def get_and_return_with_optional_field(request:, request_options: nil)
        Async do
          response = @request_client.conn.post do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = {
          **(req.headers || {}),
          **@request_client.get_headers,
          **(request_options&.additional_headers || {})
            }.compact
            req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-with-optional-field"
          end
          SeedExhaustiveClient::Types::Object::ObjectWithOptionalField.from_json(json_object: response.body)
        end
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithRequiredField, as a Hash
      #   * :string (String)
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::ObjectWithRequiredField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_with_required_field(request: { string: "string" })
      def get_and_return_with_required_field(request:, request_options: nil)
        Async do
          response = @request_client.conn.post do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = {
          **(req.headers || {}),
          **@request_client.get_headers,
          **(request_options&.additional_headers || {})
            }.compact
            req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-with-required-field"
          end
          SeedExhaustiveClient::Types::Object::ObjectWithRequiredField.from_json(json_object: response.body)
        end
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::ObjectWithMapOfMap, as a Hash
      #   * :map (Hash{String => Hash})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::ObjectWithMapOfMap]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_with_map_of_map(request: { map: { "string": { "string": "string" } } })
      def get_and_return_with_map_of_map(request:, request_options: nil)
        Async do
          response = @request_client.conn.post do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = {
          **(req.headers || {}),
          **@request_client.get_headers,
          **(request_options&.additional_headers || {})
            }.compact
            req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-with-map-of-map"
          end
          SeedExhaustiveClient::Types::Object::ObjectWithMapOfMap.from_json(json_object: response.body)
        end
      end

      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::NestedObjectWithOptionalField, as a Hash
      #   * :string (String)
      #   * :nested_object (Hash)
      #     * :string (String)
      #     * :integer (Integer)
      #     * :long (Long)
      #     * :double (Float)
      #     * :bool (Boolean)
      #     * :datetime (DateTime)
      #     * :date (Date)
      #     * :uuid (String)
      #     * :base_64 (String)
      #     * :list (Array<String>)
      #     * :set (Set<String>)
      #     * :map (Hash{Integer => String})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::NestedObjectWithOptionalField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_nested_with_optional_field(request: { string: "string", nested_object: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } } })
      def get_and_return_nested_with_optional_field(request:, request_options: nil)
        Async do
          response = @request_client.conn.post do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = {
          **(req.headers || {}),
          **@request_client.get_headers,
          **(request_options&.additional_headers || {})
            }.compact
            req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-nested-with-optional-field"
          end
          SeedExhaustiveClient::Types::Object::NestedObjectWithOptionalField.from_json(json_object: response.body)
        end
      end

      # @param string [String]
      # @param request [Hash] Request of type SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField, as a Hash
      #   * :string (String)
      #   * :nested_object (Hash)
      #     * :string (String)
      #     * :integer (Integer)
      #     * :long (Long)
      #     * :double (Float)
      #     * :bool (Boolean)
      #     * :datetime (DateTime)
      #     * :date (Date)
      #     * :uuid (String)
      #     * :base_64 (String)
      #     * :list (Array<String>)
      #     * :set (Set<String>)
      #     * :map (Hash{Integer => String})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_nested_with_required_field(string: "string", request: { string: "string", nested_object: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } } })
      def get_and_return_nested_with_required_field(string:, request:, request_options: nil)
        Async do
          response = @request_client.conn.post do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = {
          **(req.headers || {}),
          **@request_client.get_headers,
          **(request_options&.additional_headers || {})
            }.compact
            req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-nested-with-required-field/#{string}"
          end
          SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField.from_json(json_object: response.body)
        end
      end

      # @param request [Array<Hash>] Request of type Array<SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField>, as a Hash
      #   * :string (String)
      #   * :nested_object (Hash)
      #     * :string (String)
      #     * :integer (Integer)
      #     * :long (Long)
      #     * :double (Float)
      #     * :bool (Boolean)
      #     * :datetime (DateTime)
      #     * :date (Date)
      #     * :uuid (String)
      #     * :base_64 (String)
      #     * :list (Array<String>)
      #     * :set (Set<String>)
      #     * :map (Hash{Integer => String})
      # @param request_options [SeedExhaustiveClient::RequestOptions]
      # @return [SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField]
      # @example
      #  exhaustive = SeedExhaustiveClient::Client.new(base_url: "https://api.example.com", token: "YOUR_AUTH_TOKEN")
      #  exhaustive.endpoints.object.get_and_return_nested_with_required_field_as_list(request: [{ string: "string", nested_object: { string: "string", integer: 1, long: 1000000, double: 1.1, bool: true, datetime: DateTime.parse(2024-01-15T09:30:00.000Z), date: DateTime.parse(2023-01-15), uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", base_64: "SGVsbG8gd29ybGQh", list: ["string"], set: Set["string"], map: { 1: "string" } } }])
      def get_and_return_nested_with_required_field_as_list(request:, request_options: nil)
        Async do
          response = @request_client.conn.post do |req|
            req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
            req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
            req.headers = {
          **(req.headers || {}),
          **@request_client.get_headers,
          **(request_options&.additional_headers || {})
            }.compact
            req.body = { **(request || {}), **(request_options&.additional_body_parameters || {}) }.compact
            req.url "#{@request_client.get_url(request_options: request_options)}/object/get-and-return-nested-with-required-field-list"
          end
          SeedExhaustiveClient::Types::Object::NestedObjectWithRequiredField.from_json(json_object: response.body)
        end
      end
    end
  end
end
