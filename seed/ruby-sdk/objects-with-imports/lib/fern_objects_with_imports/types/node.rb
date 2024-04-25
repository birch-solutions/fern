# frozen_string_literal: true

require_relative "../commons/metadata/types/metadata"
require "ostruct"
require "json"

module SeedObjectsWithImportsClient
  class Node
    # @return [String]
    attr_reader :id
    # @return [String]
    attr_reader :label
    # @return [SeedObjectsWithImportsClient::Commons::Metadata::Metadata]
    attr_reader :metadata
    # @return [OpenStruct] Additional properties unmapped to the current class definition
    attr_reader :additional_properties
    # @return [Object]
    attr_reader :_field_set
    protected :_field_set

    OMIT = Object.new

    # @param id [String]
    # @param label [String]
    # @param metadata [SeedObjectsWithImportsClient::Commons::Metadata::Metadata]
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [SeedObjectsWithImportsClient::Node]
    def initialize(id:, label: OMIT, metadata: OMIT, additional_properties: nil)
      @id = id
      @label = label if label != OMIT
      @metadata = metadata if metadata != OMIT
      @additional_properties = additional_properties
      @_field_set = { "id": id, "label": label, "metadata": metadata }.reject do |_k, v|
        v == OMIT
      end
    end

    # Deserialize a JSON object to an instance of Node
    #
    # @param json_object [String]
    # @return [SeedObjectsWithImportsClient::Node]
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      parsed_json = JSON.parse(json_object)
      id = struct["id"]
      label = struct["label"]
      if parsed_json["metadata"].nil?
        metadata = nil
      else
        metadata = parsed_json["metadata"].to_json
        metadata = SeedObjectsWithImportsClient::Commons::Metadata::Metadata.from_json(json_object: metadata)
      end
      new(
        id: id,
        label: label,
        metadata: metadata,
        additional_properties: struct
      )
    end

    # Serialize an instance of Node to a JSON object
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
      obj.id.is_a?(String) != false || raise("Passed value for field obj.id is not the expected type, validation failed.")
      obj.label&.is_a?(String) != false || raise("Passed value for field obj.label is not the expected type, validation failed.")
      obj.metadata.nil? || SeedObjectsWithImportsClient::Commons::Metadata::Metadata.validate_raw(obj: obj.metadata)
    end
  end
end
