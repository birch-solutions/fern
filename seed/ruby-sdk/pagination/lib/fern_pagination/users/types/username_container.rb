# frozen_string_literal: true

require "ostruct"
require "json"

module SeedPaginationClient
  class Users
    class UsernameContainer
      # @return [Array<String>]
      attr_reader :results
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param results [Array<String>]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedPaginationClient::Users::UsernameContainer]
      def initialize(results:, additional_properties: nil)
        @results = results
        @additional_properties = additional_properties
        @_field_set = { "results": results }
      end

      # Deserialize a JSON object to an instance of UsernameContainer
      #
      # @param json_object [String]
      # @return [SeedPaginationClient::Users::UsernameContainer]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        results = parsed_json["results"]
        new(results: results, additional_properties: struct)
      end

      # Serialize an instance of UsernameContainer to a JSON object
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
        obj.results.is_a?(Array) != false || raise("Passed value for field obj.results is not the expected type, validation failed.")
      end
    end
  end
end
