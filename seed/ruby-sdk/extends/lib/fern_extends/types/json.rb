# frozen_string_literal: true

require "ostruct"
require "json"

module SeedExtendsClient
  class Json
    attr_reader :raw, :docs, :additional_properties, :_field_set
    protected :_field_set
    OMIT = Object.new
    # @param raw [String]
    # @param docs [String]
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [SeedExtendsClient::Json]
    def initialize(raw:, docs:, additional_properties: nil)
      # @type [String]
      @raw = raw
      # @type [String]
      @docs = docs
      @_field_set = { "raw": @raw, "docs": @docs }.reject do |_k, v|
        v == OMIT
      end
    end

    # Deserialize a JSON object to an instance of Json
    #
    # @param json_object [String]
    # @return [SeedExtendsClient::Json]
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      raw = struct["raw"]
      docs = struct["docs"]
      new(raw: raw, docs: docs, additional_properties: struct)
    end

    # Serialize an instance of Json to a JSON object
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
      obj.raw.is_a?(String) != false || raise("Passed value for field obj.raw is not the expected type, validation failed.")
      obj.docs.is_a?(String) != false || raise("Passed value for field obj.docs is not the expected type, validation failed.")
    end
  end
end
