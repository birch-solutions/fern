# frozen_string_literal: true

require "ostruct"
require "json"

module SeedUnionsClient
  class Union
    class Circle
      attr_reader :radius, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param radius [Float]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedUnionsClient::Union::Circle]
      def initialize(radius:, additional_properties: nil)
        # @type [Float]
        @radius = radius
        @_field_set = { "radius": @radius }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of Circle
      #
      # @param json_object [String]
      # @return [SeedUnionsClient::Union::Circle]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        radius = struct["radius"]
        new(radius: radius, additional_properties: struct)
      end

      # Serialize an instance of Circle to a JSON object
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
        obj.radius.is_a?(Float) != false || raise("Passed value for field obj.radius is not the expected type, validation failed.")
      end
    end
  end
end
