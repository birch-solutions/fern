# frozen_string_literal: true

require_relative "script"
require_relative "resource_list"
require_relative "memo"
require "ostruct"
require "json"

module SeedApiClient
  class Patient
    # @return [String]
    attr_reader :resource_type
    # @return [String]
    attr_reader :name
    # @return [Array<SeedApiClient::Script>]
    attr_reader :scripts
    # @return [String]
    attr_reader :id
    # @return [Array<SeedApiClient::ResourceList>]
    attr_reader :related_resources
    # @return [SeedApiClient::Memo]
    attr_reader :memo
    # @return [OpenStruct] Additional properties unmapped to the current class definition
    attr_reader :additional_properties
    # @return [Object]
    attr_reader :_field_set
    protected :_field_set

    OMIT = Object.new

    # @param resource_type [String]
    # @param name [String]
    # @param scripts [Array<SeedApiClient::Script>]
    # @param id [String]
    # @param related_resources [Array<SeedApiClient::ResourceList>]
    # @param memo [SeedApiClient::Memo]
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [SeedApiClient::Patient]
    def initialize(resource_type:, name:, scripts:, id:, related_resources:, memo:, additional_properties: nil)
      @resource_type = resource_type
      @name = name
      @scripts = scripts
      @id = id
      @related_resources = related_resources
      @memo = memo
      @additional_properties = additional_properties
      @_field_set = {
        "resource_type": resource_type,
        "name": name,
        "scripts": scripts,
        "id": id,
        "related_resources": related_resources,
        "memo": memo
      }
    end

    # Deserialize a JSON object to an instance of Patient
    #
    # @param json_object [String]
    # @return [SeedApiClient::Patient]
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      parsed_json = JSON.parse(json_object)
      resource_type = parsed_json["resource_type"]
      name = parsed_json["name"]
      scripts = parsed_json["scripts"]&.map do |item|
        item = item.to_json
        SeedApiClient::Script.from_json(json_object: item)
      end
      id = parsed_json["id"]
      related_resources = parsed_json["related_resources"]&.map do |item|
        item = item.to_json
        SeedApiClient::ResourceList.from_json(json_object: item)
      end
      if parsed_json["memo"].nil?
        memo = nil
      else
        memo = parsed_json["memo"].to_json
        memo = SeedApiClient::Memo.from_json(json_object: memo)
      end
      new(
        resource_type: resource_type,
        name: name,
        scripts: scripts,
        id: id,
        related_resources: related_resources,
        memo: memo,
        additional_properties: struct
      )
    end

    # Serialize an instance of Patient to a JSON object
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
      obj.resource_type.is_a?(String) != false || raise("Passed value for field obj.resource_type is not the expected type, validation failed.")
      obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
      obj.scripts.is_a?(Array) != false || raise("Passed value for field obj.scripts is not the expected type, validation failed.")
      obj.id.is_a?(String) != false || raise("Passed value for field obj.id is not the expected type, validation failed.")
      obj.related_resources.is_a?(Array) != false || raise("Passed value for field obj.related_resources is not the expected type, validation failed.")
      SeedApiClient::Memo.validate_raw(obj: obj.memo)
    end
  end
end
