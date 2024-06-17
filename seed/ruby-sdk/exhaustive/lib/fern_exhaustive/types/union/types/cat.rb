# frozen_string_literal: true

require "ostruct"
require "json"

module SeedExhaustiveClient
  module Types
    class Union
      class Cat
        # @return [String]
        attr_reader :name
        # @return [Boolean]
        attr_reader :likes_to_meow
        # @return [OpenStruct] Additional properties unmapped to the current class definition
        attr_reader :additional_properties
        # @return [Object]
        attr_reader :_field_set
        protected :_field_set

        OMIT = Object.new

        # @param name [String]
        # @param likes_to_meow [Boolean]
        # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
        # @return [Types::Cat]
        def initialize(name:, likes_to_meow:, additional_properties: nil)
          @name = name
          @likes_to_meow = likes_to_meow
          @additional_properties = additional_properties
          @_field_set = { "name": name, "likesToMeow": likes_to_meow }
        end

        # Deserialize a JSON object to an instance of Cat
        #
        # @param json_object [String]
        # @return [Types::Cat]
        def self.from_json(json_object:)
          struct = JSON.parse(json_object, object_class: OpenStruct)
          name = struct["name"]
          likes_to_meow = struct["likesToMeow"]
          new(
            name: name,
            likes_to_meow: likes_to_meow,
            additional_properties: struct
          )
        end

        # Serialize an instance of Cat to a JSON object
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
          obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
          obj.likes_to_meow.is_a?(Boolean) != false || raise("Passed value for field obj.likes_to_meow is not the expected type, validation failed.")
        end
      end
    end
  end
end
