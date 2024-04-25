# frozen_string_literal: true

require "ostruct"
require "json"

module SeedExamplesClient
  class Types
    class Response
      # @return [Object]
      attr_reader :response
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param response [Object]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedExamplesClient::Types::Response]
      def initialize(response:, additional_properties: nil)
        @response = response
        @additional_properties = additional_properties
        @_field_set = { "response": response }
      end

      # Deserialize a JSON object to an instance of Response
      #
      # @param json_object [String]
      # @return [SeedExamplesClient::Types::Response]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        response = struct["response"]
        new(response: response, additional_properties: struct)
      end

      # Serialize an instance of Response to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given
      #  hash and check each fields type against the current object's property
      #  definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.response.is_a?(Object) != false || raise("Passed value for field obj.response is not the expected type, validation failed.")
      end
    end
  end
end
