# frozen_string_literal: true

require_relative "type_id"
require "ostruct"
require "json"

module SeedAliasClient
  # A simple type with just a name.
  class Type
    attr_reader :id, :name, :additional_properties, :_field_set
    protected :_field_set
    OMIT = Object.new
    # @param id [SeedAliasClient::TYPE_ID]
    # @param name [String]
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [SeedAliasClient::Type]
    def initialize(id:, name:, additional_properties: nil)
      # @type [SeedAliasClient::TYPE_ID]
      @id = id
      # @type [String]
      @name = name
      @_field_set = { "id": @id, "name": @name }.reject do |_k, v|
        v == OMIT
      end
    end

    # Deserialize a JSON object to an instance of Type
    #
    # @param json_object [String]
    # @return [SeedAliasClient::Type]
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      id = struct["id"]
      name = struct["name"]
      new(id: id, name: name, additional_properties: struct)
    end

    # Serialize an instance of Type to a JSON object
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
      obj.id.is_a?(String) != false || raise("Passed value for field obj.id is not the expected type, validation failed.")
      obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
    end
  end
end
