# frozen_string_literal: true

require "ostruct"
require "json"

module SeedTraceClient
  class Commons
    class DoublyLinkedListNodeValue
      # @return [String]
      attr_reader :node_id
      # @return [Float]
      attr_reader :val
      # @return [String]
      attr_reader :next_
      # @return [String]
      attr_reader :prev
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param node_id [String]
      # @param val [Float]
      # @param next_ [String]
      # @param prev [String]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Commons::DoublyLinkedListNodeValue]
      def initialize(node_id:, val:, next_: OMIT, prev: OMIT, additional_properties: nil)
        @node_id = node_id
        @val = val
        @next_ = next_ if next_ != OMIT
        @prev = prev if prev != OMIT
        @additional_properties = additional_properties
        @_field_set = { "nodeId": node_id, "val": val, "next": next_, "prev": prev }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of DoublyLinkedListNodeValue
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Commons::DoublyLinkedListNodeValue]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        node_id = struct["nodeId"]
        val = struct["val"]
        next_ = struct["next"]
        prev = struct["prev"]
        new(node_id: node_id, val: val, next_: next_, prev: prev, additional_properties: struct)
      end

      # Serialize an instance of DoublyLinkedListNodeValue to a JSON object
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
        obj.node_id.is_a?(String) != false || raise("Passed value for field obj.node_id is not the expected type, validation failed.")
        obj.val.is_a?(Float) != false || raise("Passed value for field obj.val is not the expected type, validation failed.")
        obj.next_&.is_a?(String) != false || raise("Passed value for field obj.next_ is not the expected type, validation failed.")
        obj.prev&.is_a?(String) != false || raise("Passed value for field obj.prev is not the expected type, validation failed.")
      end
    end
  end
end
