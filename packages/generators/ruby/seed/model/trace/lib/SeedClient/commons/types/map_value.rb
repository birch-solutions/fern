# frozen_string_literal: true

module SeedClient
  module Commons
    class MapValue
      attr_reader :key_value_pairs, :additional_properties

      # @param key_value_pairs [Array<Commons::KeyValuePair>]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [Commons::MapValue]
      def initialze(key_value_pairs:, additional_properties: nil)
        # @type [Array<Commons::KeyValuePair>]
        @key_value_pairs = key_value_pairs
        # @type [OpenStruct]
        @additional_properties = additional_properties
      end

      # Deserialize a JSON object to an instance of MapValue
      #
      # @param json_object [JSON]
      # @return [Commons::MapValue]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        key_value_pairs = struct.keyValuePairs.map do |v|
          Commons::KeyValuePair.from_json(json_object: v)
        end
        new(key_value_pairs: key_value_pairs, additional_properties: struct)
      end

      # Serialize an instance of MapValue to a JSON object
      #
      # @return [JSON]
      def to_json(*_args)
        {
          keyValuePairs: @key_value_pairs
        }.to_json
      end
    end
  end
end
