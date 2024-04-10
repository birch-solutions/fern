# frozen_string_literal: true

require "ostruct"
require "json"

module SeedResponsePropertyClient
  class Service
    class WithDocs
      # @return [String]
      attr_reader :docs
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param docs [String]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedResponsePropertyClient::Service::WithDocs]
      def initialize(docs:, additional_properties: nil)
        @docs = docs
        @additional_properties = additional_properties
        @_field_set = { "docs": docs }
      end

      # Deserialize a JSON object to an instance of WithDocs
      #
      # @param json_object [String]
      # @return [SeedResponsePropertyClient::Service::WithDocs]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        docs = struct["docs"]
        new(docs: docs, additional_properties: struct)
      end

      # Serialize an instance of WithDocs to a JSON object
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
        obj.docs.is_a?(String) != false || raise("Passed value for field obj.docs is not the expected type, validation failed.")
      end
    end
  end
end
