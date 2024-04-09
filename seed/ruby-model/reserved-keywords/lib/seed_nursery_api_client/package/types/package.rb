# frozen_string_literal: true

require "ostruct"
require "json"

module SeedNurseryApiClient
  class Package
    class Package
      attr_reader :name, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param name [String]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedNurseryApiClient::Package::Package]
      def initialize(name:, additional_properties: nil)
        # @type [String]
        @name = name
        @_field_set = { "name": @name }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of Package
      #
      # @param json_object [String]
      # @return [SeedNurseryApiClient::Package::Package]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        name = struct["name"]
        new(name: name, additional_properties: struct)
      end

      # Serialize an instance of Package to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
      end
    end
  end
end
