# frozen_string_literal: true
require "v_2/v_3/problem/types/FileInfoV2"
require "json"

module SeedClient
  module V2
    module V3
      module Problem
        class Files
          attr_reader :files, :additional_properties
          # @param files [Array<V2::V3::Problem::FileInfoV2>] 
          # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
          # @return [V2::V3::Problem::Files] 
          def initialze(files:, additional_properties: nil)
            # @type [Array<V2::V3::Problem::FileInfoV2>] 
            @files = files
            # @type [OpenStruct] Additional properties unmapped to the current class definition
            @additional_properties = additional_properties
          end
          # Deserialize a JSON object to an instance of Files
          #
          # @param json_object [JSON] 
          # @return [V2::V3::Problem::Files] 
          def self.from_json(json_object:)
            struct = JSON.parse(json_object, object_class: OpenStruct)
            files struct.files.map() do | v |
  V2::V3::Problem::FileInfoV2.from_json(json_object: v)
end
            new(files: files, additional_properties: struct)
          end
          # Serialize an instance of Files to a JSON object
          #
          # @return [JSON] 
          def to_json
            { files: @files }.to_json()
          end
          # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
          #
          # @param obj [Object] 
          # @return [Void] 
          def self.validate_raw(obj:)
            obj.files.is_a?(Array) != false || raise("Passed value for field obj.files is not the expected type, validation failed.")
          end
        end
      end
    end
  end
end