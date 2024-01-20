# frozen_string_literal: true

module SeedClient
  class Node
    attr_reader :id, :label, :metadata, :additional_properties
    # @param id [String] 
    # @param label [String] 
    # @param metadata [Commons::Metadata::Metadata] 
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [Node] 
    def initialze(id:, label: nil, metadata: nil, additional_properties: nil)
      # @type [String] 
      @id = id
      # @type [String] 
      @label = label
      # @type [Commons::Metadata::Metadata] 
      @metadata = metadata
      # @type [OpenStruct] 
      @additional_properties = additional_properties
    end
    # Deserialize a JSON object to an instance of Node
    #
    # @param json_object [JSON] 
    # @return [Node] 
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      id = struct.id
      label = struct.label
      metadata = Commons::Metadata::Metadata.from_json(json_object: struct.metadata)
      new(id: id, label: label, metadata: metadata, additional_properties: struct)
    end
    # Serialize an instance of Node to a JSON object
    #
    # @return [JSON] 
    def to_json
      {
 id: @id,
 label: @label,
 metadata: @metadata
}.to_json()
    end
  end
end