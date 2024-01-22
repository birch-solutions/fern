# frozen_string_literal: true
require "commons/types/NodeId"
require "commons/types/NodeId"
require "commons/types/NodeId"
require "json"

module SeedClient
  module Commons
    class DoublyLinkedListNodeValue
      attr_reader :node_id, :val, :next_, :prev, :additional_properties
      # @param node_id [Commons::NodeId] 
      # @param val [Float] 
      # @param next_ [Commons::NodeId] 
      # @param prev [Commons::NodeId] 
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [Commons::DoublyLinkedListNodeValue] 
      def initialze(node_id:, val:, next_: nil, prev: nil, additional_properties: nil)
        # @type [Commons::NodeId] 
        @node_id = node_id
        # @type [Float] 
        @val = val
        # @type [Commons::NodeId] 
        @next_ = next_
        # @type [Commons::NodeId] 
        @prev = prev
        # @type [OpenStruct] Additional properties unmapped to the current class definition
        @additional_properties = additional_properties
      end
      # Deserialize a JSON object to an instance of DoublyLinkedListNodeValue
      #
      # @param json_object [JSON] 
      # @return [Commons::DoublyLinkedListNodeValue] 
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        node_id Commons::NodeId.from_json(json_object: struct.nodeId)
        val struct.val
        next_ Commons::NodeId.from_json(json_object: struct.next)
        prev Commons::NodeId.from_json(json_object: struct.prev)
        new(node_id: node_id, val: val, next_: next_, prev: prev, additional_properties: struct)
      end
      # Serialize an instance of DoublyLinkedListNodeValue to a JSON object
      #
      # @return [JSON] 
      def to_json
        { nodeId: @node_id, val: @val, next: @next_, prev: @prev }.to_json()
      end
      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object] 
      # @return [Void] 
      def self.validate_raw(obj:)
        NodeId.validate_raw(obj: obj.node_id)
        obj.val.is_a?(Float) != false || raise("Passed value for field obj.val is not the expected type, validation failed.")
        obj.next_.nil?() || NodeId.validate_raw(obj: obj.next_)
        obj.prev.nil?() || NodeId.validate_raw(obj: obj.prev)
      end
    end
  end
end